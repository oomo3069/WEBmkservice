import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/customers/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ กรุณาตรวจสอบอีเมลของคุณเพื่อเปลี่ยนรหัสผ่าน!");
    } else {
      setMessage("❌ " + data.error);
    }
  };

  return (
    <div>
      <h2>❓ ลืมรหัสผ่าน</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="กรอกอีเมลของคุณ"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">🔄 ขอเปลี่ยนรหัสผ่าน</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
