import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/footer-logo.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import whatsApp from "../assets/images/whatsApp.png";
import yt from "../assets/images/yt.png";

const Footer = () => {
  return (
    <footer className="footer-minimal font-inter">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-3">
            <h6 style={{ fontSize: 22, fontWeight: 700 }}>Quick Links</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#who-for" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#faq" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#download-app" className="text-white text-decoration-none">Download App</a></li>
              <li><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="col-md-6 text-center footer-center-text">
            <img src={logo} alt="Legal Platform" style={{ width: 70 }} />
            <h2 className="mt-3">AI Lawyer protects <br /> your rights and wallet</h2>
            <div className="mt-3">
              <button className="btn cta-btn">Try For Free</button>
            </div>
          </div>

          <div className="col-md-3 mt-0">
            <h6 style={{ fontSize: 22, fontWeight: 700 }}>Company</h6>
            <ul className="list-unstyled mt-3">
              <li className="text-white"><i className="bi bi-telephone me-2" /> +971 54 792 2842</li>
              <li className="text-white"><i className="bi bi-headset me-2" /> 800MARINE</li>
              <li className="text-white"><i className="bi bi-envelope me-2" /> legal@plateform.com</li>
              <li className="text-white"><i className="bi bi-geo-alt me-2" /> Abu Dhabi, UAE</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5 align-items-center">
          <div className="col-md-6">
            <span style={{ color: "#A6A6A6", fontSize: 22, fontWeight: 500 }}>©2025 Legal Platform. All rights reserved.</span>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-start gap-4 mt-3 mt-md-0">
            <nav className="footer-links d-flex align-items-center gap-4">
              <div className="dropdown">
                <button className="btn btn-link text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Help</button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/support">Support</Link></li>
                </ul>
              </div>
              <div className="dropdown">
                <button className="btn btn-link text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Terms</button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/terms">Terms</Link></li>
                  <li><Link className="dropdown-item" to="/privacy">Privacy</Link></li>
                  <li><Link className="dropdown-item" to="/cancellation-policy">Cancellation Policy</Link></li>
                </ul>
              </div>
            </nav>
            <div className="d-flex align-items-center gap-3">
              <img src={fb} alt="Facebook" style={{ height: 35 }} />
              <img src={insta} alt="Instagram" style={{ height: 35 }} />
              <img src={whatsApp} alt="WhatsApp" style={{ height: 35 }} />
              <img src={yt} alt="YouTube" style={{ height: 35 }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
