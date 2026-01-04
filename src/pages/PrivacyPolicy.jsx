import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

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

      <div className="container data-info">
        <div className="text-center">
          <p>
            Website: <a href="https://digitsapp.ae">https://digitsapp.ae</a>
          </p>
        </div>
        <div className="privacy-heading">
          <p>
            This Privacy Policy describes how <strong>Golden Digits Portal</strong>, registered in the United Arab Emirates (UAE), collects, uses, and safeguards the personal information of users who use the <strong>DigitsApp</strong> mobile application and website (<a href="https://digitsapp.ae">https://digitsapp.ae</a>). We are committed to protecting the privacy and confidentiality of all information entrusted to us. By accessing or using our application, you consent to the collection, use, and disclosure of your personal information as described below.
          </p>

          <h3 className="mt-5">1. Information We Collect</h3>
          
          <h4 className="mt-4">1.1 Personal Information</h4>
          <p>
            When you register or interact with DigitsApp, we may collect the following personal details:
          </p>
          <ul>
            <li>Full name</li>
            <li>Email address and phone number</li>
            <li>Login credentials (email)</li>
          </ul>

          <h3 className="mt-5">2. Use of Information</h3>
          <p>We use the collected information to:</p>
          <ul>
            <li>Create and manage your DigitsApp account</li>
            <li>Improve and personalize user experience</li>
            <li>Respond to inquiries</li>
            <li>Send notifications</li>
            <li>Ensure compliance with UAE data and content regulations</li>
            <li>Detect and prevent fraud or misuse</li>
          </ul>

          <h3 className="mt-5">3. Data Security</h3>
          <p>
            We apply strong administrative, technical, and physical safeguards to protect your personal information from unauthorized access or disclosure. While we strive for the highest security standards, no method of online transmission or storage is completely secure, and we cannot guarantee absolute protection.
          </p>

          <h3 className="mt-5">4. Data Retention</h3>
          <p>
            We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When information is no longer needed, it is securely deleted or anonymized.
          </p>

          <h3 className="mt-5">5. Your Rights</h3>
          <p>
            In accordance with <strong>UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL)</strong>, you have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent for data processing</li>
            <li>Object to certain processing activities</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, contact us using the details provided below.
          </p>

          <h3 className="mt-5">6. Changes to This Privacy Policy</h3>
          <p>
            We may modify this Privacy Policy periodically. Updates will be posted in the app and on <a href="https://digitsapp.ae">https://digitsapp.ae</a> with a revised "Effective Date." We encourage users to review the policy regularly to stay informed about how we protect personal data.
          </p>

          <h3 className="mt-5">7. Contact Us</h3>
          <p>
            If you have any questions, requests, or concerns regarding this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Golden Digits Portal</strong>
          </p>
          <p>Al Ain, United Arab Emirates</p>
          <p>
            📧 <strong>info@digitsapp.ae</strong>
          </p>
          <p>
            🌐 <a href="https://digitsapp.ae">https://digitsapp.ae</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;