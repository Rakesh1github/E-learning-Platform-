import React, { useEffect, useState } from "react";
import "./heroSce.css";
import heroImg1 from "../assets/heroImg1.jpg";
import heroImg2 from "../assets/heroImg2.jpg";
import heroImg3 from "../assets/heroImg3.jpg";

const slides = [
  {
    id: 1,
    image: heroImg1,
    author: "Nature",
    title: "Beautiful Landscape",
    topic: "Mountains",
  },
  {
    id: 2,
    image: heroImg2,
    author: "Ocean",
    title: "Peaceful Waves",
    topic: "Beach",
  },
  {
    id: 3,
    image: heroImg3,
    author: "City",
    title: "Modern Architecture",
    topic: "Urban",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="content">
            <div className="author">{slide.author}</div>
            <div className="title">{slide.title}</div>
            <div className="topic">{slide.topic}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
