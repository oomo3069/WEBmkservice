import { useEffect, useState } from "react";
import "./ImageSlider.css";

const images = [
  "/img2/mknew16.jpg",
  "/img2/mknew17.jpg",
  "/images/mk1.jpg",
  "/images/mk2.jpg",
  "/images/mk11.jpg",
  "/images/mk4.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000); 

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
