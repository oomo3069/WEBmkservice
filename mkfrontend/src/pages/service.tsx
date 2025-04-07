import "./pagescss/service.css";

const services = [
  {
    img: "/images/repair1.jpg",
    title: "ซ่อมกลอนประตู",
    desc: "ซ่อมกลอนประตูรถยนต์ทุกรุ่น ทุกยี่ห้อ รับประกันคุณภาพ",
  },
  {
    img: "/images/repair2.jpg",
    title: "กระจกไฟฟ้า",
    desc: "ตรวจเช็คและเปลี่ยนกระจกไฟฟ้าอย่างมืออาชีพ",
  },
  {
    img: "/images/repair3.jpg",
    title: "รีโมทรถยนต์",
    desc: "บริการติดตั้งและซ่อมรีโมทประตูรถยนต์",
  },
  {
    img: "/images/repair4.jpg",
    title: "เซ็นทรัลล็อก",
    desc: "แก้ปัญหาเซ็นทรัลล็อกไม่ทำงาน ซ่อมไว ทันใจ",
  },
  {
    img: "/images/repair5.jpg",
    title: "มือเปิดประตู",
    desc: "เปลี่ยนมือเปิดประตูภายในและภายนอก",
  },
  {
    img: "/images/repair6.jpg",
    title: "สายไฟรถยนต์",
    desc: "เดินสายไฟใหม่ ซ่อมสายไฟรถยนต์ที่ชำรุด",
  },
  {
    img: "/images/repair7.jpg",
    title: "ล็อคเด็ก",
    desc: "ติดตั้ง/ซ่อมระบบล็อคเด็ก ปลอดภัยทุกการเดินทาง",
  },
  {
    img: "/images/repair8.jpg",
    title: "ตั้งกระจก",
    desc: "ตั้งกระจกข้างรถยนต์และระบบควบคุมมอเตอร์",
  },
  {
    img: "/images/repair9.jpg",
    title: "บริการตรวจเช็ค",
    desc: "ตรวจเช็คระบบประตูทั้งหมดโดยไม่คิดค่าใช้จ่าย",
  },
];

const Service = () => {
  return (
    <div className="service-page">
      <h1 className="service-title">บริการของเรา</h1>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
