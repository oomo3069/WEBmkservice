// routes/visitorRoutes.ts
import express from "express";
import pool from '../config/db';

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT count FROM visits WHERE id = 1");
    res.json({ count: result.rows[0].count });
  } catch (err) {
    console.error("GET /api/visitors error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/increment", async (req, res) => {
  try {
    await pool.query("UPDATE visits SET count = count + 1 WHERE id = 1");
    res.json({ message: "เพิ่มจำนวนผู้เข้าชมแล้ว" });
  } catch (err) {
    console.error("POST /api/visitors/increment error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default router;
