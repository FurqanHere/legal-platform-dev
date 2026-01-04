import React, { useState, useEffect, useRef } from "react";
// import car1 from "../assets/images/car1.png";

// import googlePlay from "../assets/images/googleBlack.png";
// import applePlay from "../assets/images/blackApple.png";

// import screenshot1 from "../assets/images/screenshot1.png";
// import screenshot2 from "../assets/images/screenshot2.png";
// import screenshot3 from "../assets/images/screenshot3.png";
// import screenshot4 from "../assets/images/screenshot4.png";
// import screenshot5 from "../assets/images/screenshot5.png";
// import screenshot6 from "../assets/images/screenshot6.png";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Users, GaugeCircle, Wind, DoorOpen as Door } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [scrollX, setScrollX] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const moveX = scrollPosition * 0.5;
      setScrollX(moveX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      console.log(totalDistance);
      const percentage = distance / totalDistance;
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  // const screenshots = [
  //   { id: 1, image: screenshot1 },
  //   { id: 2, image: screenshot2 },
  //   { id: 3, image: screenshot3 },
  //   { id: 4, image: screenshot4 },
  //   { id: 5, image: screenshot5 },
  //   { id: 6, image: screenshot6 },
  // ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentScreenshot((prevIndex) =>
  //       prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [screenshots.length]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className="img1">
        <Header />
        {/* Banner Sec */}
        <div className="header-banner bg-gradient" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <div className="header-txt1">
                  <div className="position-relative">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="heading-texti"
                    >
                      Digits – Connecting UAE with Premium Plate Numbers
                    </h1>
                  </div>
                </div>
                {/* <div className="mt-5" data-aos="fade-up" data-aos-delay="600">
                  <button
                    type="submit"
                    className="btn fw-bold py-2 shadow"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "10px",
                      width: "150px",
                    }}
                  >
                    Get Started
                  </button>
                </div> */}
              </div>
              {/* Right Side */}
              <div className="col-md-7 col-12">
                <div className="bg-clr">
                  <div className="bg-1"></div>
                  <div className="bg-2"></div>
                  <div className="bg-3"></div>
                  <div className="bg-4"></div>
                </div>
                <div
                  className="carImg"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  {/* <img src={bannerimg} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it Work */}
      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "100px" }}
        id="howitwork"
      >
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-secondary">How It Work</h2>
        </div>
        <div className="row my-5">
          <div
            class="col-md-4 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="deals">
              <div className="row">
                <div className="col-12">
                  <div class="icon-1 text-center">
                    <i class="bi bi-search fs-1 shadow"></i>
                  </div>
                </div>
                <div className="col-12 text-center mt-5">
                  <h6>Search Plate</h6>
                </div>
                <div className="col-12 text-center text-secondary">
                  <p style={{ fontSize: "16px" }}>
                    Browse thousands of unique UAE plate numbers with smart
                    filters.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 col-sm-12 rentSteps"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="deals">
              <div className="row">
                <div className="col-12">
                  <div class="icon-1 text-center">
                    <i class="bi bi-plus-circle-fill shadow fs-1"></i>
                  </div>
                </div>
                <div className="col-12 text-center mt-5">
                  <h6>Post Your Number</h6>
                </div>
                <div className="col-12 text-center text-secondary">
                  <p style={{ fontSize: "16px" }}>
                    List your car plate for sale in just a few simple clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div class="deals">
              <div className="row">
                <div className="col-12">
                  <div class="icon-1 text-center">
                    <i class="bi bi-people-fill fs-1 shadow"></i>
                  </div>
                </div>
                <div className="col-12 text-center mt-5">
                  <h6>Connect & Deal</h6>
                </div>
                <div className="col-12 text-center text-secondary">
                  <p style={{ fontSize: "16px" }}>
                    Chat securely, negotiate, and finalize your plate number
                    deal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container my-5 bottom" id="whyChooseUs">
        <div className="row">
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="200">
            <div className="carImg">
              {/* <img src={bannerimg} alt="" className="mt-5" width={"100%"} /> */}
            </div>
          </div>
          {/* Right Side */}
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="400">
            <div className="heading">
              <h2 className="text-secondary">Why Choose Us</h2>
              
            </div>
            <div className="details">
              <div className="det-1 mt-5">
                <h5>Smart Search & Post</h5>
                <p className="text-secondary">
                Easily search, post, and manage plate numbers with a
                user-friendly app experience.
                </p>
              </div>
              <div className="det-1 mt-5">
                <h5>Best Price Guaranteed</h5>
                <p className="text-secondary">
                  Find the best deals on UAE plate numbers. If you spot a better
                  offer, we match it.
                </p>
              </div>
              <div className="det-2 mt-5">
                <h5>Verified Listings</h5>
                <p className="text-secondary">
                  All plate numbers are verified to ensure safe and secure
                  transactions.
                </p>
              </div>
              <div className="det-3 mt-5">
                <h5>Instant Notifications</h5>
                <p className="text-secondary">
                  Get alerts when new plate numbers matching your interest are
                  posted.
                </p>
              </div>
              <div className="det-4 mt-5">
                <h5>24/7 Support</h5>
                <p className="text-secondary">
                  Our team is always available to help you with any query,
                  anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mobile App */}
      <div className="container my-5 top" id="screenshot">
        <div className="text-center mb-4" data-aos="fade-up">
          <p className="text-secondary">Our Mobile App</p>
          <h2>Awesome Screenshots</h2>
        </div>

        <div className="screenshots-desktop">
          <div className="row">
            <div className="col-md-1"></div>
            <div
              className="col-md-2 screenshots"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* <img src={screenshot1} style={{ opacity: "55%" }} alt="" /> */}
            </div>
            <div
              className="col-md-2 screenshots"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* <img src={screenshot2} style={{ opacity: "55%" }} alt="" /> */}
            </div>
            <div
              className="col-md-2 screenshots filter mt-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              {/* <img src={screenshot3} alt="" /> */}
            </div>
            <div
              className="col-md-2 screenshots mt-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {/* <img src={screenshot4} style={{ opacity: "55%" }} alt="" /> */}
            </div>
            <div
              className="col-md-2 screenshots"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {/* <img src={screenshot5} style={{ opacity: "55%" }} alt="" /> */}
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>

        {/* Mobile Screenshots Auto-Slider */}
        <div className="screenshots-mobile">
          <div className="mobile-screenshot-slider">
            <div className="text-center mb-3">
              <img
                // src={screenshots[currentScreenshot].image}
                // alt={screenshots[currentScreenshot].title}
                className="mobile-screenshot-img"
              />
              <p className="mt-2 text-muted">
                {/* {screenshots[currentScreenshot].title} */}
              </p>
            </div>

            {/* Dot Indicators */}
            <div className="d-flex justify-content-center">
              {/* {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  className={`mobile-dot-indicator ${
                    index === currentScreenshot ? "active" : ""
                  }`}
                  onClick={() => setCurrentScreenshot(index)}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>

      {/* Download our App */}
      <div className="container download-App-main" id="downloadApp">
        <div className="row downloadApp">
          <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
            <h1 className="fw-light">
              Download the <span className="fw-bold ps-0">Digits</span> app
            </h1>
            <p>
              Discover, search, and post UAE plate numbers in minutes <br />
              with the Digits app – your all-in-one plate number marketplace.
            </p>

            <div
              className="btn-download-app"
              style={{ padding: "40px 0 0 141px" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="https://apps.apple.com/ae/app/digits-hire-car/id6747331842"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  // src={applePlay}
                  style={{ width: "170px", height: "63x", marginRight: "10px" }}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.devicebee.digits"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  // src={googlePlay}
                  style={{ width: "203px", height: "63px" }}
                />
              </a>
            </div>
          </div>
          {/* <img src={bannerimg} alt="" className="download-img-section ss" /> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
