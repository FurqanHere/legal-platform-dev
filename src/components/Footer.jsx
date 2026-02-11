import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/footer-logo.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import whatsApp from "../assets/images/whatsApp.png";
import tiktok from "../assets/images/tiktok.png";
import AnimatedText from "./AnimatedText";

const Footer = () => {
  return (
    <footer className="footer-minimal font-inter">
      <div className="container py-5">
        <div className="row g-4 footer-grid">
          <div className="col-6 col-md-3">
            <h6 className="footer-heading"><AnimatedText text="Quick Links" /></h6>
            <ul className="list-unstyled footer-list mt-3">
              <li>
                <a href="#home" className="footer-link hover-text-theme">
                  <AnimatedText text="Home" />
                </a>
              </li>
              <li>
                <a href="#who-for" className="footer-link hover-text-theme">
                  <AnimatedText text="About Us" />
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link hover-text-theme">
                  <AnimatedText text="FAQ" />
                </a>
              </li>
              <li>
                <a href="#download-app" className="footer-link hover-text-theme">
                  <AnimatedText text="Download App" />
                </a>
              </li>
              <li>
                <Link to="/privacy" className="footer-link hover-text-theme">
                  <AnimatedText text="Privacy Policy" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6">
            <h6 className="footer-heading"><AnimatedText text="Service" /></h6>
            <ul className="list-unstyled footer-list mt-3">
              <li className="footer-text hover-text-theme"><AnimatedText text="Contract Review" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="Contract Drafting" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="General Legal Consultation" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="Will Preparation" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="Post Legal Issue" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="See More Services" /></li>
            </ul>
          </div>

          <div className="col-md-3 col-6">
            <h6 className="footer-heading"><AnimatedText text="Products" /></h6>
            <ul className="list-unstyled footer-list mt-3">
              <li className="footer-text hover-text-theme"><AnimatedText text="Lawyers App Dashboard" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="Businesses Portal" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="Law Firm Portal" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="User App Dashboard" /></li>
            </ul>
            {/* Mobile Logo Position (Left Column) */}
            <div className="footer-logo-wrap mt-4 d-block d-md-none" data-aos="fade-in" data-aos-delay="500">
              <img src={logo} alt="Legal Platform" className="footer-logo hover-scale" />
            </div>
          </div>

          <div className="col-md-3 col-6">
            <h6 className="footer-heading"><AnimatedText text="Features" /></h6>
            <ul className="list-unstyled footer-list mt-3">
              <li className="footer-text hover-text-theme"><AnimatedText text="Post Your Legal Issue" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="Hire a Lawyer" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="Chat Box" /></li>
              <li className="footer-text hover-text-theme"><AnimatedText text="Create a Case" /></li>
            </ul>
            {/* Desktop Logo Position (Right Column) */}
            <div className="footer-logo-wrap mt-4 d-none d-md-block" data-aos="fade-in" data-aos-delay="500">
              <img src={logo} alt="Legal Platform" className="footer-logo hover-scale" />
            </div>
          </div>
        </div>

        <div className="row mt-5 align-items-center footer-bottom">
          <div className="col-md-4 text-md-start text-center">
            <span className="footer-copy">
              <AnimatedText text="©2025 Legal Platform. All rights reserved." />
            </span>
          </div>
          
          <div className="col-md-4 text-center mt-3 mt-md-0 best-app-development-company">
            <div className="text-center">
              <a 
                href="https://www.devicebee.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#0E4593', textDecoration: 'none', cursor: 'default' }} 
              >
                Best App Development Company Dubai
              </a>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
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
