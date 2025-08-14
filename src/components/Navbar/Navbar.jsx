import { FaGem, FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path || location.search.includes(path);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <FaGem className="logo-icon" />
          <span className="logo-text">PrimeShelter</span>
        </a>
      </div>

      {/* Hamburger Button */}
      <button 
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li><a className={isActive("/search") ? "active" : ""} href="/search?advert=for-sale">Listed Properties</a></li>
        <li><a className={isActive("/agents") ? "active" : ""} href="/agents">Estate Agents</a></li>
        <li><a className={isActive("/property-request") ? "active" : ""} href="/property-request">Property Request</a></li>
        <li><a className={isActive("/register") ? "active" : ""} href="/register">Register</a></li>
        <li><a className={isActive("/signin") ? "active" : ""} href="/signin">Sign In</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
