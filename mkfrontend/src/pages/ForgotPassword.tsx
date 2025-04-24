import { useState } from "react";
import './pagescss/forgot-password.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // ✅ state ใหม่

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/customers/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage(" ส่งอีเมลรีเซ็ตรหัสผ่านเรียบร้อยแล้ว!");
        setIsSuccess(true); // ✅ ตั้งค่าให้แสดง success-box
      } else {
        setMessage(" ไม่สามารถส่งอีเมลได้");
        setIsSuccess(false);
      }
    } catch (err) {
      setMessage(" เกิดข้อผิดพลาดบางอย่าง");
      setIsSuccess(false);
    }
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
          <button type="submit">ส่งลิงก์รีเซ็ต</button>
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
