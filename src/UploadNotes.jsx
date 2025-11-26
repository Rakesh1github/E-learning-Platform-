import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, storage, db } from "./firebase"; // adjust path if needed
import { useNavigate } from "react-router-dom";

export default function UploadNotes() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [type, setType] = useState("Notes");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const [error, setError] = useState("");
  const [status, setStatus] = useState(""); // success / error messages
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

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

  const handleFile = (e) => {
    setError("");
    const f = e.target.files?.[0];
    if (!f) return setFile(null);

    // validation
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const maxBytes = 20 * 1024 * 1024; // 20MB
    if (!allowed.includes(f.type)) {
      setError("Only PDF/DOC/DOCX files are allowed.");
      return setFile(null);
    }
    if (f.size > maxBytes) {
      setError("File size must be less than 20 MB.");
      return setFile(null);
    }
    setFile(f);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("");

    // simple auth check
    // const user = auth.currentUser;
    // if (!user) {
    //   setError("You must be logged in to upload notes.");
    //   return;
    // }
    const user = { uid: "guest_user" }; // Bypass auth for now

    if (!title.trim() || !subject || !semester || !file) {
      setError("Please complete all required fields and select a file.");
      return;
    }

    try {
      setUploading(true);
      setProgress(0);

      const storageRef = ref(storage, `notes/${user.uid}/${Date.now()}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(pct);
        },
        (err) => {
          setUploading(false);
          setError("Upload failed: " + err.message);
        },
        async () => {
          const fileUrl = await getDownloadURL(uploadTask.snapshot.ref);

          // store metadata in Firestore
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
            verified: false, // teacher will verify later
            downloads: 0,
            uploadedAt: serverTimestamp(),
          });

          setUploading(false);
          setStatus("Uploaded successfully — pending verification by teachers.");
          setTitle("");
          setSubject("");
          setSemester("");
          setType("Notes");
          setTags("");
          setDescription("");
          setFile(null);
          setProgress(0);

          // optional: navigate to notes or show toast
          navigate("/notes");
        }
      );
    } catch (err) {
      setUploading(false);
      setError("Something went wrong: " + err.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Upload Notes</h2>
        <p className="text-sm text-gray-500 mb-4">
          Upload PDFs or Word docs. All uploads are checked by our teachers before publishing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title *</label>
            <input value={title} onChange={e => setTitle(e.target.value)} className="w-full mt-2 p-3 border rounded-lg" placeholder="E.g. DBMS Unit 1 Notes" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="text-sm font-medium">Subject *</label>
              <select value={subject} onChange={e => setSubject(e.target.value)} className="w-full mt-2 p-3 border rounded-lg">
                <option value="">Select subject</option>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Semester *</label>
              <select value={semester} onChange={e => setSemester(e.target.value)} className="w-full mt-2 p-3 border rounded-lg">
                <option value="">Select semester</option>
                {[1, 2, 3, 4, 5, 6].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Type</label>
              <select value={type} onChange={e => setType(e.target.value)} className="w-full mt-2 p-3 border rounded-lg">
                <option value="Notes">Notes</option>
                <option value="PYQ">Previous Year Questions</option>
                <option value="Important">Important Questions</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Tags (comma separated)</label>
            <input value={tags} onChange={e => setTags(e.target.value)} placeholder="ER Model, Normalization" className="w-full mt-2 p-3 border rounded-lg" />
          </div>

          <div>
            <label className="text-sm font-medium">Description (optional)</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full mt-2 p-3 border rounded-lg" />
          </div>

          <div>
            <label className="text-sm font-medium">File (PDF / DOC / DOCX) *</label>

            <label className="mt-2 flex items-center gap-3 cursor-pointer">
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="hidden" />
              <div className="px-4 py-2 bg-blue-600 text-white rounded-lg">Choose file</div>

              <div className="text-sm text-gray-600">
                {file ? `${file.name} • ${(file.size / 1024 / 1024).toFixed(2)} MB` : "No file chosen"}
              </div>
            </label>
            <p className="text-xs text-gray-400 mt-1">Max 20 MB. Only PDF, DOC, DOCX allowed.</p>
          </div>

          {/* progress */}
          {uploading && (
            <div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div className="h-3 bg-blue-600" style={{ width: `${progress}%` }} />
              </div>
              <div className="text-sm text-gray-600 mt-1">{progress}%</div>
            </div>
          )}

          {error && <div className="text-red-600 text-sm">{error}</div>}
          {status && <div className="text-green-600 text-sm">{status}</div>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={uploading}
              className={`inline-flex items-center px-6 py-3 rounded-lg text-white ${uploading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>

            <button type="button" onClick={() => { setTitle(""); setSubject(""); setSemester(""); setType("Notes"); setTags(""); setFile(null); setDescription(""); setError(""); setStatus(""); }} className="text-sm text-gray-600 hover:underline">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
