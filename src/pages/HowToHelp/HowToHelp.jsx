import React, { useState } from "react";
import heroBg from "../../assets/Bg.jpg";
import select from "../../assets/select.png";
import prepare from "../../assets/clothing.png";
import submit from "../../assets/clothes.png";
import { Link } from "react-router-dom";
import DonationImpact from "../../components/DonationImpact/DonationImpact";

const HowToHelp = () => {
  const [activeTab, setActiveTab] = useState("donate");

  const tabs = [
    {
      id: "donate",
      title: "Donate Clothes",
      content:
        "Your gently used winter clothing can provide warmth to those in need. Visit our collection points to drop off donations or schedule a pickup.",
    },
    {
      id: "volunteer",
      title: "Volunteer",
      content:
        "Join our team to help collect, sort, and distribute donations across communities.",
    },
    {
      id: "spread",
      title: "Spread the Word",
      content:
        "Raise awareness by sharing our campaigns with your friends and family. Together, we can make a bigger impact.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={heroBg}
          alt="How to Help"
          className="w-full h-[520px] object-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">How to Help</h1>
          <p className="mt-4 text-xl text-gray-200 text-center w-8/12">
            Spread warmth, love, and care this winter season. Help spread warmth
            and care this winter by joining our mission to make a difference.
            Together, we can make this winter warm for everyone in need.
          </p>
          <Link
            to={"/"}
            className="px-8 py-3 mt-5 rounded-md bg-gradient-to-r from-teal-400 to-blue-500 text-white uppercase tracking-wide font-medium hover:opacity-90 hover:bg-gradient-to-br hover:from-blue-500 hover:to-teal-400 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Simple Steps to Contribute
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {/* Step 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img src={select} alt="Donate" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Step 1: Select a Campaign</h3>
            <p className="mt-2">
              Browse our active donation campaigns and choose the one you want
              to support.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img src={prepare} alt="Collect" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Step 2: Prepare Your Donation</h3>
            <p className="mt-2">
              Gather warm clothes like jackets, sweaters, or blankets in good
              condition.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img src={submit} alt="Deliver" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Step 3: Submit Your Donation</h3>
            <p className="mt-2">
              Drop off the items at our designated locations or schedule a
              pickup through our platform.
            </p>
          </div>
        </div>
      </div>

      <DonationImpact></DonationImpact>

      {/* Tabs Section */}
      <section className="py-16 bg-gray-100 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Explore Ways to Help
          </h2>
          <div className="flex justify-center space-x-6 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-t-lg font-bold ${
                  activeTab === tab.id
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="bg-white p-8 shadow-md mt-4">
            <h3 className="text-xl font-semibold">
              {tabs.find((tab) => tab.id === activeTab).title}
            </h3>
            <p className="mt-4 text-gray-600">
              {tabs.find((tab) => tab.id === activeTab).content}
            </p>
          </div>
        </div>
      </section>

      {/* Supported Divisions Section */}
      <div className="bg-blue-50 py-12 mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Supported Divisions
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            {[
              "Dhaka",
              "Chittagong",
              "Sylhet",
              "Khulna",
              "Rajshahi",
              "Rangpur",
            ].map((division, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <h3 className="text-lg font-bold">{division}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Join the mission to help vulnerable communities in {division}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-blue-400 text-white text-center mb-20 mt-14">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join us in spreading warmth and care this winter. Make this winter
          better for someone in need. Together, we can bring comfort to those in
          need.
        </p>
        <Link
          to={"/campaigns"}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white uppercase tracking-wide font-semibold hover:opacity-90 hover:bg-gradient-to-br hover:from-blue-500 hover:to-teal-400 transition-all duration-300"
        >
          Donate Now
        </Link>
      </section>
    </div>
  );
};

export default HowToHelp;
