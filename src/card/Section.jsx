import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";


const SCROLLABLE_SECTIONS = [
  "FASHION & STYLE",
  "PHONES & GADGETS",
  "HOME & KITCHEN",
  "BEAUTY & WELLNESS",
];

export default function Section({
  title,
  items,
  sliceCount = 4,
  showPrice = true,
  rounded = "rounded-xl",
}) {
  const [showAll, setShowAll] = useState(false);
  const [liked, setLiked] = useState({});
  const scrollRef = useRef(null);

  const toggleLike = (id, e) => {
    e.preventDefault();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isFirstSection = title === "EVERYDAY ESSENTIALS";
  const isScrollable = SCROLLABLE_SECTIONS.includes(title);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0];
    const gap = 16;
    const scrollAmount = card.offsetWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const initialCount = isFirstSection ? 5 : sliceCount;
  const topItems = items.slice(0, initialCount);
  const remainingItems = items.slice(initialCount);

  const ItemCard = ({ item }) => (
    <Link
      to={`/products/${item.id}`}
      className={`bg-white ${rounded} overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105`}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 sm:h-56 object-cover rounded-lg"
        />
        <button
          onClick={(e) => toggleLike(item.id, e)}
          className="absolute top-2 left-2 bg-white p-1.5 sm:p-2 rounded-full shadow z-10"
        >
          {liked[item.id] ? "❤️" : "🤍"}
        </button>
        {showPrice && item.price && (
          <span className="absolute bottom-2 right-2 bg-black text-white text-xs sm:text-sm px-2 py-1 rounded">
            {item.price}
          </span>
        )}
      </div>
      <div className="p-2 sm:p-3 text-center mt-1 sm:mt-2">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-950 truncate">{item.title}</h3>
      </div>
    </Link>
  );

  if (isScrollable) {
    return (
      <section className="w-full px-4">
        <div className="flex items-center justify-between mb-4 w-full">
          <h2 className="text-sm font-bold uppercase tracking-wide truncate">{title}</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-1/2 sm:w-1/3 lg:w-1/4 snap-start">
              <ItemCard item={item} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-4 py-4 -mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 w-full">
        <h2 className="text-sm font-bold uppercase tracking-wide truncate">{title}</h2>
        {items.length > initialCount && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-gray-700 cursor-pointer hover:underline text-sm w-fit"
          >
            {showAll ? "See less..." : "See more..."}
          </button>
        )}
      </div>

      <div
        className={`w-full gap-4 grid ${
          isFirstSection
            ? "grid-cols-2 sm:grid-cols-5"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        }`}
      >
        {topItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {showAll && remainingItems.length > 0 && (
        <div
          className={`w-full gap-4 mt-4 grid ${
            isFirstSection
              ? "grid-cols-2 sm:grid-cols-5"
              : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          }`}
        >
          {remainingItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
