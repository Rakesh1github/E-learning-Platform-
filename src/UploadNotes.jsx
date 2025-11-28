import { useState, useRef } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, storage, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt, FaFileAlt, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";

export default function UploadNotes() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [type, setType] = useState("Notes");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  const subjects = [
    "DBMS", "OOPS", "DSA", "Computer Networks",
    "Operating System", "Software Engineering",
    "Web Technology", "Aptitude & Reasoning",
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (f) => {
    setError("");
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const maxBytes = 20 * 1024 * 1024; // 20MB

    if (!allowed.includes(f.type)) {
      setError("Only PDF/DOC/DOCX files are allowed.");
      return;
    }
    if (f.size > maxBytes) {
      setError("File size must be less than 20 MB.");
      return;
    }
    setFile(f);
  };

  const handleReset = () => {
    setTitle("");
    setSubject("");
    setSemester("");
    setType("Notes");
    setTags("");
    setDescription("");
    setFile(null);
    setError("");
    setStatus("");
    setProgress(0);
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("");

    const user = auth.currentUser;
    if (!user) {
      setError("You must be logged in to upload notes.");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    if (!title.trim() || !subject || !semester || !file) {
      setError("Please complete all required fields and select a file.");
      return;
    }

    try {
      setUploading(true);
      setProgress(0);

      const storagePath = `notes/${user.uid}/${Date.now()}_${file.name}`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(pct);
        },
        (err) => {
          console.error("Upload error:", err);
          setUploading(false);
          setError("Upload failed: " + err.message);
        },
        async () => {
          try {
            const fileUrl = await getDownloadURL(uploadTask.snapshot.ref);
            await addDoc(collection(db, "notes"), {
              title: title.trim(),
              subject,
              semester,
              type,
              tags: tags.split(",").map(t => t.trim()).filter(Boolean),
              description: description.trim(),
              fileUrl,
              fileName: file.name,
              uploaderId: user.uid,
              verified: false,
              downloads: 0,
              uploadedAt: serverTimestamp(),
            });

            setUploading(false);
            setStatus("Uploaded successfully! Pending verification.");
            handleReset();
            setTimeout(() => navigate("/notes"), 2000);
          } catch (firestoreErr) {
            setUploading(false);
            setError("Failed to save metadata: " + firestoreErr.message);
          }
        }
      );
    } catch (err) {
      setUploading(false);
      setError("Something went wrong: " + err.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">

        {/* Left Side: Guidelines */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Share Knowledge 🚀</h2>
            <p className="opacity-90 mb-6">
              Your notes can help thousands of students ace their exams. Upload clear, high-quality materials to build your reputation.
            </p>

            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <FaInfoCircle /> Guidelines
            </h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Ensure handwriting is legible and scans are clear.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Use descriptive titles (e.g., "DBMS Unit 1 - Normalization").
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Only upload PDF, DOC, or DOCX files under 20MB.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Do not upload copyrighted material without permission.
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-md border border-gray-100 dark:border-slate-700">
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Why Upload?</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Earn badges, get recognized by the community, and help build the largest free library for MCA & BCA students.
            </p>
          </div>
        </div>

        {/* Right Side: Upload Form */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Upload Details</h2>

            {status && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-xl flex items-center gap-3 animate-fade-in-up">
                <FaCheckCircle className="text-xl" /> {status}
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl flex items-center gap-3 animate-fade-in-up">
                <FaExclamationCircle className="text-xl" /> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Drag & Drop Zone */}
              <div
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer group
                  ${dragActive
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                  }
                  ${file ? "bg-green-50 dark:bg-green-900/10 border-green-400" : ""}
                `}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileInputRef}
                />

                <div className="flex flex-col items-center gap-3">
                  {file ? (
                    <>
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl">
                        <FaFileAlt />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">{file.name}</p>
                        <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setFile(null); }}
                        className="text-red-500 hover:underline text-sm mt-2"
                      >
                        Remove File
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                        <FaCloudUploadAlt />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-gray-700 dark:text-gray-200">
                          Drag & Drop your file here
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          or click to browse (PDF, DOC, DOCX)
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Form Fields Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Title <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition dark:text-white"
                    placeholder="e.g. DBMS Unit 1"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject <span className="text-red-500">*</span></label>
                  <select
                    className="w-full p-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition dark:text-white"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((sub, i) => <option key={i} value={sub}>{sub}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Semester <span className="text-red-500">*</span></label>
                  <select
                    className="w-full p-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition dark:text-white"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    required
                  >
                    <option value="">Select Semester</option>
                    {[1, 2, 3, 4, 5, 6].map((sem) => <option key={sem} value={sem}>Semester {sem}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Type</label>
                  <select
                    className="w-full p-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition dark:text-white"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Notes">Notes</option>
                    <option value="PYQ">PYQ</option>
                    <option value="Assignment">Assignment</option>
                    <option value="Lab Manual">Lab Manual</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Description</label>
                <textarea
                  rows="3"
                  className="w-full p-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition dark:text-white"
                  placeholder="Add a brief description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              {/* Progress Bar */}
              {uploading && (
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={uploading}
                  className="px-6 py-3 rounded-xl font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? `Uploading... ${progress}%` : "Upload Notes"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
