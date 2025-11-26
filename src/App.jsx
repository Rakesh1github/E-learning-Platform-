import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navs from "./Nav.jsx";
import Nav2 from "./Nav2.jsx";
import Hero from "./card/heroSec.jsx";
import Basic from "./card/Browse.jsx";
import Card2 from "./card/Card2.jsx";
import Footer from "./HeaderFooter/footer.jsx";
import AboutPage from "./About.jsx";
import HeroSection from "./newHero.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Navs />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Basic />
              <Card2 />
              <Footer />
            </>
          }
        />

        <Route path="/link" element={<Nav2 />} />

        <Route
          path="/about"
          element={
            <>
              <AboutPage />
              <HeroSection />
              <Footer />
            </>
          }
        />

        <Route
          path="/important"
          element={
            <>
              <AboutPage />
              <HeroSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
