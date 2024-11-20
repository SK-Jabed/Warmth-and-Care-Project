import React, { useState } from "react";
import heroBg from "../../assets/Bg.jpg"
import select from "../../assets/select.png"
import prepare from "../../assets/clothing.png"
import submit from "../../assets/clothes.png"
import donate from "../../assets/Donate.png"

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
          <button className="bg-white text-blue-500 px-6 py-3 mt-6 font-semibold rounded-lg shadow hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Simple Steps to Contribute
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Featured Impact Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Your Impact</h2>
          <p className="mt-4 text-lg text-gray-700">
            See the smiles your contributions bring.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                img: "https://i.ibb.co.com/99X7NWy/happy-family.png",
                text: "500+ Families Helped",
              },
              {
                img: "https://i.ibb.co.com/6XDkzr9/donation.png",
                text: "1000+ Items Donated",
              },
              {
                img: "https://i.ibb.co.com/5sn35Gz/Communities-Strengthened.png",
                text: "Communities Strengthened",
              },
            ].map((impact, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={impact.img}
                  alt="Impact"
                  className="w-44 h-44 mx-auto mb-4"
                />
                <p className="text-lg font-semibold">{impact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Contribution Matters</h2>
        <p className="max-w-3xl mx-auto">
          Every donation, every hour of your time, and every message shared
          brings us closer to making a difference. Here's how you can help make
          a positive impact.
        </p>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-gray-100">
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

      {/* Split Sections */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8">
          <img
            src={donate}
            alt="Donate Clothes"
            className="w-full h-[420px] rounded-lg shadow"
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
      </section>

      {/* Supported Divisions Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Supported Divisions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What items can I donate?",
                answer:
                  "We accept jackets, sweaters, blankets, and other winter clothes in good condition.",
              },
              {
                question: "Where are the drop-off points?",
                answer:
                  "Check our platform for a list of collection centers near you.",
              },
              {
                question: "How do I schedule a pickup?",
                answer:
                  "Login to your account, select a campaign, and fill in the pickup form.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <p className="mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-10 text-left">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What kind of clothes can I donate?
              </div>
              <div className="collapse-content">
                <p>
                  We accept gently used winter wear like jackets, sweaters,
                  scarves, and gloves.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How do I arrange for a pickup?
              </div>
              <div className="collapse-content">
                <p>
                  Fill out the donation form and select 'Pickup' as your
                  preferred option.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Can I volunteer for this campaign?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, visit our volunteer section and sign up to help
                  distribute donations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join us in spreading warmth and care this winter. Make this winter
          better for someone in need. Together, we can bring comfort to those in
          need.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100">
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default HowToHelp;
