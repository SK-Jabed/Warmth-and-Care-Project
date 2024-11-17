import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-6 px-6 mt-14 w-11/12 mx-auto rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          How It Works
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Donating winter clothes is easy! Follow these steps:
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-700">
            <li>Log in or sign up to create your account.</li>
            <li>Browse the donation campaigns listed on the homepage.</li>
            <li>
              Fill out the donation form to provide details about your
              contribution.
            </li>
            <li>Drop off your donation at a collection point near you.</li>
          </ol>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Supported Divisions:</strong> We are currently operating in
            the following divisions:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Dhaka</li>
            <li>Chattogram</li>
            <li>Rajshahi</li>
            <li>Khulna</li>
            <li>Barishal</li>
            <li>Sylhet</li>
            <li>Rangpur</li>
            <li>Mymensingh</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;