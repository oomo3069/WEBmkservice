import { useState } from "react";
import './pagescss/forgot-password.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false); // ✅ state สำหรับหน่วงเวลา

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSending) return; // ถ้ายังหน่วงอยู่ ไม่ต้องส่งซ้ำ

    setIsSending(true); // ✅ กดปุ่มแล้วให้ disable ทันที

    try {
      const res = await fetch("http://localhost:5000/api/customers/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("ส่งอีเมลรีเซ็ตรหัสผ่านเรียบร้อยแล้ว!");
        setIsSuccess(true);
      } else {
        setMessage("ไม่สามารถส่งอีเมลได้");
        setIsSuccess(false);
      }
    } catch (err) {
      setMessage("เกิดข้อผิดพลาดบางอย่าง");
      setIsSuccess(false);
    }

    // ✅ ตั้งเวลา 5 วินาทีแล้วค่อยเปิดปุ่มอีกครั้ง
    setTimeout(() => {
      setIsSending(false);
    }, 5000);
  };

  return (
    <div className="forgot-bg">
      <div className="forgot-box">
        <h1>ลืมรหัสผ่าน</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="อีเมลของคุณ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={isSending}>
            {isSending ? "กำลังส่ง..." : "ส่งลิงก์รีเซ็ต"}
          </button>
        </form>

        {message && (
          <div className={isSuccess ? "success-box" : "error-box"}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
