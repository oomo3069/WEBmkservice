import "./pagescss/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // ✅ เพิ่ม error message
  const [successMessage, setSuccessMessage] = useState(""); // ✅ เพิ่ม success message (optional)

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // reset ทุกครั้งที่ submit
    setSuccessMessage("");

    const res = await fetch("https://webmkservice.onrender.com/api/customers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      setSuccessMessage("✅ เข้าสู่ระบบสำเร็จ!");
      setTimeout(() => {
        navigate("/profile");
      }, 1500); // รอ 1.5 วิ แล้วค่อย navigate
    } else {
      setErrorMessage(" ล็อกอินไม่สำเร็จ: " + data.error);
    }
  };

  return (
    <div className="login-page">
      <div className="overlay" />
      <div className="login-box">
        <h2>เข้าสู่ระบบ</h2>
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
          {errorMessage && <div className="error-box">{errorMessage}</div>}
          {successMessage && <div className="success-box">{successMessage}</div>}
          <button type="submit">เข้าสู่ระบบ</button>
        </form>

       
        

        <button className="forgot-btn" onClick={() => navigate("/forgot-password")}>
           ลืมรหัสผ่าน
        </button>
      </div>
    </div>
  );
};

export default Login;
