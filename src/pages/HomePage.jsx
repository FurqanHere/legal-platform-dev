import React, { useState, useEffect, useRef } from "react";

import leftLeaves from "../assets/images/left-leaves.png";
import rightLeaves from "../assets/images/right-leaves.png";

import portalApp from "../assets/images/portal-app.png";

import appStore from "../assets/images/app-store.png";
import playStore from "../assets/images/play-store.png";

import benzinga from "../assets/images/benzinga.png";
import khaleej from "../assets/images/khaleej.png";
import chronical from "../assets/images/chronical.png";
import question from "../assets/images/question.png";
import caseImg from "../assets/images/case.png";

import postSS1 from "../assets/images/postQuestion-ss.png";
import postSS2 from "../assets/images/postQuestion-ss2.png";
import postSS3 from "../assets/images/postQuestion-ss3.png";

import appScreenshot from "../assets/images/download-section/download-app1.png";
import appScreenshot2 from "../assets/images/download-section/download-app.png";

import doc from "../assets/images/doc.png";
import lawyer from "../assets/images/lawyer.png";
import law from "../assets/images/law.png";
import books from "../assets/images/books.png";
import stores from "../assets/images/stores.png";

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
  const [audienceTab, setAudienceTab] = useState("consumers");
  const [faqTab, setFaqTab] = useState("general");
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
      q: "How to get \"Students & teachers\" discount?",
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
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
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

  return (
    <>
      <div className="img1 font-inter">
        <Header />
        <div className="header-banner" id="home">
          <div className="container position-relative">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-6">
                <div
                  className="hero-card text-center "
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <h1 className="hero-title">
                    AI Lawyer: your <br /> personal legal AI <br /> assistant
                  </h1>
                  <div className="mt-3">
                    <button className="btn hero-btn">Try For Free</button>
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-4 mt-4 hero-tabs">
                    <span
                      className={audienceTab === "consumers" ? "active" : ""}
                      onClick={() => setAudienceTab("consumers")}
                    >
                      For consumers
                    </span>
                    <span
                      className={audienceTab === "lawyers" ? "active" : ""}
                      onClick={() => {
                        setAudienceTab("lawyers");
                        scroller.scrollTo("who-for", {
                          duration: 600,
                          smooth: "easeInOutQuart",
                          offset: -80,
                        });
                      }}
                    >
                      For lawyers
                    </span>
                  </div>
                  <p className="hero-sub">
                    Say goodbye to expensive legal consultation, long waits{" "}
                    <br />
                    for appointments, and confusing legal texts.
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-3 hero-stores ">
                    {/* <img src={appStore} alt="Apple Store" />
                    <img src={playStore} alt="Google Play" /> */}
                    <img src={stores} alt="Stores" className="w-75 h-75" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="hero-media"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <img
                    src={leftLeaves}
                    alt=""
                    className="hero-leaf hero-leaf-left"
                  />
                  <div
                    className="text-center pt-3"
                    style={{ marginTop: "30px" }}
                  >
                    <div className="hero-producthunt">Product hunt</div>
                    <div className="hero-producthunt-sub">
                      Product of the day
                    </div>
                    <div className="hero-producthunt-rank">1st</div>
                  </div>
                  <div className="hero-media-img">
                    <img src={portalApp} alt="Portal app" />
                  </div>
                  <img
                    src={rightLeaves}
                    alt=""
                    className="hero-leaf hero-leaf-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container brands-slider">
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
              <img src={benzinga} alt="Benzinga" className="press-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={khaleej} alt="Khaleej Times" className="press-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={chronical}
                alt="The Chronicle Journal"
                className="press-logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={benzinga} alt="Benzinga" className="press-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={khaleej} alt="Khaleej Times" className="press-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={chronical}
                alt="The Chronicle Journal"
                className="press-logo"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Features of AI Lawyer */}
      <div className="container features-legal" id="howitwork">
        <div className="text-center mb-3" data-aos="fade-up">
          <h2>Features of legal AI</h2>
          <p className="text-muted mt-4 mb-5">
            Explore features that boost your productivity. From document
            automation <br /> to advanced research, we've got the hard work
            covered.
          </p>
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-tile feature-question text-center">
              <h4 className="mt-1 fw-bold">Create a Question</h4>
              <img
                src={question}
                alt="Create a Question"
                className="feature-icon my-3"
              />
              <p className="feature-desc">
                Explore features that boost your productivity. From document
                automation advanced.
              </p>
            </div>

            <div
              className="mt-4 case-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="feature-tile feature-case text-center">
                <h4 className="mt-1 fw-bold text-white">Create a Case</h4>
                <img
                  src={caseImg}
                  alt="Create a Case"
                  className="feature-icon case-img my-3"
                />
                <p className="feature-desc">
                  Explore features that boost your productivity. From document
                  automation advanced.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-9" data-aos="fade-up" data-aos-delay="200">
            <div className="chat-card">
              <div className="mini-chat-card m-3 bg-white p-4">
                <div className="chat-header text-black">Hello Williams 👋</div>
                <p className="chat-intro">
                  Sed ut perspiciatis unde omnis iste natus error sit <br />{" "}
                  voluptatem accusantium doloremque laudantium, <br /> totam rem
                  aperiam, eaque ipsa quae ab ill.
                </p>
                <button className="btn chat-add">+ Add</button>
              </div>
              <div className="chat-bubbles">
                <div
                  className="bubble dark align-self-end"
                  style={{ height: "68px", width: "fit-content" }}
                >
                  accusantium doloremque laudantium, totam.
                  <span className="time ms-2">02:14 PM</span>
                </div>
                <div
                  className="bubble light d-flex align-items-center justify-content-center"
                  style={{
                    height: "68px",
                    width: "fit-content",
                    borderRadius: "30px",
                  }}
                >
                  Ok Thanks Bro!
                </div>
              </div>
              <div className="chat-footer mt-3">
                <h6
                  className="fw-semibold my-4"
                  style={{ fontSize: "22px", fontWeight: "500" }}
                >
                  Ask AI Lawyer
                </h6>
                <p className="text-white" style={{ fontSize: "18px" }}>
                  Legal research never been easier. Have a conversation with
                  your virtual assistant, gain <br />
                  insights and simple answers to your complex questions in
                  real-time.
                </p>
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder="Write a Messages..."
                  />
                  <div className="input-actions">
                    <i className="bi bi-paperclip" />
                    <button className="send-btn">
                      <i className="bi bi-send-fill" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="multi-panel p-3">
              <h6 className="fw-semibold mb-3">Multi-platform</h6>
              <p>
                Access our platform with a simple tap on the web, iOS, or
                Android.
              </p>
              <div className="row g-3 mt-1 px-3 pb-4">
                <div className="col-6">
                  <div className="service-card selected">
                    <div className="title mb-3 mb-3">
                      Professional Business <br />
                      Consultation Service
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="price">USD 499</div>
                        <div className="badge">Active Package</div>
                      </div>
                      <div>
                        <button
                          className="btn rounded-pill bg-white fw-bold"
                          style={{
                            color: "#424242",
                            fontSize: "12.5px",
                            width: "112px",
                            height: "39px",
                          }}
                        >
                          Subscribed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="service-card">
                    <div className="title mb-3">
                      Professional Business <br /> Consultation Service
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="price">USD 499</div>
                        <div className="badge">Active Package</div>
                      </div>
                      <div>
                        <button className="btn rounded-pill fw-bold multi-platform-subscribe-btn">
                          Subscribed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="service-card">
                    <div className="title mb-3">
                      Professional Business <br /> Consultation Service
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="price">USD 499</div>
                        <div className="badge">Active Package</div>
                      </div>
                      <div>
                        <button className="btn rounded-pill fw-bold multi-platform-subscribe-btn">
                          Subscribed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="service-card">
                    <div className="title mb-3">
                      Professional Business <br /> Consultation Service
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="price">USD 499</div>
                        <div className="badge">Active Package</div>
                      </div>
                      <div>
                        <button className="btn rounded-pill fw-bold multi-platform-subscribe-btn">
                          Subscribed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="multi-panel p-3">
              <h6 className="fw-semibold mb-3">Multi-platform</h6>
              <p className="text-muted">
                Access our platform with a simple tap on the web, iOS, or
                Android.
              </p>
              <div className="mobile-stack mt-2">
                <img
                  src={postSS1}
                  alt="Post Question 1"
                  className="mobile-img mobile-1"
                />
                <img
                  src={postSS2}
                  alt="Post Question 2"
                  className="mobile-img mobile-2"
                />
                <img
                  src={postSS3}
                  alt="Post Question 3"
                  className="mobile-img mobile-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  WHo is AI Lawyer for?  */}
      <div className="container who-for my-5" id="who-for">
        <div className="who-wrap" data-aos="fade-up">
          <h2 className="text-white text-center pt-5 mb-2">Who is AI Lawyer for?</h2>
          <p className="who-for-p text-center mb-4 mt-4">
            Explore features that boost your productivity. From document
            automation <br /> to advanced research, we've got the hard work covered.
          </p>
          <div className="row g-3 g-md-4 mt-2">
            <div className="col-md-3 pe-0">
              <div className="who-card">
                <h4>AI for Legal Consumers</h4>
                <p>
                  From deciphering complex <br /> terms to understanding <br /> rights, we've
                  got you <br /> covered.
                </p>
                <div className="who-icon">
                  <img src={ doc } alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="who-card h-100">
                <h4>AI for <br /> Lawyers</h4>
                <p>
                  From deciphering complex <br /> terms to understanding <br /> rights, we've
                  got you <br /> covered.
                </p>
                <div className="who-icon">
                  <img src={ lawyer } alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3 ps-0">
              <div className="who-card h-100">
                <h4>AI for <br /> Law Firms</h4>
                <p>
                  From deciphering complex <br /> terms to understanding <br /> rights, we've
                  got you <br /> covered.
                </p>
                <div className="who-icon">
                  <img src={ law } alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3 ps-0">
              <div className="who-card h-100">
                <h4>AI for Law <br /> Students</h4>
                <p>
                  From deciphering complex <br /> terms to understanding <br /> rights, we've
                  got you <br /> covered.
                </p>
                <div className="who-icon">
                  <img src={ books } alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ's */}
      <div className="container my-5" id="faq">
        <div className="faq-wrap p-3 p-md-4">
          <div className="text-center mb-3">
            <h2>Have a question?</h2>
            <p className="text-muted mb-5">
              Browse through our frequently asked topics.
            </p>
          </div>
          <div className="d-flex justify-content-center mb-4">
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
                <div className="accordion-item faq-card" key={`${faqTab}-${idx}`}>
                  <h2 className="accordion-header" id={`faq${idx}h-${faqTab}`}>
                    <button
                      className={`accordion-button ${
                        idx === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${idx}-${faqTab}`}
                      aria-expanded={idx === 0 ? "true" : "false"}
                      aria-controls={`faq${idx}-${faqTab}`}
                    >
                      {item.q}
                    </button>
                  </h2>
                  <div
                    id={`faq${idx}-${faqTab}`}
                    className={`accordion-collapse collapse ${
                      idx === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`faq${idx}h-${faqTab}`}
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
        <div className="mobile-app-banner p-3 p-md-4">
          <div className="row align-items-center g-4 h-100">
            <div className="col-md-6">
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
              <div className="text-white">
                <h2 className="mb-2 download-app-title text-center">Start Your Legal Journey Now!</h2>
                <p className="download-app-desc text-center">
                  Stay connected with your guide on iOS & <br /> Android. Handle
                  documents, track cases, <br /> and receive guidance on the go.
                </p>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
                  <img src={appStore} alt="App Store" className="store-badge" />
                  <img
                    src={playStore}
                    alt="Google Play"
                    className="store-badge"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
