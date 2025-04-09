import { useEffect, useState } from "react";
import './visitor.css'
const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateVisitor = async () => {
      
      await fetch("http://localhost:5000/api/visitors/increment", {
        method: "POST",
      });

      const res = await fetch("http://localhost:5000/api/visitors");
      const data = await res.json();
      setCount(data.count);
    };

    updateVisitor();
  }, []);

  return (
    <div className="bg-v">
    <div style={{ textAlign: "center", fontSize: "18px", marginTop: "0" }}>
      👁️ มีผู้เข้าชมทั้งหมด: <strong>{count}</strong> คน
    </div>
    </div>
  );
};

export default VisitorCounter;
