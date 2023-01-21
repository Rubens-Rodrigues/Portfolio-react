import React from "react";
import "./MobileMenu.css";

export const MobileMenu = () => {
  const [active, setActive] = React.useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <nav
      className={`HamburgerMenu ${active ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className={`iconMenu ${active ? "change" : ""}`}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div
        className={`itens ${active ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <a href="#sobre" onClick={closeMenu}>
          Sobre
        </a>
        <a href="#projetos" onClick={closeMenu}>
          Projetos
        </a>
        <a href="#tecnologias" onClick={closeMenu}>
          Tecnologias
        </a>
        <a href="#contatos" onClick={closeMenu}>
          Contatos
        </a>
      </div>
    </nav>
  );
};
