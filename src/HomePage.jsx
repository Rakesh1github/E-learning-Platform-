import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";   // ⭐ IMPORTANT — your new slider

/*  
   MERGED HOMEPAGE  
   HeroSlider + Services + Steps + About + FAQ + Promo Cards  
*/

// Small button
function CTA({ to = "/notes", children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold shadow-lg hover:scale-[1.02] transform transition"
    >
      {children}
    </Link>
  );
}

// Feature cards (About section)
function FeatureCard({ title, desc, accent = "from-indigo-400 to-indigo-600" }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
      <div
        className={`w-12 h-12 rounded-xl mb-4 bg-gradient-to-br ${accent} flex items-center justify-center text-white text-lg font-bold`}
      >
        ✓
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

// Services cards (grid)
function ServiceCard({ title, short, color = "bg-amber-100" }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
      <div
        className={`w-14 h-14 rounded-lg mb-4 flex items-center justify-center text-2xl ${color}`}
      >
        🧾
      </div>
      <h5 className="font-semibold mb-2">{title}</h5>
      <p className="text-sm text-gray-600">{short}</p>
    </div>
  );
}

// FAQ item
function FAQItem({ q, a }) {
  return (
    <details className="bg-white rounded-xl p-4 shadow-sm">
      <summary className="cursor-pointer font-medium">{q}</summary>
      <p className="mt-2 text-gray-600 text-sm">{a}</p>
    </details>
  );
}

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* ⭐ HERO SLIDER SECTION (Merged) */}
      <HeroSlider />

      {/* ⭐ SERVICES SECTION */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            We Provide The Best Services
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <ServiceCard
              title="DBMS Notes"
              short="Complete notes, examples & solved questions"
              color="bg-amber-100"
            />
            <ServiceCard
              title="OOPS PYQs"
              short="Important questions & sample answers"
              color="bg-pink-100"
            />
            <ServiceCard
              title="DSA Practice"
              short="Problem sets & solutions for placements"
              color="bg-cyan-100"
            />
            <ServiceCard
              title="Computer Networks"
              short="Theory & practical notes"
              color="bg-lime-100"
            />
          </div>
        </div>
      </section>

      {/* ⭐ SIMPLE STEPS SECTION */}
      <section className="py-12 bg-[#fff7f3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Simple Solutions!</h3>
            <p className="text-gray-700 mb-6">
              We make it easy — upload, verify and share.  
              Students and teachers collaborate to build a reliable library.
            </p>

            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  1
                </div>
                <div>
                  <div className="font-semibold">Contact us</div>
                  <div className="text-sm text-gray-600">
                    Reach out if you need help uploading or finding notes.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  2
                </div>
                <div>
                  <div className="font-semibold">Consult</div>
                  <div className="text-sm text-gray-600">
                    We help you choose the best materials and formats.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  3
                </div>
                <div>
                  <div className="font-semibold">Upload & Publish</div>
                  <div className="text-sm text-gray-600">
                    Your notes get reviewed and published quickly.
                  </div>
                </div>
              </li>
            </ol>

            <div className="mt-6">
              <CTA to="/upload">Get Started</CTA>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white p-6 rounded-3xl shadow-lg">
              <div className="h-56 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
                <div className="text-5xl">🧑‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ ABOUT / AGENCY SECTION */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Agency</h3>
            <p className="text-gray-700 mb-4">
              We believe in the power of verified content.  
              Our teacher-review process ensures high-quality resources for MCA & BCA students.
            </p>
            <Link to="/about" className="text-orange-500 hover:underline">
              Read More →
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                title="Verified Content"
                desc="All notes reviewed by teachers."
                accent="from-emerald-400 to-teal-600"
              />
              <FeatureCard
                title="Placement-Focused"
                desc="Practice & guides for placements."
                accent="from-fuchsia-400 to-purple-600"
              />
              <FeatureCard
                title="Community Powered"
                desc="Students upload, we verify."
                accent="from-orange-300 to-amber-500"
              />
              <FeatureCard
                title="Easy Uploads"
                desc="Quick drag & drop support."
                accent="from-cyan-400 to-blue-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ FAQ SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl p-6">
            <img
              alt="teacher"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800"
              className="w-56 h-56 object-cover rounded-xl shadow"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
            <div className="grid gap-4">
              <FAQItem
                q="Can I access notes offline?"
                a="Yes — downloadable PDFs are available once verified."
              />
              <FAQItem q="Are notes verified?" a="Yes, teachers check each upload." />
              <FAQItem q="Are notes free?" a="Yes, all study materials are free." />
              <FAQItem
                q="Can I upload my notes?"
                a="Yes — go to the Upload Notes page."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ PROMO CARDS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-200 to-indigo-200 shadow-lg">
            <h4 className="font-semibold text-lg mb-2">Learning Bootcamp</h4>
            <p className="text-sm text-gray-700 mb-3">
              Intensive practice sessions to crack placements.
            </p>
            <Link to="/notes" className="text-sm font-medium text-indigo-700 hover:underline">
              Read More →
            </Link>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-r from-green-200 to-teal-200 shadow-lg">
            <h4 className="font-semibold text-lg mb-2">Professional Development</h4>
            <p className="text-sm text-gray-700 mb-3">
              Skill-based modules & mini-projects for resumes.
            </p>
            <Link to="/notes" className="text-sm font-medium text-teal-700 hover:underline">
              Read More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
