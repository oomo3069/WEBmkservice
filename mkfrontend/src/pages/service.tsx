import "./pagescss/service.css";
import WaveBackground from "../components/wave";

const services = [
  {
    img: "/images/gone.jpg",
    title: "ซ่อม/เปลี่ยนกลอน",
    desc: "ซ่อมเปลี่ยนกลอนประตูรถยนต์ ทุกอาการ",
  },
  {
    img: "/img2/kajokfaifa.jpg",
    title: "ซ่อม/เปลี่ยนกระจกไฟฟ้า",
    desc: "ตรวจเช็คและซ่อม/เปลี่ยนกระจกไฟฟ้า แผงจรสวิตช์ ทุกอาการ ",
  },
  {
    img: "/img2/mknew24.jpg",
    title: "ติดตั้งเซ็นทรัลล็อค",
    desc: "ติดตั้งมอเตอร์เซ็นทรัลล็อคได้ทุกประตู และฝาท้าย",
  },
  {
    img: "/images/repair2.jpg",
    title: "ซ่อมกระจกมองข้างรถยนต์",
    desc: "เปลี่ยนเฝือง ชุดพับกระจกมองข้าง",
  },
  {
    img: "/img2/saringb.jpg",
    title: "ซ่อม/เปลี่ยนชุดสลิงกระจกไฟฟ้า",
    desc: "ซ่อม/เปลี่ยนสลิงขาด แตก ทุกอาการ",
  },
  {
    img: "/img2/mknew16.jpg",
    title: "เปลี่ยนมอเตอร์กระจกไฟฟ้า",
    desc: "หนึ่งในอาการที่ทำให้กระจกไม่ขึ้นก็มือมอเตอร์ไม่ทำงาน",
  },
  {
    img: "/img2/ajokfiafa55.jpg",
    title: "ติดตั้งกระจกไฟฟ้า",
    desc: "เดินสายไฟใหม่และเปลี่ยนจากมือหมุนเป็นสวิตช์กระจกไฟฟ้า ",
  },
  {
    img: "/images/mk10.jpg",
    title: "เปลี่ยนสวิตช์กระจกไฟฟ้า",
    desc: "สวิตช์เสียหาย สวิตช์ค้าง ",
  },
  {
    img: "/images/repair3.jpg",
    title: "ซ่อมฝาท้าย",
    desc: "ซ่อมฝาท้ายรถยนต์",
  },
];

const Service = () => {
  return (
   
    <div className="service-page"> 
    <div><WaveBackground/></div>
      <h1 className="service-title">บริการของเรา</h1>
      <p>ทั้งนี้เป็นเเค่บางส่วนของบริการทั้งหมดลูกค้าสามารถติดต่อสอบถามเกี่ยวกับปัญหาด้านประตูรถยนต์ได้ทุกอาการ</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="bgex"><h2 className="example-title">ตัวอย่างงานของเรา</h2></div>
<div className="example-grid">
  <div className="example-box">
  <img src="/img2/mknew16.jpg" alt="งานตัวอย่าง 1" />
    <div className="example-text">
      <h3>เปลี่ยนมอเตอร์กระจกไฟฟ้า ISUZU D-MAX</h3>
      <p>เปลี่ยนมอเตอร์กระจกไฟฟ้า ISUZU D-MAX หน้าขวา รับประกัน 1 ปี</p>
    </div>
  </div>

  <div className="example-box">
    <img src="/img2/ford5y.jpg" alt="งานตัวอย่าง 2" />
    <div className="example-text">
      <h3>ซ่อมกลอนประตู FORD Ranger Focus/FIESTA/Masda BT-50</h3>
      <p>ซ่อมกลอนประตูรถยนต์ FORD Ranger focus/FIESTA/Masda BT-50 รับประกัน <i style={{fontSize:"24px" ,color:"red"}}> 5 ปี</i></p>
    </div>
  </div>

  <div className="example-box">
  <img src="/img2/centralL.jpg" alt="งานตัวอย่าง 3" />
    <div className="example-text">
      <h3>เปลี่ยนเซ็นทรัลล็อค HYUNDAI H1</h3>
      <p>เปลี่ยนเซ็นทรัลล็อคให้ประตูเลื่อนของ HYUNDAI H1 2 ข้าง รับประกัน 1 ปี</p>
    </div>
  </div>

  <div className="example-box">
  <img src="/img2/mongkang1.jpg" alt="งานตัวอย่าง 4" />
    <div className="example-text">
      <h3>เปลี่ยนชุดพับกระจกมองข้าง HONDA HRV</h3>
      <p>ชุดพับกระจกมองข้างขวาไม่ทำงาน เปลี่ยนชุดพับรับประกัน 1 ปี</p>
    </div>
  </div>
  {/* เพิ่มตัวอย่างได้ตามต้องการ */}
</div>

    </div>
    
  );
};

export default Service;
