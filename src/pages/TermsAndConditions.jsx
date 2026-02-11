import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="from-top">
        <Header />

        <div className="heading-policy flex-column">
          <h1>Terms & Conditions</h1>
        </div>
      </div>
      <Breadcrumbs />

      <div className="container">
        <div className="text-center">
          <p>
            Website: <a href="https://digitsapp.ae">https://digitsapp.ae</a>
          </p>
        </div>
        <div className="privacy-heading">
          <h3>1. Introduction</h3>
          <p>
            Welcome to DigitsApp (the "App") provided by <strong>Golden Digits Portal</strong>, registered in the United Arab Emirates, with its registered address at [Address]. By downloading, installing, accessing or using the App (and/or website at <a href="https://digitsapp.ae">https://digitsapp.ae</a>) (the "Service"), you ("you", "User", "Member") agree to be bound by these terms and conditions ("Terms"). If you do not agree, do not use the Service.
          </p>

          <h3 className="mt-5">2. Definitions</h3>
          <ul>
            <li><strong>"App" or "Service"</strong>: the mobile application and/or website platform provided by DigitsApp including any updates, features, functionalities.</li>
            <li><strong>"User Content"</strong>: any content which you upload, post or otherwise transmit through the Service.</li>
            <li><strong>"We", "us", "our"</strong>: Golden Digits Portal and its affiliates.</li>
            <li><strong>"Account"</strong>: the user account you create to use the Service.</li>
          </ul>

          <h3 className="mt-5">3. Eligibility</h3>
          <p>
            You must be at least 18 years old (or such minimum age as per applicable local law) in order to use the Service. If you are using the Service on behalf of a company or entity, you represent that you are authorised to do so.
          </p>

          <h3 className="mt-5">4. Account Registration & Security</h3>
          <ul>
            <li>You must register an Account to access certain features. You agree to provide accurate, current and complete information and to update it as required.</li>
            <li>You are responsible for safeguarding your login credentials and for all activities that occur under your Account. You must notify us immediately in case of any unauthorised use.</li>
            <li>We reserve the right to suspend or terminate Accounts at our discretion (e.g., for breaches of these Terms).</li>
          </ul>

          <h3 className="mt-5">5. License to Use the Service</h3>
          <p>
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to download, install and use the App on a device that you own or control. You agree not to copy, modify, distribute, sell, reverse engineer or otherwise misuse the Service.
          </p>

          <h3 className="mt-5">6. User Conduct & Prohibited Uses</h3>
          <p>You agree not to:</p>
          <ul>
            <li>use the Service for any illegal purpose or in violation of UAE law or other applicable law;</li>
            <li>upload, post or transmit any User Content that is defamatory, obscene, infringing, or otherwise objectionable;</li>
            <li>interfere with or disrupt the Service or servers or networks connected to the Service;</li>
            <li>attempt to gain unauthorised access to other accounts, computer systems or networks;</li>
            <li>use the Service in any manner that could disable, overburden, or impair the Service.</li>
          </ul>

          <h3 className="mt-5">7. User Content</h3>
          <ul>
            <li>You retain ownership of your User Content. By uploading or posting User Content, you grant us a worldwide, non-exclusive, royalty-free, sublicensable licence to host, store, use, reproduce, modify, create derivative works, communicate, publish, perform or display such User Content in order to provide the Service.</li>
            <li>We may remove or disable access to any User Content at our discretion, including if it violates these Terms.</li>
          </ul>

          <h3 className="mt-5">8. Intellectual Property Rights</h3>
          <p>
            All rights, title and interest in and to the Service (excluding your User Content) are and shall remain with us and/or our licensors. The Service is protected by copyright, trademark, patent or other proprietary rights. You agree not to copy, reproduce, distribute, publicly display, translate or create derivative works of the Service.
          </p>

          <h3 className="mt-5">9. Disclaimers & Warranties</h3>
          <ul>
            <li>The Service is provided "as is" and "as available", without warranties of any kind, whether express or implied.</li>
            <li>We do not warrant that the Service will be uninterrupted, secure, error-free or free of harmful components.</li>
            <li>You acknowledge that you use the Service at your own risk.</li>
          </ul>

          <h3 className="mt-5">12. Indemnification</h3>
          <p>
            You agree to indemnify, defend and hold us harmless from and against all claims, damages, liabilities, costs and expenses (including reasonable legal fees) arising out of or related to your use of the Service, your User Content, your breach of these Terms, or your violation of applicable laws.
          </p>

          <h3 className="mt-5">13. Governing Law & Dispute Resolution</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Dubai, without regard to conflict of law provisions. Any dispute arising out of or relating to these Terms or the Service shall be submitted exclusively to the courts of Dubai.
          </p>

          <h3 className="mt-5">14. Changes to Terms</h3>
          <p>
            We may modify these Terms at any time. We will notify you by posting the revised Terms on the App/website and/or by email. Your continued use of the Service after such changes constitutes your acceptance of the new Terms. It's recommended you review the Terms periodically.
          </p>

          <h3 className="mt-5">15. Termination</h3>
          <p>
            We may suspend or terminate your access to the Service or delete your Account at our sole discretion, without notice, if you breach these Terms or for any reason. Upon termination, your right to use the Service ceases immediately. The provisions which by their nature should survive termination shall survive.
          </p>

          <h3 className="mt-5">16. Miscellaneous</h3>
          <ul>
            <li>If any provision of these Terms is held invalid or unenforceable, the remaining provisions will remain in full force and effect.</li>
            <li>No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.</li>
            <li>These Terms constitute the entire agreement between you and us regarding your use of the Service and supersede all prior or contemporaneous understandings or agreements regarding same.</li>
          </ul>

          <h3 className="mt-5">17. Contact Information</h3>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            <strong>Golden Digits Portal</strong>
          </p>
          <p>Al Ain, United Arab Emirates</p>
          <p>
            Email: <strong>info@digitsapp.ae</strong>
          </p>
          <p>
            Website: <a href="https://digitsapp.ae">https://digitsapp.ae</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
