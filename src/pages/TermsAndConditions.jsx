import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";

const TermsAndConditions = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="from-top">
        <Seo
          title="Terms & Conditions — Legal Platform"
          description="Read the legal terms governing use of the Legal Platform website and mobile app, including payments, policies, and responsibilities."
          canonicalPath="/terms"
          image="/favicon.png"
        />
        <Header />
        <div className="heading-policy flex-column">
          <h1>Terms & Conditions</h1>
        </div>
      </div>
      <Breadcrumbs />

      <div className="container">
        <div className="privacy-heading">
          <h3><AnimatedText text="Introduction & Acceptance" /></h3>
          <p>
            <AnimatedText text="These Terms and Conditions govern the use of Legal Platform and the Legal Platform mobile application. By accessing or using the Site or App, you agree to comply with these Terms and our Privacy Policy." />
          </p>
          <p>
            <AnimatedText text="By accessing the App, you agree to follow all applicable laws and these Terms. Users must create an account to access certain features. We may, at our discretion, suspend or terminate accounts for violation of these Terms." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Eligibility & Accounts" /></h3>
          <ul>
            <li><AnimatedText text="Individuals must be at least 21 years of age under UAE law or of legal age in their jurisdiction." /></li>
            <li><AnimatedText text="If representing a company or entity, you confirm you have authority to act on its behalf." /></li>
            <li><AnimatedText text="You are responsible for safeguarding your ID and login credentials. In case of unauthorized use, we assume no liability." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Content & Third‑Party Links" /></h3>
          <ul>
            <li><AnimatedText text="Specifications and content are for guidance and may be updated from time to time." /></li>
            <li><AnimatedText text="Users warrant content posted is original and they own necessary rights and permissions." /></li>
            <li><AnimatedText text="The Site may include links to third‑party websites. Your use of those sites is subject to their terms and policies." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Intellectual Property & Conduct" /></h3>
          <ul>
            <li><AnimatedText text="Users must respect copyrights and other intellectual property rights." /></li>
            <li><AnimatedText text="Impersonation, misleading, deceptive, or harmful behavior is prohibited." /></li>
            <li><AnimatedText text="We enforce a zero‑tolerance policy against abusive or harmful behavior and may remove content, issue warnings, suspend rights, or terminate accounts." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Payments, Refunds & Cancellations" /></h3>
          <ul>
            <li><AnimatedText text="Payments are processed via approved methods; invoices and receipts are provided through the Platform." /></li>
            <li><AnimatedText text="VAT is applied where applicable and may be added to totals." /></li>
            <li><AnimatedText text="Refunds for non‑subscription services are processed within a minimum of 7 days after request approval." /></li>
            <li><AnimatedText text="Platform fees and certain service fees are non‑refundable unless explicitly stated in platform policies." /></li>
            <li><AnimatedText text="Quick questions may be non‑refundable unless specific platform policies apply." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Limitation of Liability & Indemnity" /></h3>
          <p>
            <AnimatedText text="To the extent permitted by law, Legal Platform is not liable for indirect, incidental, or consequential damages arising from the use of the Site or App. Users agree to indemnify and hold Legal Platform harmless against claims resulting from their use, breach of these Terms, or violation of laws." />
          </p>

          <h3 className="mt-5"><AnimatedText text="User Payment Terms" /></h3>
          <ul>
            <li><AnimatedText text="Users must pay the full amount for services rendered via platform‑approved methods." /></li>
            <li><AnimatedText text="VAT and applicable taxes may be charged in addition to platform fees." /></li>
            <li><AnimatedText text="Compliance with applicable laws and regulations in the user’s jurisdiction is required." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Service Provider Payment Terms" /></h3>
          <ul>
            <li><AnimatedText text="Platform applies a 10% platform fee on transactions as a usage charge." /></li>
            <li><AnimatedText text="Invoices must accurately detail services, timelines, and applicable VAT." /></li>
            <li><AnimatedText text="Payments are disbursed according to platform payout schedules, not less than 7 days, subject to processing delays." /></li>
            <li><AnimatedText text="Service Providers must comply with applicable financial laws and regulations." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Platform Fees & Structure" /></h3>
          <ul>
            <li><AnimatedText text="Client Service Fee: a service fee equal to ten percent (10%) of the user’s payable total applies." /></li>
            <li><AnimatedText text="Lawyer Commission Fee: a commission equal to ten percent (10%) of the lawyer’s total invoiced amount applies." /></li>
            <li><AnimatedText text="Net Payout: fees, deductions, and applicable VAT are automatically calculated before payout." /></li>
            <li><AnimatedText text="Acknowledgement: using the Platform constitutes acceptance of these fees and deductions." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Payment Delays & Service Provider Independence" /></h3>
          <ul>
            <li><AnimatedText text="Platform is not liable for delays due to third‑party processors or gateway issues." /></li>
            <li><AnimatedText text="Service Providers operate independently; services and agreements are between Service Providers and clients." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Off‑Platform Payments Prohibited" /></h3>
          <ul>
            <li><AnimatedText text="All payments must be processed through the Platform’s payment system." /></li>
            <li><AnimatedText text="Redirecting payments or sharing off‑platform payment details is prohibited and may result in suspension or termination." /></li>
            <li><AnimatedText text="The Platform may take action to recover unpaid fees or losses from off‑platform arrangements." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Service Provider Accounts & Responsibilities" /></h3>
          <ul>
            <li><AnimatedText text="To become a Service Provider (Lawyer or Law Firm), create an account and complete verification." /></li>
            <li><AnimatedText text="Service Providers are responsible for legality, quality, and accuracy of services." /></li>
            <li><AnimatedText text="Set pricing, terms, and conditions; ensure licenses and qualifications for services." /></li>
            <li><AnimatedText text="Payments are processed by third‑party providers; Platform is not a party to transactions between clients and Service Providers." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Client Responsibilities" /></h3>
          <ul>
            <li><AnimatedText text="Select suitable Service Providers and verify qualifications for your legal needs." /></li>
            <li><AnimatedText text="Provide accurate information and instructions related to services." /></li>
            <li><AnimatedText text="Review credentials and agree to scope, timelines, fees, and deliverables." /></li>
            <li><AnimatedText text="Comply with terms, professional requirements, and applicable laws." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Timely Payment & Lawful Use" /></h3>
          <ul>
            <li><AnimatedText text="Make full and timely payments through the Platform in accordance with agreed terms." /></li>
            <li><AnimatedText text="Ensure services requested are lawful and not intended for any illegal or fraudulent purpose." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Confidentiality & Independent Judgment" /></h3>
          <ul>
            <li><AnimatedText text="Safeguard confidential information; Platform facilitates communication but is not a law firm and does not provide legal advice." /></li>
            <li><AnimatedText text="Acknowledge the Platform is a technology marketplace and does not endorse or guarantee any legal service provided by any Service Provider." /></li>
            <li><AnimatedText text="Confirm requested service is appropriate for your jurisdiction and that Service Providers are authorized where required." /></li>
          </ul>

          <h3 className="mt-5"><AnimatedText text="Termination & Suspension" /></h3>
          <p>
            <AnimatedText text="We may suspend or terminate accounts or access if Terms are violated or for legal, security, or other reasons. We may withdraw posting rights, remove content, issue warnings, disclose to law enforcement where required, and take further action as necessary." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Disclaimer" /></h3>
          <p>
            <AnimatedText text="The App and Site are provided on an “as is” and “as available” basis without warranties of any kind. We do not warrant uninterrupted, secure, error‑free service, or freedom from harmful components. You use the App/Site at your own risk." />
          </p>
          <p>
            <AnimatedText text="We disclaim liability for third‑party content and services, including User‑uploaded content or linked sites." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Privacy & Data Protection" /></h3>
          <p>
            <AnimatedText text="We process data and documents only as explicitly permitted by users and according to the Privacy Policy. Users must protect their accounts and promptly report suspicious activity." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Confidentiality" /></h3>
          <p>
            <AnimatedText text="Users and Service Providers must keep confidential information and case data secure and use it solely to perform obligations on the Platform. Information should not be shared unless authorized or legally required." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Waiver" /></h3>
          <p>
            <AnimatedText text="No failure to exercise any right or enforce any obligation shall constitute a waiver. Any waiver must be explicit and in writing." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Severability" /></h3>
          <p>
            <AnimatedText text="If any provision is found invalid or unenforceable, the remaining provisions continue in full force. The invalid provision shall be modified as needed to make it valid and enforceable." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Entire Agreement" /></h3>
          <p>
            <AnimatedText text="These Terms constitute the entire agreement between you and Legal Platform concerning use of the App/Site and supersede prior understandings and communications." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Future Amendments" /></h3>
          <p>
            <AnimatedText text="We may amend these Terms by posting updates on the Site/App without prior notice. Continued use after amendments constitutes acceptance of the updated Terms." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Right to Refuse Services" /></h3>
          <p>
            <AnimatedText text="We reserve the right to refuse any or all Services to any User without providing reasons and shall not be responsible for such refusal." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Governing Law & Disputes" /></h3>
          <p>
            <AnimatedText text="These Terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Disputes arising in connection with the Terms are subject to the exclusive jurisdiction of the Dubai Courts." />
          </p>

          <h3 className="mt-5"><AnimatedText text="Contact" /></h3>
          <p>
            <AnimatedText text="For questions about the app, site, or Terms, contact support@legalplatform.co." />
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
