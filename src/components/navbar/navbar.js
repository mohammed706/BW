import React, { useEffect, useState } from "react";
import logo from "../../images/logo/bw-logo.png";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="100px" alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-filter-right"></i>
          </button>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <HashLink
                  className="nav-link p-2 p-lg-3 text-black-50 active"
                  aria-current="page"
                  to="/#landing"
                >
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link p-2 p-lg-3 text-black-50"
                  to="/#services"
                >
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link p-2 p-lg-3 text-black-50"
                  to="/projects#projects"
                >
                  Projects
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link p-2 p-lg-3 text-black-50"
                  to="/#about-us"
                >
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link p-2 p-lg-3 text-black-50"
                  to="/#contact"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
            <a className="btn rounded-pill main-btn" href="#">
              Free Consultation
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
