import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './pagescss/regis.css'
import ImageSlider from '../components/imgslide'

const API_URL = import.meta.env.VITE_API_URL + "/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // ✅ เพิ่มช่องยืนยันรหัสผ่าน
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("❌ รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน!");
      return;
    }
    const res = await fetch(`${API_URL}/customers/register`, {
    // const res = await fetch("https://webmkservice.onrender.com/api/customers/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone_number: phone, password, confirmPassword }), // ✅ ส่ง confirmPassword ไปด้วย
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ สมัครสมาชิกสำเร็จ! ไปล็อกอินกันเลย!");
      navigate("/login");
    } else {
      alert("❌ สมัครไม่สำเร็จ: " + data.error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>📝 สมัครสมาชิก</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="ชื่อ" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="อีเมล" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" placeholder="เบอร์โทร" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="password" placeholder="รหัสผ่าน" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="ยืนยันรหัสผ่าน" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <button type="submit"> สมัครสมาชิก</button>
        </form>
      </div>
      <div className="register-image">
        <ImageSlider/>
      </div>
      
    </div>
  );
};

export default Register;
