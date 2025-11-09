import React, { useState, useRef } from "react";
import Section from "./Section";
import Browse from "./Browse";

// eslint-disable-next-line no-unused-vars


export default function CategoriesWrapper() {
  const [activeCategory, setActiveCategory] = useState("all");
  const data = gethomepageData();
  const categoriesRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const categories = ["all", ...Object.keys(data)];

  const scrollPrev = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const renderContent = () => {
    if (activeCategory === "all") {
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-12 w-full"
        >
          {Object.keys(data).map((cat) => (
            <motion.div key={cat} variants={itemVariants}>
              <Section
                title={data[cat].title}
                items={data[cat].items}
                sliceCount={data[cat].sliceCount || 6}
                showPrice={data[cat].showPrice !== false}
              />
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <Browse />
          </motion.div>
        </motion.div>
      );
    } else {
      const current = data[activeCategory];
      if (!current) return null;

      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          <motion.div variants={itemVariants}>
            <Section
              title={current.title}
              items={current.items}
              sliceCount={current.sliceCount || 6}
              showPrice={current.showPrice !== false}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Browse />
          </motion.div>
        </motion.div>
      );
    }
  };

  return (
    <div className="w-full px-2 py-8 relative">
      <div className="relative">
        <button
          onClick={scrollPrev}
          className="absolute left-0 cursor-pointer top-1/2 -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-30 flex items-center justify-center shadow-lg"
        >
          ◀
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-30 flex items-center justify-center shadow-lg"
        >
          ▶
        </button>

        <div
          ref={categoriesRef}
          className="flex gap-3 overflow-x-auto flex-nowrap scrollbar-hide px-4 py-1 w-full"
        >
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 cursor-pointer py-2 rounded-lg transition ${
                activeCategory === cat ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
              } ${idx === 0 ? "ml-2" : ""} ${idx === categories.length - 1 ? "mr-2" : ""}`}
            >
              {cat === "all" ? "All" : data[cat].title}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
