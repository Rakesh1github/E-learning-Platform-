import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";   //  IMPORTANT — your new slider

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
function ServiceCard({ title, short, color = "bg-amber-100", to }) {
  const content = (
    <>
      <div
        className={`w-14 h-14 rounded-lg mb-4 flex items-center justify-center text-2xl ${color}`}
      >
        🧾
      </div>
      <h5 className="font-semibold mb-2">{title}</h5>
      <p className="text-sm text-gray-600">{short}</p>
    </>
  );

  const cardClass = "bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1 block h-full";

  if (to) {
    return (
      <Link to={to} className={cardClass}>
        {content}
      </Link>
    );
  }

  return <div className={cardClass}>{content}</div>;
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

      {/*  HERO SLIDER SECTION (Merged) */}
      <HeroSlider />

      {/*  SERVICES SECTION */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            We Provide The Best Services
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <ServiceCard
              title="BCA/MCA Notes"
              short="Complete notes, Important questions & answers"
              color="bg-amber-100"
              to="/landing"
            />
            <ServiceCard
              title="Programming Languages"
              short="Complete Programming Languages Notes"
              color="bg-pink-100"
              to="/programming"
            />
            <ServiceCard
              title="DSA Practice"
              short="Problem sets & solutions for placements"
              color="bg-cyan-100"
              to="/dsa"
            />
            <ServiceCard
              title="Apptitude Notes"
              short="Complete Placement Adda"
              color="bg-lime-100"
              to="/notes"
            />
          </div>
        </div>
      </section>

      {/* SIMPLE STEPS SECTION */}
      <section className="py-12 bg-[#fff7f3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Simple Solutions!</h3>
            <p className="text-gray-700 mb-6">
              We make learning effortless — upload, verify, learn and grow.
              Our platform allows students and teachers to collaborate and build a high-quality, trustworthy study ecosystem. </p>

            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  1
                </div>
                <div>
                  <div className="font-semibold">Contact us</div>
                  <div className="text-sm text-gray-600">
                    If you need help uploading, searching, or organizing notes, our support team is always ready to guide you.                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  2
                </div>
                <div>
                  <div className="font-semibold">Consult</div>
                  <div className="text-sm text-gray-600">
                    Our experts can help you identify the right study materials, formats, and subjects based on your semester and goals.                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  3
                </div>
                <div>
                  <div className="font-semibold">Upload & Publish</div>
                  <div className="text-sm text-gray-600">
                    Share your notes — we verify them carefully, ensure accuracy, and publish them for thousands of MCA & BCA students.                  </div>
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

      {/*  ABOUT / AGENCY SECTION */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Agency</h3>
            <p className="text-gray-700 mb-4">
              We believe in the power of verified and reliable educational content.
              Our teacher-review process ensures that every note, PYQ, and study guide uploaded to the platform meets high academic standards.
              With a growing student community, SkillsAura is committed to:
              Delivering accurate, error-free study material
              Building a centralized learning library for MCA & BCA
              Providing placement-focused preparation (<Link to="/dsa" className="text-blue-600 hover:underline">DSA</Link>, Aptitude, <Link to="/programming" className="text-blue-600 hover:underline">Programming</Link>)
              Encouraging student contributions to strengthen shared learning </p>
            <Link to="/about" className="text-orange-500 hover:underline">
              {/* Read More → */}
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                title="Verified Content"
                desc="Every uploaded note is carefully reviewed by our team of qualified teachers to ensure academic accuracy and reliability."
                accent="from-emerald-400 to-teal-600"
              />
              <FeatureCard
                title="Placement-Focused"
                desc="From DSA practice sheets to aptitude sets and interview prep materials — everything required for placements is available."
                accent="from-fuchsia-400 to-purple-600"
              />
              <FeatureCard
                title="Community Powered"
                desc="Students share their notes, experiences, and exam strategies.
We verify and publish — creating a powerful, collaborative knowledge space."
                accent="from-orange-300 to-amber-500"
              />
              <FeatureCard
                title="Easy Uploads"
                desc="Uploading notes is simple — drag & drop your files and our system handles the rest.
Fast, smooth and student-friendly."
                accent="from-cyan-400 to-blue-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  FAQ SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl p-6">
            <img
              alt="teacher"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

      {/*  PROMO CARDS */}
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
