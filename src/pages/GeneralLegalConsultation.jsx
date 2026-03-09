import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";

const GeneralLegalConsultation = () => {
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
        title="General Legal Consultation — Legal Platform"
        description="Book one-time advisory sessions with verified lawyers to get clarity and next steps."
        canonicalPath="/general-legal-consultation"
        image="/favicon.png"
      />
      <Header />
      <Breadcrumbs />
      <main className="info-page-section py-5">
        <div className="info-page-main-card" data-aos="fade-up" data-aos-delay="100">
          <h1 className="home-hero-title text-center"><AnimatedText text="General Legal Consultation" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Discuss your matter in a structured call or chat, receive guidance, and plan actions confidently." />
          </div>
        </div>

        <div className="info-page-list">
          <div className="info-page-block" data-aos="fade-up" data-aos-delay="150">
            <h3 className="info-page-block-title"><AnimatedText text="Areas Covered" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Corporate, employment, real estate, family, IP, and more — matched by jurisdiction." />
            </div>
          </div>
          <div className="info-page-block" data-aos="fade-up" data-aos-delay="200">
            <h3 className="info-page-block-title"><AnimatedText text="Booking" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Choose a lawyer, agree on scope and fee, and meet securely through the platform." />
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

export default GeneralLegalConsultation;
