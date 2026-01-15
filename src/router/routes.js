import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TermsCondition from '../pages/TermsAndConditions';
import Privacy from '../pages/PrivacyPolicy';
import CancellationPolicy from "../pages/CancellationPolicy";
import Support from "../pages/Support";
import BecomePartner from "../pages/BecomePartner";
import PostYourLegalIssue from "../pages/PostYourLegalIssue";
import ChatWithLawyers from "../pages/ChatWithLawyers";
import AboutLegalCompany from "../pages/AboutLegalCompany";

const AppRouter = () => {
    const basePath = process.env.REACT_APP_BASE_PATH;

    return (
      <Router basename={basePath}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/become-a-partner" element={<BecomePartner />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/post-your-legal-issue" element={<PostYourLegalIssue />} />
          <Route path="/chat-with-lawyers" element={<ChatWithLawyers />} />
          <Route path="/about-legal-company" element={<AboutLegalCompany />} />
        </Routes>
      </Router>
    );
};

export default AppRouter;
