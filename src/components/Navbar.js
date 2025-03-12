import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../styles.css"; // Importando o CSS atualizado

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        
        {/* Links do menu - alinhados à esquerda */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/temas" className="nav-item" onClick={() => setMenuOpen(false)}>Temas</Link></li>
          <li><Link to="/contato" className="nav-item" onClick={() => setMenuOpen(false)}>Contato</Link></li>
        </ul>

        {/* Logo centralizada */}
        <div className="navbar-logo">
          <img src="/images/logo.png" alt="Logo GuNic Festas" className="logo"/>
        </div>

        {/* Botões do Instagram e WhatsApp */}
        <div className="navbar-right">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/gunicfestas/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            <FaInstagram size={20} className="instagram-icon" />
            <span className="instagram-text"></span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5521977141344?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FaWhatsapp size={20} className="whatsapp-icon" />
            <span className="whatsapp-text"></span>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
