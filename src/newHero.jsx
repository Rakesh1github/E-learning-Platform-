import React from "react";
import { motion } from "framer-motion";
//import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-amber-50 py-20 px-6 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          <span className="text-orange-500">Prepare</span> for your interviews
          <br /> with <span className="text-gray-800">Skill Aura</span>
        </h1>

        <p className="text-lg text-gray-700">
          We have worked hard to curate the best interview content, so that you
          don’t have to!
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">✔</span>
            Here is your shortcut to land on your dream job
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">✔</span>
            Get access to TOP companies' interview questions, solutions
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">✔</span>
            Total control on what and how long you want to learn
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">✔</span>
            Become recruiters' choice by getting certified
          </li>
        </ul>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-lg shadow">
          Get Started
        </Button>
      </div>

      {/* Right 3D / Mascot Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-10 md:mt-0"
      >
        <img
          src="/your-3d-image.png"
          alt="Laptop Mascot"
          className="w-[350px] md:w-[420px]"
        />
      </motion.div>
    </section>
  );
}
