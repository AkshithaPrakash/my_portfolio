import React, { useState } from "react";

const FullscreenMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div id="fullscreen-menu" className={isActive ? "active" : ""}>
        <div id="menu-close" onClick={toggleMenu}>
          &times;
        </div>
        <ul>
          <li>
            <a className="nav-link" href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div id="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </>
  );
};

export default FullscreenMenu;
