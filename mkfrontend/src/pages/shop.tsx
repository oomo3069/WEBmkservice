import "./pagescss/shop.css";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "กลอนไฟฟ้าประตูหน้า",
      image: "/images/lock1.jpg",
      description: "เหมาะสำหรับรถเก๋งรุ่นยอดนิยม ปลอดภัย แข็งแรง",
    },
    {
      id: 2,
      name: "มอเตอร์กระจกไฟฟ้า",
      image: "/images/windowmotor.jpg",
      description: "เปลี่ยนใหม่คุณภาพสูง รับประกัน 6 เดือน",
    },
    {
      id: 3,
      name: "สวิตช์กระจก",
      image: "/images/switch.jpg",
      description: "ควบคุมกระจกได้ทุกบาน มีทั้งแท้และเทียบ",
    },
    {
      id: 4,
      name: "สายไฟชุดประตู",
      image: "/images/wire.jpg",
      description: "สายไฟชุดใหม่ เดินสายอย่างมืออาชีพ",
    },
    {
      id: 5,
      name: "รีเลย์ประตู",
      image: "/images/relay.jpg",
      description: "แก้ปัญหากระจกช้า/ไม่ทำงานได้อย่างตรงจุด",
    },
    {
      id: 6,
      name: "กลอนหลังรถตู้",
      image: "/images/vanlock.jpg",
      description: "อุปกรณ์เฉพาะรุ่น รับประกันติดตั้งได้แน่นอน",
    },
    {
      id: 7,
      name: "ยางกระจก",
      image: "/images/rubber.jpg",
      description: "ลดเสียง ลดน้ำเข้า กระจกเลื่อนลื่นขึ้น",
    },
    {
      id: 8,
      name: "มอเตอร์เซ็นทรัลล็อค",
      image: "/images/centralmotor.jpg",
      description: "ระบบล็อค-ปลดล็อคทั้งคันภายในปุ่มเดียว",
    },
  ];

  return (
    <div className="shop-container">
      <h1 className="shop-title">🛒 สินค้าของเรา</h1>
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
