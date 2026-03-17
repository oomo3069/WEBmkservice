import { useEffect, useState } from "react";
import './visitor.css'
const API_URL = import.meta.env.VITE_API_URL + "/api";
const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateVisitor = async () => {
      // await fetch("https://webmkservice.onrender.com/api/visitors/increment", {
      await fetch(`${API_URL}/visitors/increment`, {
        method: "POST",
      });

      // const res = await fetch("https://webmkservice.onrender.com/api/visitors");
      const res = await fetch(`${API_URL}/visitors`);
      const data = await res.json();
      setCount(data.count);
    };

    updateVisitor();
  }, []);

  return (
    
      <div className="bg-v">
        <div style={{ textAlign: "center", fontSize: "12px", marginTop: "0" }}>
          มีผู้เข้าชมทั้งหมด: <strong>{count}</strong> คน
        </div>
      </div>
    
  );
};

export default VisitorCounter;
