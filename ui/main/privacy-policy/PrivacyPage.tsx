import React from "react";

function PrivacyPage() {
  return (
    <div
      className="container md:ml-10 px-4 bg-cover border-[#3b3b3b] py-10 md:0 md:p-10 rounded-2xl bg-slate-200 md:w-5/6"
      style={{
        borderWidth: 1,
        backgroundImage: 'url("images/statics/delegate.jpg")',
      }}
    >
      {/* <h1 className="text-xl font-bold text-gray-800">Privacy Policy</h1> */}
      <h2 className="text-lg font-semibold mt-4 mb-2">
        Welcome to Capstone Business Intelligence!
      </h2>
      <p>
        Capstone Business Intelligence is a global leader in business events and
        consulting, dedicated to providing tailored services for corporations,
        governments, associations, and high-net-worth individuals. With decades
        of combined expertise, we specialize in B2B events, intelligent demand
        generation, bespoke conferences, and consulting services that connect
        businesses with opportunities.
      </p>
      <p className="mt-2">
        This Privacy Policy outlines how we collect, use, and protect your
        information. By accessing our website or services, you agree to the
        terms outlined here. If you do not agree, please refrain from using our
        website.
      </p>
      <h3 className="text-lg font-semibold mt-4">Information We Collect</h3>
      <ol className="list-decimal ml-4">
        <li>
          Personal Information: We may collect personal and business details,
          such as name, contact information, and company details, when you
          register, make an inquiry, or book services through our platform.
        </li>
        <li>
          Log Data: Our servers automatically collect data such as IP addresses,
          browser type, referral URLs, and activity logs. This data helps us
          analyze site usage and improve user experience.
        </li>
        <li>
          Location Data: We may collect location data from your device to
          personalize your experience. You can disable location sharing through
          your device settings.
        </li>
        <li>
          Analytics and Tracking: We use tools like Google Analytics and HubSpot
          to gather anonymous data for service improvements. Cookies and other
          tracking technologies may be used—please refer to our Cookies Policy
          for more details.
        </li>
        <li>
          Social Media Features: Interactions with features like "Like" or
          "Share" buttons on our website may collect certain data governed by
          the respective social media platform's policies.
        </li>
      </ol>
      <h3 className="text-lg font-semibold mt-4">Use of Information</h3>
      <ul className="list-disc ml-4">
        <li>
          Communication: To respond to inquiries, register attendees, issue
          tickets, and share relevant content.
        </li>
        <li>
          Marketing: To provide updates, promotional materials, and tailored
          services related to our events.
        </li>
        <li>
          Compliance: To fulfill legal obligations and address disputes or
          claims.
        </li>
        <li>
          Service Improvement: To conduct audits, analyze trends, and enhance
          user experience.
        </li>
      </ul>
      <p className="mt-2">
        Non-personal aggregated data may also be used to analyze user behavior
        and improve our services.
      </p>
      <h3 className="text-lg font-semibold mt-4">Data Retention</h3>
      <p>
        We retain your information as long as necessary to fulfill the purposes
        outlined in this policy, comply with legal obligations, and resolve
        disputes.
      </p>
      <h3 className="text-lg font-semibold mt-4">Information Sharing</h3>
      <p>
        We do not share your personal or business information except as
        necessary to operate our business or with your consent. This may
        include:
      </p>
      <ul className="list-disc ml-4">
        <li>
          Sharing with affiliates, service providers, or partners for business
          operations.
        </li>
        <li>
          Publishing brief quotes, bios, or award nominations for promotional
          purposes.
        </li>
        <li>
          Sharing publicly submitted documents or content with event attendees.
        </li>
        <li>
          Complying with legal obligations or investigations of suspected fraud
          or abuse.
        </li>
      </ul>
      <h3 className="text-lg font-semibold mt-4">
        Protecting Your Information
      </h3>
      <p>
        We prioritize the security of your data through robust protection
        measures. However, public data submissions are beyond our control and
        may be accessed by third parties.
      </p>
      <h3 className="text-lg font-semibold mt-4">Contact Us</h3>
      <p>
        For questions about this Privacy Policy or to request data removal,
        email us at info@capstonemiddleeast.com
      </p>
    </div>
  );
}

export default PrivacyPage;
