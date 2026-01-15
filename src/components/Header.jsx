import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-legal-company" },
  { name: "Contact Us", path: "/support" },
  { name: "FAQ", path: "/#faq" },
  { name: "Blog", path: "/blog" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <div className="font-inter">
      <nav className="container navbar navbar-expand-lg bg-transparent px-3 header-main-nav">
        <Link 
          className="navbar-brand d-flex align-items-center" 
          to="/"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src={logo} alt="Legal Platform" className="logo hover-scale" />
        </Link>

        <button
          className="navbar-toggler d-lg-none ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse d-none d-lg-flex header-desktop-nav">
          <ul className="navbar-nav header-nav-list gap-4">
            {links.map((l, index) => (
              <li 
                className="nav-item" 
                key={l.path}
                data-aos="fade-down"
                data-aos-delay={100 + index * 50}
                data-aos-duration="800"
              >
                <Link
                  to={l.path}
                  className={`nav-link header-nav-link hover-text-theme ${
                    activeLink === l.path ? "active" : ""
                  }`}
                  onClick={() => setActiveLink(l.path)}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header-segment-group d-flex align-items-center">
            <button 
              type="button" 
              className="header-segment-btn header-segment-law hover-lift"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Law Firm
            </button>
            <button 
              type="button" 
              className="header-segment-btn header-segment-corp hover-lift"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Corporate
            </button>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start d-lg-none"
        id="offcanvasNavbar"
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <Link className="offcanvas-title mb-0" to="/" data-bs-dismiss="offcanvas">
            <img src={logo} alt="Legal Platform" className="header-offcanvas-logo" />
          </Link>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav gap-2 mb-3">
            {links.map((l) => (
              <li className="nav-item" key={l.path}>
                <Link
                  to={l.path}
                  className={`nav-link ${activeLink === l.path ? "active" : ""}`}
                  onClick={() => setActiveLink(l.path)}
                  data-bs-dismiss="offcanvas"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header-mobile-actions">
            <Link
              to="/signin"
              className="btn btn-outline-dark rounded-pill d-flex justify-content-center align-items-center"
              data-bs-dismiss="offcanvas"
            >
              <i className="bi bi-person me-2" />
              Law Firm
            </Link>
            <Link
              to="/corporate-login"
              className="btn btn-dark rounded-pill header-mobile-corp-btn d-flex justify-content-center align-items-center"
              data-bs-dismiss="offcanvas"
            >
              Corporate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
