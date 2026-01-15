import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/footer-logo.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import whatsApp from "../assets/images/whatsApp.png";
import tiktok from "../assets/images/tiktok.png";

const Footer = () => {
  return (
    <footer className="footer-minimal font-inter">
      <div className="container py-5">
        <div className="row g-4 footer-grid">
          <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="100">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled footer-list mt-3">
              <li>
                <a href="#home" className="footer-link hover-text-theme">
                  Home
                </a>
              </li>
              <li>
                <a href="#who-for" className="footer-link hover-text-theme">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link hover-text-theme">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#download-app" className="footer-link hover-text-theme">
                  Download App
                </a>
              </li>
              <li>
                <Link to="/privacy" className="footer-link hover-text-theme">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="200">
            <h6 className="footer-heading">Service</h6>
            <ul className="list-unstyled footer-list mt-3">
              <li className="footer-text hover-text-theme">Contract Review</li>
              <li className="footer-text hover-text-theme">Contract Drafting</li>
              <li className="footer-text hover-text-theme">General Legal Consultation</li>
              <li className="footer-text hover-text-theme">Will Preparation</li>
              <li className="footer-text hover-text-theme">Post Legal Issue</li>
              <li className="footer-text hover-text-theme">See More Services</li>
            </ul>
          </div>

          <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="300">
            <h6 className="footer-heading">Products</h6>
            <ul className="list-unstyled footer-list mt-3">
              <li className="footer-text hover-text-theme">Lawyers App Dashboard</li>
              <li className="footer-text hover-text-theme">Businesses Portal</li>
              <li className="footer-text hover-text-theme">Law Firm Portal</li>
              <li className="footer-text hover-text-theme">User App Dashboard</li>
            </ul>
          </div>

          <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="400">
            <h6 className="footer-heading">Features</h6>
            <ul className="list-unstyled footer-list mt-3">
              <li className="footer-text hover-text-theme">Post Your Legal Issue</li>
              <li className="footer-text hover-text-theme">Hire a Lawyer</li>
              <li className="footer-text hover-text-theme">Chat Box</li>
              <li className="footer-text hover-text-theme">Create a Case</li>
            </ul>
            <div className="footer-logo-wrap mt-4" data-aos="fade-in" data-aos-delay="500">
              <img src={logo} alt="Legal Platform" className="footer-logo hover-scale" />
            </div>
          </div>
        </div>

        <div className="row mt-5 align-items-center footer-bottom">
          <div className="col-md-6 text-md-start text-center">
            <span className="footer-copy">
              ©2025 Legal Platform. All rights reserved.
            </span>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
            <div className="footer-social d-flex align-items-center gap-3">
              <img src={fb} alt="Facebook" className="footer-social-icon hover-scale" />
              <img src={insta} alt="Instagram" className="footer-social-icon hover-scale" />
              <img src={whatsApp} alt="WhatsApp" className="footer-social-icon hover-scale" />
              <span className="bg-white d-flex align-items-center justify-content-center rounded-pill hover-scale" style={{ width: "40px", height: "40px" }}>
                <img src={tiktok} alt="TikTok" className="footer-social-icon" style={{ width: "19px", height: "23px" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
