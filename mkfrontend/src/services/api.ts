import axios from "axios";

const API_URL = "http://localhost:5000/api"; // เปลี่ยนเป็น URL Backend ของคุณ

// ฟังก์ชันดึงโปรไฟล์
export const getProfile = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/customers/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data; // ส่งข้อมูลกลับ
  } catch (error) {
    console.error("❌ Error fetching profile:", error);
    throw error;
  }
};
