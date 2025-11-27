import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navs() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* Logo + Brand */}
        <div className="logo" aria-label="Site logo">
          <img
            id="logo"
            src="/src/assets/websitelogo.png"
            alt="EduNexa Logo"
            className="logo-img"
          />
          <span className="brand">SkillsAura</span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/landing">Link</Link></li>
            <li><Link to="/important">About</Link></li>
          </ul>

        </nav>

        {/* Right side actions */}
        <div className="nav-actions">
          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
          </button>

          <button className="login-btn" aria-label="Login">
            Login
          </button>

          <button className="register-btn" aria-label="Register">
            Register
          </button>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile menu with <Link> instead of <a> */}
      <div className={`mobile-menu ${open ? "show" : ""}`} aria-hidden={!open}>
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/link" onClick={() => setOpen(false)}>Link</Link></li>
          <li><Link to="/landing" onClick={() => setOpen(false)}>Landing</Link></li>
          <li><Link to="/important" onClick={() => setOpen(false)}>Important Questions</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        </ul>

      </div>
    </header>
  );
}
