import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import client from "../config/db"; // เช็กว่า Path ของ DB ถูกต้อง



export const registerCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, phone_number, password } = req.body;

    // ตรวจสอบ email ซ้ำ
    const checkEmail = await client.query(`SELECT * FROM customers WHERE email = $1`, [email]);
    if (checkEmail.rows.length > 0) {
      res.status(400).json({ error: "❌ Email นี้ถูกใช้ไปแล้ว" });
      return;
    }

    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);

    // บันทึกข้อมูลลง Database
    const result = await client.query(
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
    const result = await client.query(`SELECT * FROM customers WHERE email = $1`, [email]);
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

    res.json({ message: "✅ เข้าสู่ระบบสำเร็จ", customer: { id: customer.id, name: customer.name, email: customer.email } });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
