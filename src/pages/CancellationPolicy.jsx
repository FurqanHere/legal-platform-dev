import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const CancellationPolicy = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="privacy-bg from-top">
        <Header />

        <div className="heading-policy flex-column">
          <h1>Cancellation Policy</h1>
        </div>
      </div>
      <Breadcrumbs />

      <div className="container data-info">
        <div className="text-center">
          <p>
            Website: <a href="https://digitsapp.ae">https://digitsapp.ae</a>
          </p>
        </div>
        <div className="privacy-heading">
          <p>
            This Cancellation Policy outlines the rules and procedures for cancelling services or subscriptions through <strong>Golden Digits Portal</strong> and the <strong>DigitsApp</strong>.
          </p>

          <h3 className="mt-5">1. General Cancellation Rules</h3>
          <p>
            Users may cancel their subscription or specific service requests through the App settings or by contacting our support team.
          </p>

          <h3 className="mt-5">2. Refund Eligibility</h3>
          <p>
            Refunds for cancelled services are subject to the specific terms of the service level agreement. Generally, cancellations made within 24 hours of the request may be eligible for a full refund.
          </p>

          <h3 className="mt-5">3. Subscription Cancellation</h3>
          <p>
            Subscriptions can be cancelled at any time. However, the cancellation will take effect at the end of the current billing cycle. No partial refunds are provided for remaining days in a billing period.
          </p>

          <h3 className="mt-5">4. Procedure for Cancellation</h3>
          <p>
            To cancel a service, please follow these steps:
          </p>
          <ul>
            <li>Go to "My Account" in the DigitsApp.</li>
            <li>Select "Subscriptions" or "Active Services".</li>
            <li>Click on "Cancel" and follow the prompts.</li>
          </ul>

          <h3 className="mt-5">5. Contact Support</h3>
          <p>
            If you encounter any issues with the cancellation process, please contact us at <strong>info@digitsapp.ae</strong>.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CancellationPolicy;
