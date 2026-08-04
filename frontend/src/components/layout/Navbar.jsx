import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Moon,
  Sun,
  X,
  User,
  LogOut,
} from "lucide-react";

import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const navigate = useNavigate();

  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Mobile Menu State
  const [open, setOpen] = useState(false);

  // Apply Theme
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Lock Scroll when Mobile Menu Opens
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Authentication
  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const isLoggedIn = Boolean(token);

  // Functions
  const closeMenu = () => {
    setOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    closeMenu();

    navigate("/");

    window.location.reload();
  };
    return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="AiGONIC Logo"
          />

          <div className="logo-text">
            <h2>
              <span className="logo-ai">Ai</span>
              <span className="logo-gonic">GONIC</span>
            </h2>

            <p>INNOVATIONS PVT LTD</p>
          </div>
        </Link>

        {/* Overlay */}
        {open && (
          <div
            className="nav-overlay"
            onClick={closeMenu}
          />
        )}

        {/* Navigation */}
        <nav className={open ? "nav-open" : ""}>

          <button
            className="nav-close"
            onClick={closeMenu}
          >
            <X size={20} />
          </button>

          <ul>
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="nav-mobile-only">
                      <button
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="nav-login"
                onClick={closeMenu}
              >
                Login
              </Link>

              <Link
                to="/talk"
                className="nav-cta"
                onClick={closeMenu}
              >
                Let's Talk
                <span>→</span>
              </Link>
            </>
          ) : (
            <>
              <div className="nav-user">
                <User size={18} />
                <span>{user?.full_name}</span>
              </div>

              <Link
                to="/talk"
                className="nav-cta"
                onClick={closeMenu}
              >
                Let's Talk
                <span>→</span>
              </Link>

              <button
                className="nav-logout"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}
        </div>

      </nav>
              <div className="navbar-actions">

          <button
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="nav-login"
              >
                Login
              </Link>

              <Link
                to="/talk"
                className="nav-cta"
              >
                Let's Talk
                <span>→</span>
              </Link>
            </>
          ) : (
            <>
              <div className="nav-user">
                <User size={18} />
                <span>{user?.full_name}</span>
              </div>

              <button
                className="nav-logout"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                Logout
              </button>

              <Link
                to="/talk"
                className="nav-cta"
              >
                Let's Talk
                <span>→</span>
              </Link>
            </>
          )}

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;