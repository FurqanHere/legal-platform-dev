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

  return (
    <>
      <div className="privacy-bg from-top">
        <Header />

        <div className="heading-policy flex-column">
          <h1>Cancellation Policy</h1>
        </div>
      </div>

      <div className="container">
        <div className="text-center">
          <p>Effective Date: [June 17, 2025]</p>
          <p>Website: https://digitsapp.ae</p>
          <p>
            At
            <b className="ms-1">
              FIRST Digits AUTO USING ELECTRONIC MEDIA RENTING VEHICLES L.L.C
            </b>
            , we aim to make your rental experience smooth and transparent.
            Since Digits operates as an aggregator connecting users with
            third-party rental companies, the following cancellation policy
            applies:
          </p>
          <p>
            By downloading, accessing, or using the Digits App, you agree to be
            bound by these Terms. If you do not agree, please do not use the
            App.
          </p>
        </div>
        <div className="privacy-heading">
          <h3>1. General Cancellation Terms</h3>
          <ul>
            <li>
              Users may cancel their booking directly through the Digits app.
            </li>
            <li>
              Each <b> rental partner </b> may have its
              <b> own cancellation rules</b>, including applicable fees,
              refundable deposits, and notice periods.
            </li>
            <li>
              Cancellation <b>before the scheduled pickup</b> time may be
              eligible for a full or partial refund depending on the partner's
              policy.
            </li>
          </ul>

          <h3 className="mt-4">2. Same-Day or Last-Minute Cancellations</h3>
          <ul>
            <li>
              Cancellations made <b>within 24 hours</b> of the scheduled rental
              time may <b>not be eligible for a refund.</b>
            </li>
            <li>
              Any charges or fees retained are determined by the rental
              partner’s specific terms.
            </li>
          </ul>

          <h3 className="mt-4">3. No-Show Policy</h3>

          <ul>
            <li>
              Failure to pick up the vehicle at the scheduled time without prior
              cancellation will be considered a <b> no-show.</b>
            </li>
            <li>
              In case of a no-show, <b> no refund </b> will be issued, and the
              booking will be marked as forfeited.
            </li>
          </ul>

          <h3 className="mt-4">4. Refund Process</h3>
          <ul>
            <li>
              Refunds, if applicable, will be initiated within{" "}
              <b>7–10 business days</b> after cancellation confirmation.
            </li>
            <li>
              The refund will be processed to the <b>original payment method</b>{" "}
              used at the time of booking.
            </li>
          </ul>

          <h3 className="mt-4">5. How to Cancel</h3>
          <label>You can cancel a booking by: </label>
          <ol>
            <li>Logging into your Digits account</li>
            <li>
              Going to <b> My Bookings </b>
            </li>
            <li>Selecting the booking you wish to cancel</li>
            <li>Following the on-screen cancellation steps</li>
          </ol>

          <span>
            For assistance, you may also email us at <b>business@digitsapp.ae.</b>
          </span>

          <h3 className="mt-4">6. Disputes or Special Cases</h3>
          <span>
            For disputes, emergencies, or cancellation due to uncontrollable
            events (e.g., medical, travel restrictions), you may contact our
            support team. We will review each case with the rental partner, but
            we cannot guarantee exceptions.
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
