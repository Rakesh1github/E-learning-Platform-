import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 overflow-x-hidden">
      {/* Page Wrapper */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            About SkillsAura
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            SkillsAura is a comprehensive learning platform built for MCA & BCA students.  
            Our goal is to empower students with detailed notes, verified study materials,  
            coding guides, and placement preparation — all in one place.
          </p>
        </section>

        {/* Info Cards + Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "1. Who We Are",
                text: "We’re an innovative team dedicated to transforming learning for tech students through quality resources and modern tools.",
              },
              {
                title: "2. Our Mission",
                text: "To bridge the gap between academics and industry by providing simplified, practical, and placement-focused learning material.",
              },
              {
                title: "3. What We Do",
                text: "We offer structured notes, coding practice problems, and interview prep modules for MCA and BCA students.",
              },
              {
                title: "4. Our Values",
                text: "Transparency, collaboration, and innovation — we believe in helping students grow together as a community.",
              },
            ].map((item, id) => (
              <div
                key={id}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <h2 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 overflow-hidden">
            {[
              "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ].map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden w-full h-40 sm:h-48 md:h-56">
                <img
                  src={src}
                  alt={`About SkillsAura ${i}`}
                  className="rounded-lg object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
