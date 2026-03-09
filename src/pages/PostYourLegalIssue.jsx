import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";
import postQuestionBgImg from "../assets/images/postQuestionBgImg.png";

const PostYourLegalIssue = () => {
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [summary, setSummary] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [fileName, setFileName] = useState("");

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

  const handleFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) setFileName(f.name);
  };

  return (
    <div className="postq-page font-inter">
      <Seo
        title="Post Your Legal Issue — Legal Platform"
        description="Fill the form to post your legal issue and connect with verified lawyers."
        canonicalPath="/post-your-legal-issue"
        image="/favicon.png"
      />
      <Header />
      <div className="postq-page-hero">
        <div className="container h-100 d-flex align-items-center">
          <div className="postq-hero-copy">
            <h1 className="postq-hero-title">Post Your Legal Issue Today</h1>
            <p className="postq-hero-sub">
              Fill form and put your question with professional lawyers.
            </p>
          </div>
        </div>
        <img src={postQuestionBgImg} alt="" className="postq-hero-img" />
      </div>
      <Breadcrumbs />
      <main className="container my-4">
        <div className="postq-form-card" data-aos="fade-up" data-aos-delay="100">
          <div className="postq-form-title">Post Question</div>
          <div className="mb-3">
            <div className="postq-textarea-wrapper">
              <textarea
                className="form-control postq-textarea"
                placeholder="Explain Your Question"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="postq-select-wrap">
              <select
                className="form-select postq-select"
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
              >
                <option value="">Jurisdiction</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="uae">United Arab Emirates</option>
                <option value="india">India</option>
                <option value="canada">Canada</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="postq-attach d-flex align-items-center gap-2">
              <i className="bi bi-paperclip" />
              <span>{fileName || "Attach Document"}</span>
              <input type="file" className="d-none" onChange={handleFileChange} />
            </label>
          </div>
          <div className="postq-bottom-section mt-4">
            <div className="postq-how mb-3">
              <div className="postq-how-title">How it works</div>
              <ul className="postq-how-list">
                <li>Ask your question and see the answer in Questions & Answers.</li>
                <li>You will be notified when a lawyer answers.</li>
              </ul>
            </div>
            <div className="postq-fee-card d-flex align-items-center justify-content-between">
              <div>
                <div className="postq-fee-title">Post Question Fee</div>
                <div className="postq-fee-sub">1 Question post only</div>
              </div>
              <div className="text-end postq-fee-amount-wrap">
                <div className="postq-fee-currency">USD</div>
                <div className="postq-fee-amount">1.00</div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button type="button" className="btn btn-dark rounded-pill postq-submit">
              Post Your Legal Issues
            </button>
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

export default PostYourLegalIssue;
