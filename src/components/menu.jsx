import React from "react";
import "./menu.css"; // Ensure the CSS file is imported

const Menu = ({ scrollToSection, menuVisible }) => {
  return (
    <div
      className={`menu`} // Removed "sticky-top" from here
    >
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <nav className="menu-links">
        <button onClick={() => scrollToSection("section1")}>Inicio</button>
        <button onClick={() => scrollToSection("section2")}>Contexto</button>
        <button onClick={() => scrollToSection("section3")}>Proyectos</button>
        <button onClick={() => scrollToSection("section4")}>Contacto</button>
      </nav>
    </div>
  );
};

export default Menu;
