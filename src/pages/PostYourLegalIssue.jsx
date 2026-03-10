import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import postQuestionBgImg from "../assets/images/postQuestionBgImg.png";

const PostYourLegalIssue = () => {
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [summary, setSummary] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [fileName, setFileName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

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
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="postq-form-card" data-aos="fade-up" data-aos-delay="100">
              <div className="postq-form-title">Post Your Legal Question</div>
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
              <div className="mt-4">
                <div className="postq-how-simple">
                  <div className="postq-how-title">How it works</div>
                  <ul className="postq-how-list">
                    <li><span className="postq-bullet" /> <span>Ask your question and see the answer in Questions & Answers.</span></li>
                    <li><span className="postq-bullet" /> <span>You will be notified when a lawyer answers.</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <div className="postq-form-title mb-3">Personal Information</div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control postq-input"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control postq-input"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-3">
                <div className="postq-otp-block">
                  <button type="button" className="postq-otp-btn w-100">
                    Send OTP
                  </button>
                  <input
                    type="text"
                    className="postq-otp-input"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-3 d-flex align-items-center gap-2 postq-consent">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="agreeTerms" />
                </div>
                <label htmlFor="agreeTerms" className="form-check-label postq-terms">
                  By clicking the button, you agree to Legal Platform{" "}
                  <a href="/terms" className="text-decoration-none">Terms of Services</a> &{" "}
                  <a href="/terms" className="text-decoration-none">Payment Terms</a>
                </label>
              </div>
              <div className="mt-3">
                <button type="button" className="postq-pay-btn">
                  <span className="postq-pay-label">Proceed to Payment</span>
                  <span className="postq-pay-price">3.99 US</span>
                </button>
              </div>
            </div>
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

export default PostYourLegalIssue;
