import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/logo.svg";

function Navbar() {
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
              Lucas
              <span>| Frontend Developer</span>
            </p>
          </Link>
        </div>
        <div className="navright">
          <ul>
            <li><Link to={"./"}>Home</Link></li>
            <li><Link to={"./work"}>Work</Link></li>
            <li><Link to={"./contact"}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
