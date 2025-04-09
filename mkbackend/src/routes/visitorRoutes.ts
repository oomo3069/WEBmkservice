// routes/visitorRoutes.ts
import express from "express";
import pool from '../config/db';

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT count FROM visits WHERE id = 1");
  res.json({ count: result.rows[0].count });
});

router.post("/increment", async (req, res) => {
  await pool.query("UPDATE visits SET count = count + 1 WHERE id = 1");
  res.json({ message: "เพิ่มจำนวนผู้เข้าชมแล้ว" });
});

export default router;
