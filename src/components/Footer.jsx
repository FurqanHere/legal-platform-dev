import React from "react";
import white_logo from "../assets/images/white-logo.svg";
import googlePlay from "../assets/images/white-google.png";
import applePlay from "../assets/images/white-apple-logo.png";
import starMap from "../assets/images/starMap.png";
import { Link } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" style={{ marginTop: "220px" }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-5 col-sm-5 text-white">
            <img alt="Logo" src={white_logo} className="footer-logo" />
            <p className="mt-4">
              Discover, search, and post UAE plate numbers in minutes <br />
              with the Digits app – your all-in-one plate number marketplace.{" "}
              <br />
              Browse exclusive numbers, connect with buyers & sellers.
            </p>
          </div>
          <div className="col-md-3 col-12 col-sm-2 text-white">
            <h4 className="fw-semibold text-start mt-5">Top Links</h4>
            <div className="d-flex justify-content-between">
              <nav className="nav footer-nav flex-column py-3 me-3">
                <Link to={"/"} className="nav-link text-white">
                  Home
                </Link>
                <a className="nav-link text-white" href="#explore">
                  How it Work!
                </a>
                <a className="nav-link text-white" href="#download">
                  Why Choose Us
                </a>
                <a className="nav-link text-white" href="#faq">
                  Screenshots
                </a>
                <a className="nav-link text-white" href="#faq">
                  Download App
                </a>
                <Link to="/terms" className="nav-link text-white">
                  Terms and Conditions
                </Link>
                <Link to="/privacy" className="nav-link text-white">
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>

          <div className="col-md-4 col-12 text-white">
            <h6 className="fw-semibold text-white fs-4 fw-bolder mt-5">
              Download App
            </h6>
            <div className="footer-download-btn mt-4">
              <a
                href="https://apps.apple.com/ae/app/digits-hire-car/id6747331842"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={applePlay}
                  className="apple-pay-img"
                  alt="Download on Apple Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.devicebee.digits"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-3"
              >
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="google-pay-img"
                />
              </a>
            </div>

            <ul className="footer-icons">
              <li className="icons-li">
                <a href="https://www.X.com/digitsap_ae" target="_blank">
                  <i class="mx-3">
                    <FaXTwitter />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/digitsap_ae" target="_blank">
                  <i class="mx-3">
                    <FaInstagram />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedIn/digitsap_ae" target="_blank">
                  <i class="mx-3">
                    <FaLinkedinIn />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="footer-bottom p-3 mt-3"
        style={{ background: "rgba(39, 39, 39, 1)" }}
      >
        <div class="container my-auto d-flex justify-content-center align-items-center">
          <div class="copyright text-start my-auto text-white">
            <span style={{ fontSize: "15px" }}>
              © Copyrights 2025 DIGITS. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
