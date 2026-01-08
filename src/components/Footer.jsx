import React from "react";
import { Link } from "react-router-dom";
import appStore from "../assets/images/app-store.png";
import playStore from "../assets/images/play-store.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import whatsApp from "../assets/images/whatsApp.png";
import yt from "../assets/images/yt.png";

const Footer = () => {
  return (
    <footer className="footer-minimal font-inter">
      {/* <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex align-items-center gap-3">
            <img src={appStore} alt="App Store" style={{ height: 40 }} />
            <img src={playStore} alt="Google Play" style={{ height: 40 }} />
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-start mt-3 mt-md-0">
            <nav className="footer-links d-flex align-items-center gap-4">
              <div className="dropdown">
                <button className="btn btn-link text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Company</button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                  <li><Link className="dropdown-item" to="/affiliate">Affiliate</Link></li>
                </ul>
              </div>
              <div className="dropdown">
                <button className="btn btn-link text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Learn</button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                  <li><a className="dropdown-item" href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <button className="btn btn-link text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Terms</button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/terms">Terms</Link></li>
                  <li><Link className="dropdown-item" to="/privacy">Privacy</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-md-6">
            <span className="text-muted">©2025 Legal Platform. All rights reserved.</span>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-start mt-2 mt-md-0 gap-3">
            <img src={fb} alt="Facebook" style={{ height: 24 }} />
            <img src={insta} alt="Instagram" style={{ height: 24 }} />
            <img src={whatsApp} alt="WhatsApp" style={{ height: 24 }} />
            <img src={yt} alt="YouTube" style={{ height: 24 }} />
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
