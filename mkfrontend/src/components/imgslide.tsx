import { useEffect, useState } from "react";
import "./ImageSlider.css";

const images = [
  "/images/mk8.jpg",
  "/images/mk9.jpg",
  "/images/mk11.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // เปลี่ยนภาพทุก 3 วิ

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt="slide" className="slider-image" />
    </div>
  );
};

export default ImageSlider;
