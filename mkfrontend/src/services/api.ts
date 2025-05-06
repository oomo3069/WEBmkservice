import axios from "axios";

const API_URL = "https://webmkservice.onrender.com/api";

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
