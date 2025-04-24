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
    }, 10000); // เปลี่ยนภาพทุก 3 วิ

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`slide-${index}`}
        className={`slider-image ${index === currentIndex ? "active" : ""}`}
      />
    ))}
  </div>
  );
};

export default ImageSlider;
