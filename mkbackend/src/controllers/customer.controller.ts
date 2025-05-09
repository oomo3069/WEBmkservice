import { Request, Response ,NextFunction } from "express";
import bcrypt from "bcryptjs";
import pool from "../config/db";
import jwt from "jsonwebtoken";
import crypto from "crypto"; 
import nodemailer from "nodemailer";

export const registerCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, phone_number, password, confirmPassword } = req.body;

    // ตรวจสอบ email ซ้ำ
    const checkEmail = await pool.query(`SELECT * FROM customers WHERE email = $1`, [email]);
    if (checkEmail.rows.length > 0) {
      res.status(400).json({ error: "❌ Email นี้ถูกใช้ไปแล้ว" });
      return;
    }

    // ✅ ตรวจสอบรหัสผ่าน (ต้องมีพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และความยาว >= 7)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/;
    if (!passwordRegex.test(password)) {
      res.status(400).json({ error: "❌ รหัสผ่านต้องมีตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก ตัวเลข และอย่างน้อย 7 ตัวอักษร" });
      return;
    }

    // ✅ ตรวจสอบรหัสผ่านตรงกับ confirmPassword หรือไม่
    if (password !== confirmPassword) {
      res.status(400).json({ error: "❌ รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน" });
      return;
    }

    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);

    // บันทึกข้อมูลลง Database
    const result = await pool.query(
      `INSERT INTO customers (name, email, phone_number, password) 
      VALUES ($1, $2, $3, $4) RETURNING id, name, email, phone_number, created_at`,
      [name, email, phone_number, hashedPassword]
    );

    res.status(201).json({ message: "✅ สมัครสมาชิกสำเร็จ!", customer: result.rows[0] });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const loginCustomer = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // ค้นหา email ใน database
    const result = await pool.query(`SELECT * FROM customers WHERE email = $1`, [email]);
    if (result.rows.length === 0) {
      res.status(401).json({ error: "❌ อีเมลนี้ยังไม่ได้สมัครสมาชิก" });
      return;
    }

    const customer = result.rows[0];

    // ตรวจสอบรหัสผ่าน
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      res.status(401).json({ error: "❌ รหัสผ่านไม่ถูกต้อง" });
      return;
    }
    const JWT_SECRET = process.env.JWT_SECRET as string;
    
    // 🔥 ใช้ key ตรงๆ ไม่ต้องดึงจาก .env ก่อน
    const token = jwt.sign(
      { id: customer.id, email: customer.email },
      JWT_SECRET, // ✅ ใช้ค่าจาก .env
      { expiresIn: "1h" }
    );

    res.json({ message: "✅ เข้าสู่ระบบสำเร็จ", token });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCustomerProfile = async (req: Request, res: Response) => {
  try {
      console.log("✅ getCustomerProfile ถูกเรียกใช้");

      // ดึงข้อมูลผู้ใช้จาก JWT ที่ถอดรหัสแล้ว
      const user = (req as any).user;
      console.log("📢 ข้อมูลผู้ใช้จาก JWT:", user);

      // ค้นหาข้อมูลลูกค้าจากฐานข้อมูล
      const result = await pool.query(
          `SELECT id, name, email, phone_number, created_at FROM customers WHERE id = $1`,
          [user.id]
      );

      if (result.rows.length === 0) {
          res.status(404).json({ error: "❌ ไม่พบข้อมูลผู้ใช้" });
          return;
      }

      res.json({ message: "✅ ดึงข้อมูลโปรไฟล์สำเร็จ", customer: result.rows[0] });
  } catch (err: any) {
      res.status(500).json({ error: err.message });
  }
};

