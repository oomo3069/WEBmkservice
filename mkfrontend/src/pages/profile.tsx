import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pagescss/profile.css";

const API_URL = import.meta.env.VITE_API_URL + "/api";
const Profile = () => {
  const [customer, setCustomer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch(`${API_URL}/customers/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (res.ok) {
          setCustomer(data.customer);
        } else if (res.status === 401) {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <div className="pdvh"><h2 className="profile-loading">กำลังโหลดข้อมูล...</h2></div>;
  
  if (!customer) return <div className="pdvh"><h2 className="profile-loading">ไม่พบข้อมูล</h2></div>;

  return (
    <div className="profile-container">
      <div className="profile-box">
        <p>*หมายเหตุ เว็บไซต์นี้อยู่ในช่วงพัฒนาระบบขอบคุณลูกที่สมัครสมาชิกและจะมีแผนมอบสิทธิพิเศษในอนาคต</p>
        <div className="profile-content">
          <div className="profile-info">
            <h2>📄 โปรไฟล์ของคุณ</h2>
            <p>👤 <strong>ชื่อ:</strong> {customer.name}</p>
            <p>📧 <strong>อีเมล:</strong> {customer.email}</p>
            <p>📞 <strong>เบอร์โทร:</strong> {customer.phone_number}</p>
            <button onClick={handleLogout}> ออกจากระบบ</button>
          </div>
          <div className="profile-image-placeholder">
            <div className="profile-image-box">
              <span>รูปโปรไฟล์</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
