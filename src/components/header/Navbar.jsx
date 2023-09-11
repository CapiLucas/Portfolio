import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbarDiv">
      <nav className="navbg">
        <div className="navleft">
          <img src={LogoSvg} alt="logo" className="logo" />
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="link-no-decoration"
          >
            <p className="name">
              Lucas <span>| Frontend Developer</span>
            </p>
          </Link>
        </div>
        <div className={`navright ${menuOpen ? "open" : ""}`}>
          <div className="menu-icon" onClick={toggleMenu}>
            <i class="fa-solid fa-bars"></i>         
          </div>
          <ul className="secciones">
            <li>
              <Link to={"./"}>Home</Link>
            </li>
            <li>
              <Link to={"./experience"}>Experience</Link>
            </li>
            <li>
              <Link to={"./contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;