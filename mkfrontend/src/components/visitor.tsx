import { useEffect, useState } from "react";
import './visitor.css'
const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateVisitor = async () => {
      
      await fetch("https://webmkservice.onrender.com/api/visitors/increment", {
        method: "POST",
      });

      const res = await fetch("https://webmkservice.onrender.com/api/visitors");
      const data = await res.json();
      setCount(data.count);
    };

    updateVisitor();
  }, []);

  return (
    <div className="bg-v">
    <div style={{ textAlign: "center", fontSize: "14px", marginTop: "0" }}>
       มีผู้เข้าชมทั้งหมด: <strong>{count}</strong> คน
    </div>
    </div>
  );
};

export default VisitorCounter;
