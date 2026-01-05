import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const links = [
  { name: "Templates", path: "/templates" },
  { name: "Affiliate", path: "/affiliate" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
  { name: "Blog", path: "/blog" }
];

export default function Header() {
  const [activeLink, setActiveLink] = useState(links[0].path);

  return (
    <div className="font-inter">
      <nav className="container navbar navbar-expand-lg bg-transparent px-3 position-relative">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <Link
          className="navbar-brand position-absolute start-50 translate-middle-x d-none d-lg-block"
          to="/"
        >
          <img
            src={logo}
            alt="Legal Platform"
            style={{ height: "auto", width: "70px" }}
          />
        </Link>

        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav gap-4">
            {links.map((l) => (
              <li className="nav-item" key={l.path}>
                <Link
                  to={l.path}
                  className={`nav-link ${activeLink === l.path ? "active" : ""}`}
                  onClick={() => setActiveLink(l.path)}
                  style={{ padding: "8px 0" }}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ms-auto d-flex align-items-center gap-3">
            <Link
              to="/signin"
              className="btn btn-outline-dark"
              style={{ padding: "8px 16px", borderRadius: "15px" }}
            >
              <i className="bi bi-person me-2" />
              Sign in
            </Link>
            <Link
              to="/corporate-login"
              className="btn bg-black text-white"
              style={{ padding: "10px 16px", boxShadow: "0 8px 24px rgba(0,0,0,0.25)", borderRadius: "15px", fontSize: "15px" }}
            >
              Corporates Login
            </Link>
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
            <img src={logo} alt="Legal Platform" style={{ height: 32, width: "auto" }} />
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
          <div className="d-flex align-items-center gap-3">
            <Link
              to="/signin"
              className="btn btn-outline-dark rounded-pill flex-fill"
              data-bs-dismiss="offcanvas"
            >
              <i className="bi bi-person me-2" />
              Sign in
            </Link>
            <Link
              to="/corporate-login"
              className="btn btn-dark rounded-pill flex-fill"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
              data-bs-dismiss="offcanvas"
            >
              Corporates Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
