import React, { useEffect, useState } from "react";
import "./heroSce.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    author: "Nature",
    title: "Beautiful Landscape",
    topic: "Mountains",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    author: "Ocean",
    title: "Peaceful Waves",
    topic: "Beach",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
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
