import React, { useState } from "react";

const HowToHelp = () => {
  const [activeTab, setActiveTab] = useState("donate");

  const tabs = [
    {
      id: "donate",
      title: "Donate Clothes",
      description:
        "Donate gently used or new winter clothes to our collection points.",
    },
    {
      id: "volunteer",
      title: "Volunteer",
      description:
        "Join our team to help sort, package, and distribute donations.",
    },
    {
      id: "spread",
      title: "Spread the Word",
      description: "Share our cause with your network to raise awareness.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://i.ibb.co/rGpT3tZ/cloth-donation.jpg"
          alt="How to Help"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">How to Help</h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Contribution Matters</h2>
        <p className="max-w-3xl mx-auto">
          Every donation, every hour of your time, and every message shared
          brings us closer to making a difference. Here's how you can help make
          a positive impact.
        </p>
      </section>

      {/* Tab Section */}
      <section className="py-12 bg-white">
        <h2 className="text-center text-2xl font-bold mb-6">
          Explore Ways to Help
        </h2>
        <div className="flex justify-center space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 text-lg font-semibold rounded ${
                activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="text-center p-6 border rounded shadow">
          <p className="text-lg">
            {tabs.find((tab) => tab.id === activeTab).description}
          </p>
        </div>
      </section>

      {/* Split Sections */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8">
          <img
            src="https://i.ibb.co/rGpT3tZ/cloth-donation.jpg"
            alt="Donate Clothes"
            className="w-full rounded-lg shadow"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Donate Clothes</h2>
            <p>
              Your gently used winter clothing can bring warmth to someone in
              need. Visit our collection points to drop off your donations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Volunteer Your Time</h2>
            <p>
              Help us sort, package, and distribute donated items. Your time and
              effort can make a significant difference.
            </p>
          </div>
          <img
            src="https://i.ibb.co/rGpT3tZ/cloth-donation.jpg"
            alt="Volunteer"
            className="w-full rounded-lg shadow"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join us in spreading warmth and care this winter. Together, we can
          bring comfort to those in need.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100">
          Get Started
        </button>
      </section>

      <div className="bg-gray-50 text-gray-800">
        <div className="relative">
          <img
            src="https://i.ibb.co/rGpT3tZ/cloth-donation.jpg"
            alt="Winter Help"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">How to Help</h1>
          </div>
        </div>
        <section className="py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Ways to Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="shadow-md p-4 rounded">
                <h3 className="text-xl font-bold">Donate Clothes</h3>
                <p>
                  Drop off your gently used winter clothes at our collection
                  points.
                </p>
              </div>
              <div className="shadow-md p-4 rounded">
                <h3 className="text-xl font-bold">Volunteer</h3>
                <p>
                  Assist with sorting, packaging, or distributing donations.
                </p>
              </div>
              <div className="shadow-md p-4 rounded">
                <h3 className="text-xl font-bold">Spread the Word</h3>
                <p>Share our campaigns to amplify the cause.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-8">
            <h2 className="text-3xl font-bold">Donate Clothes</h2>
            <p className="mt-2">
              Bring warmth by donating your unused winter clothing.
            </p>
          </div>
          <img
            src="https://i.ibb.co/rGpT3tZ/cloth-donation.jpg"
            alt="Donate Clothes"
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-100">
          <img
            src="https://i.ibb.co/rGpT3tZ/cloth-donation.jpg"
            alt="Volunteer"
            className="w-full"
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold">Volunteer</h2>
            <p className="mt-2">
              Be part of the change by volunteering your time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Warmth & Care. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HowToHelp;
