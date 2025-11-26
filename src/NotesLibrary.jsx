import { useState } from "react";

export default function NotesLibrary() {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  const subjects = [
    "DBMS",
    "OOPS",
    "DSA",
    "Computer Networks",
    "Operating System",
    "Software Engineering",
    "Web Technology",
    "Aptitude & Reasoning",
  ];

  const semesters = [1, 2, 3, 4, 5, 6];

  const notes = [
    { title: "DBMS Unit 1 Notes", subject: "DBMS", sem: 3 },
    { title: "DBMS Full Notes", subject: "DBMS", sem: 3 },
    { title: "OOPS Important Questions", subject: "OOPS", sem: 2 },
    { title: "DSA Cheat Sheet", subject: "DSA", sem: 4 },
    { title: "Computer Networks PYQ", subject: "Computer Networks", sem: 4 },
    { title: "Operating System Notes", subject: "Operating System", sem: 5 },
    { title: "Web Tech Unit 2 Notes", subject: "Web Technology", sem: 2 },
  ];

  const filteredNotes = notes.filter((note) => {
    return (
      (selectedSubject ? note.subject === selectedSubject : true) &&
      (selectedSemester ? note.sem === selectedSemester : true) &&
      note.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        📚 Notes Library
      </h1>

      {/* Search + Filters */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-10">
        <div className="grid md:grid-cols-3 gap-4">
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring focus:ring-blue-300"
          />

          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full"
          >
            <option value="">Filter by Subject</option>
            {subjects.map((sub, i) => (
              <option key={i} value={sub}>
                {sub}
              </option>
            ))}
          </select>

          {/* Semester Filter */}
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(Number(e.target.value))}
            className="border border-gray-300 p-3 rounded-lg w-full"
          >
            <option value="">Filter by Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                Semester {sem}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {filteredNotes.length === 0 ? (
          <p className="text-center text-gray-500 col-span-3">
            No notes found 😢
          </p>
        ) : (
          filteredNotes.map((note, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
              <p className="text-gray-600 mb-4">
                {note.subject} • Semester {note.sem}
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                View →
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
