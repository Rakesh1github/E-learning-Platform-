
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

import { FaRobot, FaFileAlt, FaPenFancy, FaExchangeAlt, FaListOl, FaUserGraduate, FaSpellCheck, FaCheckDouble, FaFilePdf, FaCut, FaKey, FaLayerGroup, FaMicrophone } from "react-icons/fa";

// AI Tool Card
function AIToolCard({ title, desc, icon, color, to }) {
  const CardContent = (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl transition transform hover:-translate-y-1 border border-gray-100 h-full">
      <div className={`w-12 h-12 rounded-xl mb-4 ${color} text-white flex items-center justify-center text-xl shadow-sm`}>
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );

  if (to) {
    return <Link to={to} className="block h-full">{CardContent}</Link>;
  }

  return CardContent;
}

export default function HomePage() {
  const aiTools = [
    { title: "Chatbot", desc: "Your personal 24/7 study assistant.", icon: <FaRobot />, color: "bg-blue-500", to: "/chatbot" },
    { title: "Notes Summarizer", desc: "Convert long PDFs into concise summaries.", icon: <FaFileAlt />, color: "bg-green-500", to: "/chatbot?tool=Summarizer" },
    { title: "Handwritten Notes", desc: "Auto-generate handwritten-style notes.", icon: <FaPenFancy />, color: "bg-purple-500", to: "/chatbot?tool=HandwrittenNotes" },
    { title: "Text → Notes", desc: "Convert raw text into structured notes.", icon: <FaExchangeAlt />, color: "bg-indigo-500", to: "/chatbot?tool=TextToNotes" },
    { title: "MCQ Generator", desc: "Create practice quizzes instantly.", icon: <FaListOl />, color: "bg-orange-500", to: "/chatbot?tool=MCQGenerator" },
    { title: "Assignment Helper", desc: "Get help with structuring assignments.", icon: <FaUserGraduate />, color: "bg-teal-500", to: "/chatbot?tool=AssignmentHelper" },
    { title: "Paraphrasing Tool", desc: "Rewrite content to avoid plagiarism.", icon: <FaCheckDouble />, color: "bg-cyan-500", to: "/chatbot?tool=ParaphrasingTool" },
    { title: "Grammar Checker", desc: "Fix grammar and spelling errors.", icon: <FaSpellCheck />, color: "bg-red-500", to: "/chatbot?tool=GrammarChecker" },
    { title: "PDF Cleaner", desc: "Clean and optimize scanned PDFs.", icon: <FaFilePdf />, color: "bg-pink-500", to: "/chatbot?tool=PDFCleaner" },
    { title: "Unit Splitter", desc: "Split PDFs into unit-wise notes.", icon: <FaCut />, color: "bg-yellow-500", to: "/chatbot?tool=UnitSplitter" },
    { title: "Keywords Extractor", desc: "Extract important terms for revision.", icon: <FaKey />, color: "bg-lime-500", to: "/chatbot?tool=KeywordsExtractor" },
    { title: "Flashcards", desc: "Generate flashcards for quick learning.", icon: <FaLayerGroup />, color: "bg-fuchsia-500", to: "/chatbot?tool=Flashcards" },
    { title: "Voice Search", desc: "Find notes using voice commands.", icon: <FaMicrophone />, color: "bg-rose-500", to: "/chatbot?tool=VoiceSearch" },
  ];

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

      {/* AI TOOLS SECTION */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Powered Study Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supercharge your learning with our suite of advanced AI tools designed to help you study smarter, not harder.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <AIToolCard
                key={index}
                title={tool.title}
                desc={tool.desc}
                icon={tool.icon}
                color={tool.color}
                to={tool.to}
              />
            ))}
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
