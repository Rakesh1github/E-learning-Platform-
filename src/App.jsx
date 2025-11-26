import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage.jsx";
import Navs from "./Nav.jsx";
import Nav2 from "./Nav2.jsx";
 import Hero from "./card/heroSec.jsx";
import Basic from "./card/Browse.jsx";
import Card2 from "./card/Card2.jsx";
import Footer from "./HeaderFooter/footer.jsx";
import AboutPage from "./About.jsx";
import LandingPage from "./LandingPage.jsx";
import NotesLibrary from "./NotesLibrary.jsx";
import UploadNotes from "./UploadNotes.jsx";

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
        {/* <Route
          path="/"
          element={
            <>
              <Hero />
              <Basic />
              <Card2 />
            </>
          }
        /> */}

        {/* Link Page */}
        <Route path="/link" element={<Nav2 />} />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Important Questions (using AboutPage for now) */}
        <Route path="/important" element={<AboutPage />} />

        {/*  Notes Library Page */}
        <Route path="/notes" element={<NotesLibrary />} />
        <Route path="/upload" element={<UploadNotes />} />

      </Routes>

      {/* Footer */}
      <Footer />

    </Router>
  );
}

export default App;
