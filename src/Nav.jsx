import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

export default function Navs() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* Logo + Brand */}
        <div className="logo" aria-label="Site logo">
          <img
            src="/src/assets/logo.svg"
            alt="College Project Logo"
            className="logo-img"
          />
          <span className="brand">EduNexa</span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/link">Link</a></li>
            <li><a href="/important">Important Questions</a></li>
            <li><a href="/about">About</a></li>
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

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`} aria-hidden={!open}>
        <ul>
          <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="/link" onClick={() => setOpen(false)}>Link</a></li>
          <li><a href="/important" onClick={() => setOpen(false)}>Important Questions</a></li>
          <li><a href="/about" onClick={() => setOpen(false)}>About</a></li>
        </ul>
      </div>
    </header>
  );
}
