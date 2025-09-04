import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="nav-container">
      <div className="img-container">
        <img src="/assets/Kemilogo.PNG" alt="Logo" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/consultation">Consultation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
       <Link to="/consultation">
  <button className="btn-appointment">Book Appointment</button>
</Link>

      </nav>
    </div>
  );
}

