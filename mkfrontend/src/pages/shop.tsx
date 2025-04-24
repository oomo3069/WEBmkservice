import "./pagescss/shop.css";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "กลอนไฟฟ้าประตูหน้า",
      image: "/images/comingsoon.png",
      description: "เหมาะสำหรับรถเก๋งรุ่นยอดนิยม ปลอดภัย แข็งแรง",
    },
    {
      id: 2,
      name: "มอเตอร์กระจกไฟฟ้า",
      image: "/images/comingsoon.png",
      description: "เปลี่ยนใหม่คุณภาพสูง รับประกัน 6 เดือน",
    },
    {
      id: 3,
      name: "สวิตช์กระจก",
      image: "/images/comingsoon.png",
      description: "ควบคุมกระจกได้ทุกบาน มีทั้งแท้และเทียบ",
    },
    {
      id: 4,
      name: "สายไฟชุดประตู",
      image: "/images/comingsoon.png",
      description: "สายไฟชุดใหม่ เดินสายอย่างมืออาชีพ",
    },
    {
      id: 5,
      name: "รีเลย์ประตู",
      image: "/images/comingsoon.png",
      description: "แก้ปัญหากระจกช้า/ไม่ทำงานได้อย่างตรงจุด",
    },
    {
      id: 6,
      name: "กลอนหลังรถตู้",
      image: "/images/comingsoon.png",
      description: "อุปกรณ์เฉพาะรุ่น รับประกันติดตั้งได้แน่นอน",
    },
    {
      id: 7,
      name: "ยางกระจก",
      image: "/images/comingsoon.png",
      description: "ลดเสียง ลดน้ำเข้า กระจกเลื่อนลื่นขึ้น",
    },
    {
      id: 8,
      name: "มอเตอร์เซ็นทรัลล็อค",
      image: "/images/comingsoon.png",
      description: "ระบบล็อค-ปลดล็อคทั้งคันภายในปุ่มเดียว",
    },
  ];

  return (
<div className="shop-container">
  <div className="comming">
    <h1>🚧 กำลังพัฒนา...</h1>
    <p>หน้านี้จะเปิดให้ใช้งานเร็วๆ นี้! <br />สามารถติดต่อสั่งซื้อได้ที่ 089-664-5156 (ช่างเอ็ม)</p>
  </div>

  <h1 className="shop-title">🛒 สินค้าของเรา</h1>
  <p style={{ color: 'red' }}>
    *หมายเหตุ เว็บอยู่ระหว่างพัฒนาจะมีระบบตะกร้าเข้ามาเร็วๆนี้ สามารถติดต่อสั่งซื้อได้ 089 - 664 - 5156 ช่างเอ็ม หรือ Line
  </p>

  <div className="shop-grid">
    {products.map((product) => (
      <div className="shop-item" key={product.id}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    ))}
  </div>
</div>
  );
};

export default Shop;
