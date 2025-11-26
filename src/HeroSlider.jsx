import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Stress at Work?",
    text: "Find verified notes & study materials to reduce study stress.",
    btn: "Explore Notes",
    image: "/assets/hero1.png",
    link: "/notes",
  },
  {
    title: "Prepare Smarter",
    text: "Get PYQs, DSA materials, handwritten notes & more.",
    btn: "Start Learning",
    image: "/assets/hero2.png",
    link: "/landing",
  },
  {
    title: "Upload & Share",
    text: "Help students by sharing your notes. Quick verification.",
    btn: "Upload Notes",
    image: "/assets/hero3.png",
    link: "/upload",
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
    <div className="relative w-full h-[80vh] overflow-hidden bg-gradient-to-r from-purple-700 to-purple-900 text-white flex items-center">
      
      {/* LEFT TEXT */}
      <div className="w-1/2 pl-16 space-y-6">
        <h1 className="text-4xl font-bold">{slide.title}</h1>
        <p className="text-lg w-[80%]">{slide.text}</p>
        <Link
          to={slide.link}
          className="px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300"
        >
          {slide.btn}
        </Link>

        {/* Dots */}
        <div className="flex gap-3 mt-6">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setI(idx)}
              className={`h-3 w-3 rounded-full transition-all cursor-pointer ${
                idx === i ? "bg-yellow-300 scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 flex justify-center">
        <img
          src={slide.image}
          alt="hero"
          className="max-h-[420px] object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}
