import React, { useEffect, useState } from "react";
import "./nav.css";
import { IoMenu } from "react-icons/io5";
import { RiCloseLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
    document.body.classList.remove("menu-open");
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menu]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="left-nav">
          <a href="#top" className="logo-link" onClick={closeMenu}>
            <div className="logo-container">
              <FaCode className="logo-icon" />
              <span className="logo-text">
                <span className="logo-name">Shaiq Ahmed</span>
                <span className="logo-title">Backend Developer</span>
              </span>
            </div>
          </a>
        </div>
        
        <div className="right-nav">
          <ul className={`nav-list ${menu ? "show" : ""}`}>
            {navItems.map((item, index) => (
              <li key={index} onClick={closeMenu}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
            {menu && <hr className="divider" />}
            <li className="nav-cta">
              <a
                href="/Shaiq's-Resume.pdf"
                className={`download-cv ${menu ? "show" : ""}`}
                download
                onClick={closeMenu}
              >
                Download Resume
              </a>
            </li>
          </ul>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {menu ? <RiCloseLine /> : <IoMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
