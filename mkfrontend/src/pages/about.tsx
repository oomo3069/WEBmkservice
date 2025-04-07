import "./pagescss/about.css";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">เกี่ยวกับเรา</h1>

      <div className="about-box">
        <div className="about-text">
          <h2>ประสบการณ์ยาวนาน</h2>
          <p>เรามีทีมช่างผู้เชี่ยวชาญ ที่มีประสบการณ์กว่า 20 ปีในงานซ่อมประตูรถยนต์ทุกรุ่น ทุกยี่ห้อ</p>
        </div>
        <div className="about-image">
          <img src="/images/mk10.jpg" alt="ประสบการณ์" />
        </div>
      </div>

      <div className="about-box">
        <div className="about-text">
          <h2>เครื่องมือทันสมัย</h2>
          <p>เราใช้เครื่องมือที่ทันสมัยเพื่อให้การซ่อมมีประสิทธิภาพและปลอดภัย</p>
        </div>
        <div className="about-image">
          <img src="/images/about2.jpg" alt="เครื่องมือทันสมัย" />
        </div>
      </div>

      <div className="about-box">
        <div className="about-text">
          <h2>บริการประทับใจ</h2>
          <p>ให้บริการด้วยใจ ดูแลลูกค้าเหมือนครอบครัว และรับประกันผลงานหลังซ่อมทุกครั้ง</p>
        </div>
        <div className="about-image">
          <img src="/images/about3.jpg" alt="บริการ" />
        </div>
      </div>
    </div>
  );
};

export default About;