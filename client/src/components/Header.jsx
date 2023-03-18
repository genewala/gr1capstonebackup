import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Header.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { logo } from "../assets/images";

const Header = ({ click }) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <header>
      <Link to={"/"}>
        <div className="logo-container">
          <img src={logo} alt="" />
          <h3>
            <span>Leocadio's</span> <br></br> Event
          </h3>
        </div>
      </Link>
      <button className="nav-toggle" onClick={click}>
        <FaBars id="menu-icon" />
      </button>

      <nav className="links-container">
        <ul className="links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/connect"}>Connect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
