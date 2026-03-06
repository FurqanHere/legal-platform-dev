import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const siteOrigin =
    typeof window !== "undefined" && window.location
      ? window.location.origin
      : "https://legalplatform.example";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   const currentLang = i18n.language;
  //   const direction = currentLang === "ar" ? "rtl" : "ltr";
  //   document.documentElement.setAttribute("dir", direction);
  //   document.documentElement.setAttribute("lang", currentLang);
  // }, [i18n.language]);

  return (
    <>
      <div className="privacy-bg from-top">
        <Header />

        <div className="heading-policy flex-column">
          <h1>Privacy Policy</h1>
        </div>
      </div>
      <Breadcrumbs />

      <div className="container data-info">
        <div className="text-center">
          <p>
            Website:{" "}
            <a href={siteOrigin} target="_blank" rel="noreferrer">
              {siteOrigin}
            </a>
          </p>
        </div>
        <div className="privacy-heading">
          <p>
            This Privacy Policy explains how <strong>LegalPlatform</strong>{" "}
            collects, uses, and protects personal information when individuals,
            businesses, and lawyers use our website and services to post legal
            issues, chat, exchange documents, and manage invoices and payments.
            By using LegalPlatform, you agree to the practices described here.
          </p>

          <h3 className="mt-5">1) Information We Collect</h3>
          <p>
            We collect information to provide and improve our services:
          </p>
          <ul>
            <li>Account details such as name, email, and phone number</li>
            <li>
              Profile and business information for lawyers and organizations
            </li>
            <li>
              Content you provide, including posted legal issues, chat messages,
              and uploaded documents or images
            </li>
            <li>
              Payment-related information processed by our payment providers; we
              do not store full card numbers on our servers
            </li>
            <li>
              Usage and device data such as log data, browser type, and general
              location, collected via analytics and cookies
            </li>
          </ul>

          <h3 className="mt-5">2) How We Use Information</h3>
          <p>We use information to:</p>
          <ul>
            <li>Provide core features (post issues, chat, share documents)</li>
            <li>Connect users with lawyers and manage engagements</li>
            <li>Process payments and generate invoices</li>
            <li>Respond to support requests and send service messages</li>
            <li>Maintain security, prevent fraud, and ensure compliance</li>
            <li>Improve our platform through analytics and research</li>
          </ul>

          <h3 className="mt-5">3) Cookies and Analytics</h3>
          <p>
            We use cookies and similar technologies to enable essential
            functionality, remember preferences, and analyze usage. You can
            control cookies through your browser settings.
          </p>

          <h3 className="mt-5">4) Sharing of Information</h3>
          <ul>
            <li>
              With lawyers you choose to interact with or who respond to your
              posted issues
            </li>
            <li>
              With trusted service providers that support our operations (e.g.,
              hosting, analytics, payment processing, email delivery)
            </li>
            <li>When required by law or to protect rights and safety</li>
          </ul>

          <h3 className="mt-5">5) Data Security</h3>
          <p>
            We apply administrative, technical, and physical safeguards to
            protect personal information. No method of transmission or storage
            is completely secure, so we cannot guarantee absolute security.
          </p>

          <h3 className="mt-5">6) Data Retention</h3>
          <p>
            We retain data for as long as necessary to provide services and for
            legitimate business or legal purposes. When no longer needed, data
            is deleted or anonymized.
          </p>

          <h3 className="mt-5">7) Your Rights</h3>
          <p>
            Depending on your location, you may have rights to access, correct,
            delete, or restrict the processing of your personal information, and
            to withdraw consent where applicable.
          </p>
          <ul>
            <li>Access and obtain a copy of your personal data</li>
            <li>Rectify inaccurate or incomplete information</li>
            <li>Request deletion, subject to legal obligations</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="mt-3">
            To exercise your rights, please contact our support team.
          </p>

          <h3 className="mt-5">8) International Transfers</h3>
          <p>
            Your information may be processed in countries other than where you
            reside. Where required, we implement appropriate safeguards for such
            transfers.
          </p>

          <h3 className="mt-5">9) Children’s Privacy</h3>
          <p>
            LegalPlatform is not intended for individuals under the age of 18.
            We do not knowingly collect personal data from children.
          </p>

          <h3 className="mt-5">10) Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will post
            the updated version on this page with a revised “Effective Date”.
          </p>

          <h3 className="mt-5">11) Contact Us</h3>
          <p>
            For questions about this Privacy Policy or to submit a request,
            please contact us through our{" "}
            <Link to="/support">Support page</Link>.
          </p>
          <p>Effective Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
