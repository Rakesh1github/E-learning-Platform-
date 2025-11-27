import React, { useState, useEffect } from "react";
import H1 from "./assets/H1.png";
import H2 from "./assets/H2.jpg";

const slides = [
  {
    title: "Overwhelmed by deadlines?",
    text: "Discover a curated collection of verified notes designed to simplify your learning journey and reduce study stress.",
    image: H1,
  },
  {
    title: "Prepare Smarter, Not Harder",
    text: "Access Previous Year Questions (PYQs), DSA materials, and handwritten notes to ace your exams with confidence.",
    image: H2,
  },
  {
    title: "Share Knowledge, Help Others",
    text: "Join our community by uploading your notes. Quick verification ensures quality for everyone.",
    image: H1,
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setI((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[i];

  return (
    <div className="relative w-full h-[85vh] overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay for readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl tracking-tight animate-fade-in-up">
          {slide.title}
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl drop-shadow-lg font-light leading-relaxed text-gray-100 animate-fade-in-up delay-100">
          {slide.text}
        </p>

        {/* Dots */}
        <div className="flex gap-4 mt-12">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setI(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer ${idx === i ? "bg-yellow-400 scale-150 w-8" : "bg-white/40 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
