import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

const Services = () => {
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="info-page-wrapper font-inter">
      <Seo
        title="Services — Legal Platform"
        description="Explore core services available on Legal Platform including contract review, drafting, legal consultation, and will preparation."
        canonicalPath="/services"
        image="/favicon.png"
      />
      <Header />
      <Breadcrumbs />
      <main className="info-page-section py-5">
        <div className="info-page-main-card" data-aos="fade-up" data-aos-delay="100">
          <h1 className="home-hero-title text-center"><AnimatedText text="Services" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Choose a service to get started. Work with verified lawyers through secure communication, transparent proposals, and structured payments." />
          </div>
        </div>

        <div className="info-page-list">
          <div className="info-page-block" data-aos="fade-up" data-aos-delay="150">
            <h3 className="info-page-block-title"><AnimatedText text="Contract Review" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Identify risks and optimize terms before signing." />
            </div>
            <div className="mt-3">
              <Link to="/contract-review" className="header-segment-btn header-segment-law">View</Link>
            </div>
          </div>
          <div className="info-page-block" data-aos="fade-up" data-aos-delay="200">
            <h3 className="info-page-block-title"><AnimatedText text="Contract Drafting" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Custom agreements aligned to your objectives and jurisdiction." />
            </div>
            <div className="mt-3">
              <Link to="/contract-drafting" className="header-segment-btn header-segment-law">View</Link>
            </div>
          </div>
          <div className="info-page-block" data-aos="fade-up" data-aos-delay="250">
            <h3 className="info-page-block-title"><AnimatedText text="General Legal Consultation" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="One-time advisory to understand options and next steps." />
            </div>
            <div className="mt-3">
              <Link to="/general-legal-consultation" className="header-segment-btn header-segment-law">View</Link>
            </div>
          </div>
          <div className="info-page-block" data-aos="fade-up" data-aos-delay="300">
            <h3 className="info-page-block-title"><AnimatedText text="Will Preparation" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Set out beneficiaries and guardianship with compliant documentation." />
            </div>
            <div className="mt-3">
              <Link to="/will-preparation" className="header-segment-btn header-segment-law">View</Link>
            </div>
          </div>
        </div>
      </main>
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
    </div>
  );
};

export default Services;
