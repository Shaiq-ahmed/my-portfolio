import React, { useEffect, useState } from "react";
import "./nav.css";
import { IoMenu } from "react-icons/io5";
import { RiCloseLine } from "react-icons/ri";

const Nav = () => {
  const [menu, setMenu] = useState(false);

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

  return (
    <div className="nav-container">
      <div className="left-nav">
        <h3>
          <span className="logo">SA</span>
        </h3>
      </div>
      <div className="right-nav">
        <ul className={`nav-list ${menu ? "show" : ""}`}>
          <li onClick={closeMenu}>
            <a href="#about">About </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#work">Work</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact">Contact</a>
          </li>
          {menu && <hr className="divider" />}
          {/* <button className={`download-cv ${menu ? 'show' : ''}`}>Download CV</button> */}
          <a
            href="/Shaiq's-Resume.pdf"
            className={`download-cv ${menu ? "show" : ""}`}
            download // This attribute triggers a download
          >
            Download CV
          </a>
        </ul>

        <div className="menu" onClick={toggleMenu}>
          {menu ? <RiCloseLine /> : <IoMenu />}
        </div>
      </div>
    </div>
  );
};

export default Nav;
