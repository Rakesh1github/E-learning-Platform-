import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export default function NotesLibrary() {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Fetch notes from Firebase
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const q = query(collection(db, "notes"), orderBy("uploadedAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedNotes = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const filteredNotes = notes.filter((note) => {
    const matchesSubject = selectedSubject ? note.subject === selectedSubject : true;
    // Ensure type consistency for semester comparison (string vs number)
    const matchesSemester = selectedSemester ? Number(note.semester) === Number(selectedSemester) : true;
    const matchesSearch = note.title.toLowerCase().includes(search.toLowerCase());

    return matchesSubject && matchesSemester && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent px-6 py-10 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-10 dark:text-white">
        📚 Notes Library
      </h1>

      {/* Search + Filters */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md mb-10 transition-colors duration-300">
        <div className="grid md:grid-cols-3 gap-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full focus:ring focus:ring-blue-300 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400"
          />

          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full dark:bg-slate-700 dark:text-white"
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
            className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full dark:bg-slate-700 dark:text-white"
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
        {loading ? (
          <div className="col-span-3 text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading notes...</p>
          </div>
        ) : filteredNotes.length === 0 ? (
          <p className="text-center text-gray-500 col-span-3">
            No notes found matching your filters 😢
          </p>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{note.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{note.subject}</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Sem {note.semester}</span>
                  {note.type && <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{note.type}</span>}
                </div>
                {note.description && <p className="text-gray-500 text-sm mb-4 line-clamp-3">{note.description}</p>}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  {note.uploadedAt?.seconds ? new Date(note.uploadedAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                </span>
                <a
                  href={note.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline flex items-center gap-1"
                >
                  View PDF →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
