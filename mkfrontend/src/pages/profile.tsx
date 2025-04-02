import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [customer, setCustomer] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("❌ กรุณาเข้าสู่ระบบก่อน!");
        navigate("/login"); // 🔄 ถ้าไม่มี Token ให้ไปหน้า Login
        return;
      }

      const res = await fetch("http://localhost:5000/api/customers/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (res.ok) {
        setCustomer(data.customer);
      } else {
        alert("❌ ดึงข้อมูลไม่สำเร็จ: " + data.error);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // 🗑️ ลบ Token ออกจาก localStorage
    navigate("/login"); // 🔄 กลับไปหน้า Login
  };

  if (!customer) return <h2>กำลังโหลดข้อมูล...</h2>;

  return (
    <div>
      <h2>📄 โปรไฟล์ของคุณ</h2>
      <p>👤 ชื่อ: {customer.name}</p>
      <p>📧 อีเมล: {customer.email}</p>
      <p>📞 เบอร์โทร: {customer.phone_number}</p>
      <button onClick={handleLogout}>🚪 ออกจากระบบ</button>
    </div>
  );
};

export default Profile;
