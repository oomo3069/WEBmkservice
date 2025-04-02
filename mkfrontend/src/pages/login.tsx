import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/customers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token); // ✅ เก็บ Token ลง LocalStorage
      alert("✅ เข้าสู่ระบบสำเร็จ!");
      navigate("/profile"); // 🔄 ไปหน้าโปรไฟล์
    } else {
      alert("❌ ล็อกอินไม่สำเร็จ: " + data.error);
    }
  };

  return (
    <div>
      <h2>🔑 เข้าสู่ระบบ</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="อีเมล"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">🚀 เข้าสู่ระบบ</button>
      </form>

      {/* 🔥 เพิ่มปุ่มลืมรหัสผ่าน */}
      <button onClick={() => navigate("/forgot-password")}>
        ❓ ลืมรหัสผ่าน?
      </button>
    </div>
  );
};

export default Login;
