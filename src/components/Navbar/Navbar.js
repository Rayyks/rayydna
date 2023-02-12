import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.svg";
import "./style.css";
const Navbar = () => {
  return (
    <nav className="navbar p-4 bg-zinc-800 rounded-full fixed">
      <div className="container1">
        <div className="navbar-brand font-bold">
          {/* <img
            src={logo}
            alt="logo"
            width="30"
            height="auto"
            className="d-inline-block align-text-top"
          /> */}
          <span className=" text-white ">ME</span>
        </div>
        <div className="nav-list pt-1 space-x-7">
          <NavLink to="/" className="link me-5">
            Home
          </NavLink>
          <NavLink to="/about" className="link me-5">
            About
          </NavLink>
          <NavLink to="/projects" className="link">
            Projects
          </NavLink>
        </div>
        <div>
          <NavLink to="/contact" className="link">
            <button className="custom-btn pt-2 pb-2 pr-2 pl-2 border-white bg-white">
              Contact me
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
