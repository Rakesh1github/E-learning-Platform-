import { Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        {/* decorative gradient blobs */}
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-gradient-to-tr from-purple-300 via-pink-300 to-yellow-200 opacity-40 rounded-full filter blur-3xl animate-[spin_30s_linear_infinite] pointer-events-none"></div>
        <div className="absolute -left-40 bottom-0 w-80 h-80 bg-gradient-to-tr from-cyan-200 to-blue-300 opacity-30 rounded-full filter blur-2xl animate-[spin_40s_linear_reverse_infinite] pointer-events-none"></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Learn Smarter, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Grow Faster</span> —
                <div className="text-2xl md:text-3xl font-semibold mt-2">MCA & BCA Students Platform</div>
              </h1>

              <p className="text-gray-600 text-lg max-w-xl">
                Verified notes, past year papers, important questions, DSA practice,
                programming guides & community uploads — everything you need to excel.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/notes" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 transform transition">
                  Explore Notes
                </Link>

                <Link to="/upload" className="inline-flex items-center border border-gray-300 px-6 py-3 rounded-lg bg-white hover:bg-gray-100 transition">
                  Upload Notes
                </Link>
              </div>

              <div className="flex gap-4 text-sm text-gray-500 mt-4">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Verified by Teachers
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Placement-focused
                </div>
              </div>
            </div>

            {/* Right — Mockup card */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition hover:scale-102">
                <div className="h-64 md:h-80 bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
                  <div className="text-gray-400">UI / App Preview</div>
                </div>
                <div className="p-4">
                  <div className="h-2 bg-gray-200 rounded-full mb-3" />
                  <div className="h-2 bg-gray-200 rounded-full w-3/4" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US (FEATURES) ---------- */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Browse by Subjects
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "DBMS", color: "from-teal-400 to-teal-600", icon: "📦" },
            { name: "OOPS", color: "from-purple-400 to-purple-600", icon: "🐟" },
            { name: "DSA", color: "from-yellow-400 to-orange-500", icon: "🤖" },
            { name: "Computer Networks", color: "from-blue-400 to-blue-600", icon: "🌐" },

            { name: "Operating System", color: "from-orange-400 to-orange-600", icon: "💻" },
            { name: "Software Engineering", color: "from-pink-400 to-pink-600", icon: "📘" },
            { name: "Web Technology", color: "from-indigo-400 to-indigo-600", icon: "🌐" },
            { name: "Aptitude & Reasoning", color: "from-green-400 to-green-600", icon: "🔢" },
          ].map((card, i) => (
            <div
              key={i}
              className={`
          bg-gradient-to-b ${card.color}
          text-white rounded-3xl shadow-xl p-6 flex flex-col items-center
          transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer
        `}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-center">{card.name}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* ---------- SUBJECTS (COLORFUL CARDS) ---------- */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Browse by Subjects</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "DBMS", color: "from-teal-400 to-teal-600", icon: "📦", link: "/notes" },
            { name: "OOPS", color: "from-purple-400 to-purple-600", icon: "🐟", link: "/notes" },
            { name: "DSA", color: "from-yellow-400 to-orange-500", icon: "🤖", link: "/dsa" },
            { name: "Computer Networks", color: "from-blue-400 to-blue-600", icon: "🌐", link: "/notes" },

            { name: "Operating System", color: "from-orange-400 to-orange-600", icon: "💻", link: "/notes" },
            { name: "Software Engineering", color: "from-pink-400 to-pink-600", icon: "📘", link: "/notes" },
            { name: "Web Technology", color: "from-indigo-400 to-indigo-600", icon: "🕸️", link: "/notes" },
            { name: "Aptitude & Reasoning", color: "from-green-400 to-green-600", icon: "🔢", link: "/notes" },
          ].map((s, idx) => (
            <Link
              to={s.link}
              key={idx}
              className={`group rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl transform transition-all hover:-translate-y-3`}
              aria-label={`Open ${s.name}`}
              style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.02))` }}
            >
              <div className={`w-24 h-24 mb-4 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br ${s.color} shadow-inner transition-transform transform group-hover:scale-105`}>
                <span className="drop-shadow-sm">{s.icon}</span>
              </div>
              <div className="text-lg font-semibold">{s.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- LATEST NOTES (cards with hover color) ---------- */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Notes</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "DBMS Unit 1 Notes", subject: "DBMS", sem: 3, color: "from-blue-400 to-blue-600" },
            { title: "OOPS Important Questions", subject: "OOPS", sem: 2, color: "from-purple-400 to-purple-600" },
            { title: "Computer Networks PYQ", subject: "CN", sem: 4, color: "from-teal-400 to-teal-600" },
          ].map((note, i) => (
            <article
              key={i}
              className="relative rounded-2xl overflow-hidden bg-white shadow-lg transition transform hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* colored header */}
              <div className={`p-5 bg-gradient-to-r ${note.color} text-white`}>
                <h3 className="text-lg font-semibold">{note.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{note.subject} • Semester {note.sem}</p>
                <div className="flex items-center justify-between">
                  <Link to={`/notes`} className="text-blue-600 font-medium hover:underline">View →</Link>
                  <div className="text-sm text-gray-400">PDF • 1.2MB</div>
                </div>
              </div>

              {/* subtle animated gradient overlay on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-black/5 mix-blend-multiply"></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- COMMUNITY CTA ---------- */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-center rounded-t-3xl shadow-xl mt-10">
        <h2 className="text-4xl font-bold mb-4">Contribute to the Community</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Upload your notes, PYQs, and study materials — help thousands of MCA & BCA students learn better.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/upload" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-gray-100 transition">
            Upload Your Notes
          </Link>
          <Link to="/notes" className="px-8 py-3 rounded-lg text-white border border-white/30 hover:bg-white/10 transition">
            Browse Notes
          </Link>
        </div>
      </section>

    </div>
  );
}
