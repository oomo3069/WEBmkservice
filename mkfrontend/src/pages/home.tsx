import { useEffect, useState } from "react";
import "./pagescss/home.css";
import { Link } from "react-router-dom";
import VisitorCounter from "../components/visitor";

const images = [
  './images/mk1.jpg',
  './images/mk2.jpg',
  './images/mk4.jpg'
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // 🖼️ preload images
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // 🔁 update slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false); // reset loading state for fade effect
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="slideshow-wrapper">
        <div
          className={`slideshow-bg ${loaded ? "fade-in" : "fade-out"}`}
          style={{ backgroundImage: `url(${images[index]})` }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="home-content">
        {/* 👇 ตามเดิมทั้งหมด ไม่ต้องเปลี่ยน */}
        <div className="welcome-text">
          <h1>ยินดีต้อนรับสู่ร้านซ่อมประตูรถยนต์</h1>
          <h1>กลอนประตูรถยนต์กระจกไฟฟ้า</h1>
          <p>ซ่อมกลอนประตู • ติดตั้งกระจกไฟฟ้า • ซ่อมกระจกมองข้าง </p>
          <p>กระจกไม่ทำงาน • เปลี่ยนมอเตอร์กระจกไฟฟ้า • ซ่อมสวิตช์กระจกไฟฟ้า</p>
          <p>ติดตั้งกันขโมย • ฝาท้ายประตู • เปลี่ยนมอเตอร์เซ็นทรัลล็อค</p>
          
          <div className="contract">
            <a className="b facebook" href="https://www.facebook.com/mirrorssamutprakarn" target="_blank" rel="noopener noreferrer">
              <div className="b facebook">
                <span className="icon"><img src='./icon/icons8-facebook-48.png' height={30} width={30} /></span> Facebook
              </div>
            </a>
            <div className="b line">
              <span className="icon"><img src='./icon/icons8-line-48.png' height={30} width={30} /></span>Line
            </div>
            <a className="b map" href="https://maps.app.goo.gl/YsbDt4rke4kr16s26" target="_blank" rel="noopener noreferrer">
              <div className="b map">
                <span className="icon"><img src='./icon/icons8-google-maps-48.png' height={30} width={30} /></span> Google Map
              </div>
            </a>
          </div>

          <a className="phone" href="tel:0896645156"><span>📞 &nbsp;</span>ติดต่อ : 089 - 664 - 5156 • ช่างเอ็ม</a>
          <div className="countview"><VisitorCounter/></div>
        </div>
      
        <div className="feature-boxes">
          <Link to="/service"><div className="box" style={{ backgroundImage: `url('/images/repair3.jpg')` }}>บริการ</div></Link>
          <Link to="/shop"><div className="box" style={{ backgroundImage: `url('/images/tukajock.jpg')` }}>ร้านค้า</div></Link>
          <Link to="/about"><div className="box" style={{ backgroundImage: `url('/images/mk10.jpg')` }}>เกี่ยวกับ</div></Link>
          <Link to="/contact"><div className="box" style={{ backgroundImage: `url('/images/hcontract.jpg')` }}>ติดต่อ</div></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
