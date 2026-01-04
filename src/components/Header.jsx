import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/digits-logo.png";
import line from "../assets/images/yellow-line.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const links = [
  { name: "Home", path: "/" },
  { name: "How it Work?", path: "howitwork" },
  { name: "Why Choose Us", path: "whyChooseUs" },
  { name: "Screenshot", path: "screenshot" },
  { name: "Download App", path: "downloadApp" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent px-3">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
          {/* <h3>Digits</h3> */}
        </Link>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* ❖  inline menu shows ONLY lg and up */}
        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul
            className="navbar-nav ms-auto gap-4"
            style={{
              borderRadius: "35px",
              marginRight: "30px",
              padding: "8px 20px",
              background: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {links.map((l) => (
              <li
                className="nav-item"
                key={l.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Link
                  to={`/#${l.path}`}
                  className={`nav-link ${
                    activeLink === l.path ? "active" : ""
                  }`}
                  onClick={() => setActiveLink(l.path)}
                  style={{
                    padding: "8px 12px",
                    margin: 0
                  }}
                >
                  {l.name}
                </Link>
                {/* {activeLink === l.path && (
                  <img src={line} alt="" className="nav-underline" />
                )} */}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ───── OFF‑CANVAS (mobile only) ───── */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        id="offcanvasNavbar"
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title mb-0">
            <img src={logo} alt="Logo" className="logo" />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav gap-3">
            {links.map((l) => (
              <li
                className="nav-item d-flex flex-column align-items-start"
                key={l.path}
              >
                <ScrollLink
                  style={{ fontSize: "1.125rem" }}
                  to={l.path}
                  smooth
                  duration={200}
                  spy
                  className={`nav-link ${
                    activeLink === l.path ? "active" : ""
                  }`}
                  onClick={() => setActiveLink(l.path)}
                  data-bs-dismiss="offcanvas"
                >
                  {l.name}
                </ScrollLink>
                {/* {activeLink === l.path && (
                  <img src={line} alt="" className="nav-underline" />
                )} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
