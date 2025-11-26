import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navs() {
  const [open, setOpen] = useState(false);

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
            {/* <li><Link to="/link">Link</Link></li> */}
            <li><Link to="/landing">Link</Link></li>
            <li><Link to="/important">About</Link></li>
            {/* <li><Link to="/about">About</Link></li> */}
          </ul>

        </nav>

        {/* Right side actions */}
        <div className="nav-actions">
          <div className="search">
            <input
              type="search"
              placeholder="Search here..."
              aria-label="Search"
              className="search-input"
            />
            <button className="search-btn" aria-label="Search button">
              <FaSearch />
            </button>
          </div>

          <button className="login-btn" aria-label="Login">
            Login
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
