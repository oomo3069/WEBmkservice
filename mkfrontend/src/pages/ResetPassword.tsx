import { useState } from "react";
import { useParams } from "react-router-dom";
import './pagescss/ResetPassword.css'
export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setMessage("รหัสผ่านไม่ตรงกัน");
      return;
    }

    try {
      const res = await fetch(`https://webmkservice.onrender.com/api/customers/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("ตั้งรหัสผ่านใหม่สำเร็จ!");
      } else {
        setMessage(data.message || "Token ไม่ถูกต้องหรือหมดอายุ");
      }
    } catch (err) {
      setMessage("เกิดข้อผิดพลาดบางอย่าง");
    }
  };

  return (
    <div className="reset-bg">
      <div className="reset-box">
        <h1>ตั้งรหัสผ่านใหม่</h1>
        <form onSubmit={handleSubmit}>
        <input
          className="w-full border p-2 mb-4 rounded"
          type="password"
          placeholder="รหัสผ่านใหม่"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="w-full border p-2 mb-4 rounded"
          type="password"
          placeholder="ยืนยันรหัสผ่าน"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          ยืนยันรหัสผ่านใหม่
        </button>
      </form>
      {message && (
      <div className={message.includes("สำเร็จ") ? "success-box" : "error-box"}>
        {message}
      </div>
    )}
  </div>
</div>
  );
}
