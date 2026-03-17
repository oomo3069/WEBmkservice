import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const getProfile = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/customers/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {

    throw error;
  }
};