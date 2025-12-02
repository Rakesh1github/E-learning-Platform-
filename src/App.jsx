import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage.jsx";
import Navs from "./Nav.jsx";
import Footer from "./HeaderFooter/footer.jsx";
import AboutPage from "./About.jsx";
import LandingPage from "./LandingPage.jsx";
import NotesLibrary from "./NotesLibrary.jsx";
import UploadNotes from "./UploadNotes.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import DSAHome from "./dsa/DSAHome.jsx";
import DSAProblemList from "./dsa/DSAProblemList.jsx";
import DSAProblemDetail from "./dsa/DSAProblemDetail.jsx";
import CodeCompiler from "./CodeCompiler.jsx";
import ProgrammingHome from "./programming/ProgrammingHome.jsx";
import ProgrammingLanguage from "./programming/ProgrammingLanguage.jsx";
import ProgrammingDetail from "./programming/ProgrammingDetail.jsx";
import ChatbotPage from "./ChatbotPage.jsx";

function App() {
  return (
    <Router>

      {/* Header */}
      <Navs />

      {/* All Routes */}
      <Routes>

        {/* Landing Page */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Upload Notes */}
        <Route path="/upload-notes" element={<UploadNotes />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DSA Routes */}
        <Route path="/dsa" element={<DSAHome />} />
        <Route path="/dsa/:category" element={<DSAProblemList />} />
        <Route path="/dsa/problem/:id" element={<DSAProblemDetail />} />

        {/* Code Compiler */}
        <Route path="/compiler" element={<CodeCompiler />} />

        {/* Programming Languages Routes */}
        <Route path="/programming" element={<ProgrammingHome />} />
        <Route path="/programming/:language" element={<ProgrammingLanguage />} />
        <Route path="/programming/topic/:id" element={<ProgrammingDetail />} />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Important Questions (using AboutPage for now) */}
        {/* <Route path="/important" element={<AboutPage />} /> */}

        {/*  Notes Library Page */}
        <Route path="/notes" element={<NotesLibrary />} />
        <Route path="/upload" element={<UploadNotes />} />

        {/* Chatbot Page */}
        <Route path="/chatbot" element={<ChatbotPage />} />

      </Routes>

      {/* Footer */}
      <Footer />

    </Router>
  );
}

export default App;
