import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Nav.css";

export default function Navs() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

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
            <li><Link to="/compiler">Compiler</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/upload-notes">Upload</Link></li>
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

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-white">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full border border-gray-400" />
                ) : (
                  <FaUserCircle className="text-2xl" />
                )}
                <span className="hidden md:block text-sm font-medium">
                  {user.displayName || user.email?.split("@")[0]}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="register-btn"
                style={{ backgroundColor: "#dc2626", border: "none" }} // Red for logout
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="login-btn" aria-label="Login">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="register-btn" aria-label="Register">
                  Register
                </button>
              </Link>
            </>
          )}

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
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/compiler" onClick={() => setOpen(false)}>Compiler</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/notes" onClick={() => setOpen(false)}>Notes</Link></li>
          <li><Link to="/upload-notes" onClick={() => setOpen(false)}>Upload</Link></li>
          {!user && (
            <>
              <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
              <li><Link to="/register" onClick={() => setOpen(false)}>Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
