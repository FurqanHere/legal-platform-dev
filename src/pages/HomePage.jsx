import React, { useState, useEffect, useRef } from "react";

import appStore from "../assets/images/app-store.png";
import playStore from "../assets/images/play-store.png";

import sendButton from "../assets/images/send-button.png";
import attachmentPin from "../assets/images/attachment-pin.png";

import benzinga from "../assets/images/benzinga.png";
import khaleej from "../assets/images/khaleej.png";
import chronical from "../assets/images/chronical.png";
import question from "../assets/images/question.png";
import caseImg from "../assets/images/case.png";

import appScreenshot from "../assets/images/download-section/download-app1.png";
import appScreenshot2 from "../assets/images/download-section/download-app.png";

import businessPortal from "../assets/images/businessPortal.png";
import hireMultipleLawyers from "../assets/images/hireMultipleLawyers.png";

import contractor from "../assets/images/contractor.png";
import corporate from "../assets/images/corporate.png";
import user from "../assets/images/user.png";
import firmLaw from "../assets/images/firm-law.png";
import forLawyer from "../assets/images/for-lawyer.png";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PostQuestion from "../components/PostQuestion";
import AnimatedText from "../components/AnimatedText";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";


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
  const [audienceTab, setAudienceTab] = useState("consumers");
  const [faqTab, setFaqTab] = useState("general");
  const [showPostQuestion, setShowPostQuestion] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const generalFaq = [
    {
      q: "What is AI Lawyer?",
      a: "AI Lawyer is your personal legal AI assistant that helps draft documents, answer questions, and create cases across web, iOS, and Android.",
    },
    {
      q: "Who is your platform for?",
      a: "Consumers, lawyers, law firms, and law students — anyone needing fast, clear legal assistance.",
    },
    {
      q: "What countries/languages does it works for?",
      a: "Our platform works worldwide and in many languages. You can ask questions in your language and get answers in the same language. This makes it easy for people from different places to use it.",
    },
    {
      q: "How to start using AI Lawyer?",
      a: "Sign up on web or download our mobile app, then start by asking a question or creating a case using templates.",
    },
    {
      q: 'How to get "Students & teachers" discount?',
      a: "Verify your academic email and apply the education discount in your account settings.",
    },
    {
      q: "Can I receive a refund if I'm not satisfied?",
      a: "Yes. Please review our refund policy and contact support; eligible refunds are processed quickly.",
    },
  ];
  const lawyersFaq = [
    {
      q: "How does AI Lawyer assist legal professionals?",
      a: "It accelerates legal research, drafts motions and contracts, and organizes matter notes so you can focus on strategy.",
    },
    {
      q: "Can I integrate it with my existing tools?",
      a: "You can export work to common formats and share with case management systems; integrations roadmap includes major providers.",
    },
    {
      q: "Is client data secure and compliant?",
      a: "Data is encrypted in transit and at rest. Access controls and audit trails help maintain confidentiality and compliance.",
    },
    {
      q: "Does it support jurisdiction-specific citations?",
      a: "It can tailor research summaries to your jurisdiction and include citations where available.",
    },
    {
      q: "Can my team collaborate inside the platform?",
      a: "You can share drafts, comment, and maintain case folders to collaborate with paralegals and colleagues.",
    },
    {
      q: "How does pricing work for law firms?",
      a: "Flexible seats for solo, small, and enterprise firms with usage-based tiers. Contact sales for volume discounts.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const moveX = scrollPosition * 0.5;
      setScrollX(moveX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.pageYOffset > 400);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      setScrollProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -100,
        });
      }, 300);
    }
  }, [location]);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="img1 font-inter">
        <Header />
        <div className="header-banner" id="home">
          <div className="container position-relative">
            <div className="row g-4 align-items-stretch home-hero-row">
              <div className="col-lg-6">
                <div
                  className="home-hero-main-card hp-hero-clickable"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  onClick={() => navigate("/post-your-legal-issue")}
                >
                  <h1 className="home-hero-title text-center">
                    <AnimatedText text="Post Your" tag="span" /> <span className="d-md-none"> </span>
                    <AnimatedText text="Legal" tag="span" />
                    <br className="d-none d-md-block" />
                    <span className="d-md-none"><br /></span>
                    <AnimatedText text="Issue Today" tag="span" />
                  </h1>
                  <div className="home-hero-text text-center">
                    <AnimatedText text="Post your legal issue today & connect with trusted" tag="span" />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText text="professionals ready to help. Share your situation" tag="span" />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText text="securely, receive clear guidance, & explore practical" tag="span" />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText text="solutions quickly. From family matters to business" tag="span" />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText text="disputes, get timely answers, save time & money," tag="span" />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText text="and move forward with confidence through an" tag="span" />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText text="easy, confidential online platform today." tag="span" />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn home-hero-main-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPostQuestion(true);
                      }}
                    >
                      Post Question
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hire-a-lawyer-mob-res">
                <div className="d-flex flex-column gap-4 home-hero-side">
                  <div
                    className="home-hero-card home-hero-card-light"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <h3 className="home-hero-card-title"><AnimatedText text="Hire a Lawyer" /></h3>
                    <div className="home-hero-card-text">
                      <AnimatedText text="Say goodbye to expensive legal consultation," tag="span" />
                      <span className="d-md-none"> </span>
                      <br className="d-none d-md-block" />
                      <AnimatedText text="long waits for appointments, & confusing" tag="span" />
                      <span className="d-md-none"> </span>
                      <br className="d-none d-md-block" />
                      <AnimatedText text="legal texts." tag="span" />
                    </div>
                  </div>
                  <div
                    className="home-hero-card home-hero-card-dark hp-hero-clickable"
                    data-aos="fade-left"
                    data-aos-delay="250"
                    onClick={() => navigate("/chat-with-lawyers")}
                  >
                    <h3 className="home-hero-card-title"><AnimatedText text="Chat with Lawyers" /></h3>
                    <div className="home-hero-card-text text-white">
                      <AnimatedText text="Say goodbye to expensive legal consultation," tag="span" />
                      <span className="d-md-none"> </span>
                      <br className="d-none d-md-block" />
                      <AnimatedText text="long waits for appointments, & confusing" tag="span" />
                      <span className="d-md-none"> </span>
                      <br className="d-none d-md-block" />
                      <AnimatedText text="legal texts." tag="span" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Slider */}
      <div
        className="container brands-slider"
        data-aos="fade-in"
        data-aos-duration="1200"
      >
        <div className="press-slider">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={2000}
            loop
            grabCursor
            slidesPerView={3}
            spaceBetween={40}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 24 },
              768: { slidesPerView: 3, spaceBetween: 32 },
              992: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            <SwiperSlide>
              <img
                src={benzinga}
                alt="Benzinga"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={khaleej}
                alt="Khaleej Times"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={chronical}
                alt="The Chronicle Journal"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={benzinga}
                alt="Benzinga"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={khaleej}
                alt="Khaleej Times"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={chronical}
                alt="The Chronicle Journal"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/*  What is Legal Platform  */}
      <div className="container who-for my-5" id="who-for">
        <div className="who-wrap" data-aos="fade-up">
          <h2
            className="text-white text-center pt-5 mb-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <AnimatedText text="What is Legal Platform" />
          </h2>
          <div
            className="who-for-p text-center mb-4 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <AnimatedText text="Explore features that boost your productivity. From document" tag="span" />
            <AnimatedText text="automation" tag="span" />
            <span className="d-md-none"> </span>
            <br className="d-none d-md-block" />
            <AnimatedText text="to advanced research, we've got the hard work covered." tag="span" />
          </div>
          <div className="row g-3 g-md-4 mt-2">
            <div
              className="col-md-3 pe-0"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <div className="who-card hover-lift">
                <h4>
                  <AnimatedText text="For" tag="span" /> <br className="br" /> <AnimatedText text="Corporate" tag="span" />
                </h4>
                <div>
                  <p>
                    <AnimatedText text="From deciphering complex terms to understanding rights, we've got you covered." tag="span" />
                  </p>
                </div>
                <div className="who-icon hover-rotate">
                  <img src={corporate} alt="Corporate" style={{ width: "32px", height: "32px" }} />
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="flip-left" data-aos-delay="400">
              <div className="who-card h-100 hover-lift">
                <h4>
                  <AnimatedText text="For" tag="span" /> <br className="br" /> <AnimatedText text="Users" tag="span" />
                </h4>
                <div>
                  <p>
                    <AnimatedText text="Ask questions in plain language, upload documents, and get step‑by‑step guidance on everyday legal issues." tag="span" />
                  </p>
                </div>
                <div className="who-icon hover-rotate">
                  <img src={user} alt="Users" style={{ width: "32px", height: "32px" }} />
                </div>
              </div>
            </div>
            <div
              className="col-md-3 ps-0"
              data-aos="flip-left"
              data-aos-delay="500"
            >
              <div className="who-card h-100 hover-lift">
                <h4>
                  <AnimatedText text="For" tag="span" /> <br className="br" /> <AnimatedText text="Law Firms" tag="span" />
                </h4>
                <div>
                  <p>
                    <AnimatedText text="Streamline research, drafting, and client communication while keeping every matter and document organised." tag="span" />
                  </p>
                </div>
                <div className="who-icon hover-rotate">
                  <img src={firmLaw} alt="Law Firms" style={{ width: "32px", height: "32px" }} />
                </div>
              </div>
            </div>
            <div
              className="col-md-3 ps-0"
              data-aos="flip-left"
              data-aos-delay="600"
            >
              <div className="who-card h-100 hover-lift">
                <h4>
                  <AnimatedText text="For" tag="span" /> <br className="br" /> <AnimatedText text="Lawyers" tag="span" />
                </h4>
                <div>
                  <p>
                    <AnimatedText text="Build a modern digital practice, manage clients, and respond to matters from web or mobile—on your schedule." tag="span" />
                  </p>
                </div>
                <div className="who-icon hover-rotate">
                  <img src={forLawyer} alt="Lawyers" style={{ width: "32px", height: "32px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features of AI Lawyer */}
      <div className="container features-legal" id="howitwork">
        <div className="text-center mb-3">
          <h2>
            <AnimatedText text="Features of Legal Platform" />
          </h2>
          <div
            className="text-muted mt-4 mb-5"
          >
            <AnimatedText text="Explore features that boost your productivity. From document automation" tag="span" />
            <span className="d-md-none"> </span>
            <br className="d-none d-md-block" />
            <AnimatedText text="to advanced research, we've got the hard work covered." tag="span" />
          </div>
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-tile feature-question text-center hover-lift">
              <h4 className="mt-1 fw-bold"><AnimatedText text="Post Question" /></h4>
              <img
                src={question}
                alt="Create a Question"
                className="feature-icon my-4 hover-scale"
              />
              <div className="feature-desc">
                <AnimatedText text="Explore features that boost your productivity." tag="span" />
                <span className="d-md-none"> </span>
                <br className="d-none d-md-block" />
                <AnimatedText text="From document automation to advanced research." tag="span" />
              </div>
            </div>

            <div
              className="mt-3 case-card hover-lift"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="feature-tile feature-case text-center">
                <h4 className="mt-1 fw-bold text-white"><AnimatedText text="Hire a Lawyer" /></h4>
                <img
                  src={caseImg}
                  alt="Create a Case"
                  className="feature-icon case-img my-4 hover-scale"
                />
                <div className="feature-desc">
                  <AnimatedText text="Explore features that boost your productivity." tag="span" /> <br />
                  <AnimatedText text="From document automation to advanced research." tag="span" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8" data-aos="fade-up" data-aos-delay="200">
            <div className="chat-card hover-lift">
              <div className="mini-chat-card m-3 p-4 d-flex justify-content-center">
                <img
                  src={contractor}
                  alt=""
                  className="contractor hover-scale"
                />
              </div>
              <div className="chat-bubbles">
                <div
                  className="bubble dark align-self-end hp-dark-bubble d-flex flex-column"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <AnimatedText text="I need help reviewing a service contract for my business." tag="span" />
                  <span className="time align-self-end mt-1" style={{ lineHeight: '1' }}>02:14 PM</span>
                </div>
                <div
                  className="bubble light d-flex align-items-center justify-content-center hp-light-bubble"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <AnimatedText text="Thank you, this makes everything much clearer." tag="span" />
                </div>
              </div>
              <div className="chat-footer mt-3">
                <h6 className="fw-semibold my-4 hp-ask-ai-heading">
                  <AnimatedText text="Ask AI Lawyer" />
                </h6>
                <div className="text-white hp-ask-ai-text">
                  <AnimatedText text="Legal research never been easier. Have a conversation with your virtual assistant, gain" tag="span" /> <br /> 
                  <AnimatedText text="insights and simple answers to your complex questions in real-time." tag="span" />
                </div>
                <div className="input-wrap">
                  <input type="text" placeholder="Write a Messages..." readOnly />
                  <div className="input-actions">
                    <img
                      src={attachmentPin}
                      alt=""
                      className="hover-scale hp-attachment-icon"
                    />
                    <button className="send-btn hover-scale">
                      <img
                        src={sendButton}
                        alt=""
                        className="hp-send-button-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2 business-portal-mob-res">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="multi-panel p-3 hover-lift hp-multi-panel-auto-height">
              <h6 className="fw-semibold mb-3"><AnimatedText text="Business Portal" /></h6>
              <p>
                <AnimatedText text="Access our platform with a simple tapon the web, iOS, or Android." />
              </p>
              <div className="row g-3 mt-1 px-3 pb-4">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <img
                    src={businessPortal}
                    alt=""
                    className="hover-scale hp-business-portal-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="multi-panel p-3 hover-lift hp-multi-panel-auto-height">
              <h6 className="fw-semibold mb-3">
                <AnimatedText text="Hire Multiple Lawyers for Your Business" />
              </h6>
              <p className="text-muted">
                <AnimatedText text="Access our platform with a simple tapon the web, iOS, or Android." />
              </p>
              <div className="row g-3 mt-1 px-3 pb-4">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <img
                    src={hireMultipleLawyers}
                    alt=""
                    className="hover-scale hp-hire-lawyers-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ's */}
      <div className="container my-5" id="faq">
        <div className="faq-wrap p-3 p-md-4" data-aos="fade-up">
          <div className="text-center mb-3">
            <h2><AnimatedText text="Have a question?" /></h2>
            <div
              className="text-muted mb-5"
            >
              <AnimatedText text="Browse through our frequently asked topics." />
            </div>
          </div>
          <div
            className="d-flex justify-content-center mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="faq-tabs">
              <button
                className={`faq-tab ${faqTab === "general" ? "active" : ""}`}
                onClick={() => setFaqTab("general")}
              >
                General
              </button>
              <button
                className={`faq-tab ${faqTab === "lawyers" ? "active" : ""}`}
                onClick={() => setFaqTab("lawyers")}
              >
                Lawyers
              </button>
            </div>
          </div>
          <div className="accordion accordion-flush" id="faqAccordion">
            {(faqTab === "general" ? generalFaq : lawyersFaq).map(
              (item, idx) => (
                <div
                  className="accordion-item faq-card hover-lift"
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <h2 className="accordion-header" id={`flush-heading${idx}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${idx}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${idx}`}
                    >
                      <AnimatedText text={item.q} />
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${idx}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${idx}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.a}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="container my-5" id="download-app">
        <div
          className="mobile-app-banner p-3 p-md-4 hover-lift"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row align-items-center g-4 h-100">
            <div className="col-md-6 d-none d-md-block" data-aos="fade-right" data-aos-delay="150">
              <div className="download-phones">
                <img
                  src={appScreenshot}
                  alt="App preview 1"
                  className="phone-1"
                />
                <img
                  src={appScreenshot2}
                  alt="App preview 2"
                  className="phone-2"
                />
              </div>
            </div>
            <div className="col-md-6 h-100 d-flex flex-column justify-content-center align-items-center">
              <div
                className="text-white"
              >
                <h2 className="mb-2 download-app-title text-center">
                  <AnimatedText text="Start Your Legal" /> <br />
                  <AnimatedText text="Journey Now!" baseIndex={16} />
                </h2>
                <div className="download-app-desc text-center">
                  <AnimatedText text="Stay connected with your guide on iOS &" tag="span" /> <br className="br" />
                  <AnimatedText text="Android. Handle documents, track cases," tag="span" /> <br className="br" />
                  <AnimatedText text="and receive guidance on the go." tag="span" />
                </div>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
                  <img
                    src={appStore}
                    alt="App Store"
                    className="store-badge hover-scale"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  />
                  <img
                    src={playStore}
                    alt="Google Play"
                    className="store-badge hover-scale"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </div>
                
                {/* Mobile-only images shown after buttons */}
                <div className="d-block d-md-none mt-5 text-center">
                  <div className="download-phones position-relative d-inline-block">
                    <img
                      src={appScreenshot2}
                      alt="App preview 2"
                      className="phone-2"
                      style={{ transform: "none", position: "relative", left: "auto", top: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{ "--progress": `${Math.round(scrollProgress * 100)}%` }}
        >
          <span className="scroll-top-ring" />
          <i className="bi bi-arrow-up-short" />
        </button>
      )}

      <Footer />
      <PostQuestion
        isOpen={showPostQuestion}
        onClose={() => setShowPostQuestion(false)}
      />
    </>
  );
};

export default HomePage;
