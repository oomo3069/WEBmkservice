import { useEffect, useState } from "react";
import "./pagescss/home.css";
import { Link } from "react-router-dom";
import VisitorCounter from "../components/visitor";
import Service from './service.tsx'
import './pagescss/service.css'
import About from './about.tsx'
import './pagescss/about.css'
import Contact from './contact.tsx'
import './pagescss/contact.css'

const images = [
  './img2/mknew2.jpg',
  './img2/mknew11.jpg',
  './img2/mknew16.jpg',
  './img2/mknew8.jpg',
  './img2/mknew21.jpg',
  './img2/mknew17.jpg',
  './img2/mknew23.jpg'
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false); // reset loading state for fade effect
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page-wrapper">
    <div className="home-container">
      <div className="slideshow-wrapper">
        <div
          className={`slideshow-bg ${loaded ? "fade-in" : "fade-out"}`}
          style={{ backgroundImage: `url(${images[index]})` }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="home-content">
        
        <div className="welcome-text">
          <h1>ยินดีต้อนรับสู่ร้านซ่อมประตูรถยนต์</h1>
          <h1>กลอนประตูรถยนต์กระจกไฟฟ้า</h1>
          <p>ซ่อมกลอนประตู • เปลี่ยนมอเตอร์เซ็นทรัลล็อค • ซ่อมกระจกมองข้าง </p>
          <p>กระจกไม่ทำงาน • เปลี่ยนมอเตอร์กระจกไฟฟ้า • ซ่อมสวิตช์กระจกไฟฟ้า</p>
          <p>ติดตั้งกันขโมย • ฝาท้ายประตู • ติดตั้งกระจกไฟฟ้า และอื่นๆ</p>
          <div className="yellow-text">
            <p><i style={{marginTop:"10px"}}>ร้านเปิดให้บริการทุกวันครับ</i></p>
            <p><i style={{marginBottom:"10px"}}>ตรวจเช็คอาการฟรีไม่เสียค่าใช้จ่าย</i></p>
          </div>
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

          <a className="phone" href="tel:0896645156">ติดต่อ : 089 - 664 - 5156 • ช่างเอ็ม</a>
          
          
        </div>
      
        <div className="feature-boxes">
        <Link to="/service"><div className="box bg1"><span>บริการ</span></div></Link>
        <Link to="/shop"><div className="box bg2"><span>ร้านค้า</span></div></Link>
        <Link to="/about"><div className="box bg3"><span>เกี่ยวกับ</span></div></Link>
        <Link to="/contact"><div className="box bg4"><span>ติดต่อ</span></div></Link>
        </div>

      </div>
    </div>
          <div className="service-section">
            <Service />
          </div>
          <div className="about-section">
            <About />
          </div>
          <div className="contact-section">
            <Contact />
          </div>
          <div className="countview"><VisitorCounter/></div>
     </div>
  );
};

export default Home;
