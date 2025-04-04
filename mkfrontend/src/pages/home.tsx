import { useState, useEffect } from "react";
import "./pagescss/home.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg"
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // เปลี่ยนภาพทุก 5 วินาที

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="slideshow">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="overlay">
        <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
        <p>สร้างประสบการณ์ที่ดีที่สุดให้กับคุณ</p>
      </div>
    </div>
  );
};

export default Home;

