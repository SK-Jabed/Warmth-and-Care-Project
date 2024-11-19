import React, { useState } from "react";

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
          src="https://i.ibb.co/rGpT3tZ/cloth-donation.jpg"
          alt="Winter Help"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">How to Help</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Your Help Matters</h2>
          <p className="mt-4 text-lg text-gray-600">
            Your contributions make a real difference in keeping vulnerable
            people warm and cared for during harsh winters.
          </p>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Ways to Contribute</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                img: "https://i.ibb.co/rGpT3tZ/cloth-donation.jpg",
                title: "Donate Clothes",
                text: "Gather your gently used winter clothes and bring them to one of our collection points.",
              },
              {
                img: "https://i.ibb.co/rGpT3tZ/cloth-donation.jpg",
                title: "Spread the Word",
                text: "Share our campaigns on social media and encourage others to participate.",
              },
              {
                img: "https://i.ibb.co/rGpT3tZ/cloth-donation.jpg",
                title: "Volunteer",
                text: "Join our team of volunteers and help distribute donations to those in need.",
              },
            ].map((item, idx) => (
              <div key={idx} className="shadow-lg rounded-lg p-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Get Involved</h2>
          <div className="flex justify-center space-x-6 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-t-lg font-bold ${
                  activeTab === tab.id ? "bg-blue-700 text-white" : "bg-gray-200"
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

      {/* Testimonials Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">What People Are Saying</h2>
          <div className="mt-10">
            <div className="flex overflow-x-scroll gap-6">
              {[
                "I donated my old sweaters, and it felt amazing to help others.",
                "The platform is so easy to use. I’ll donate again next winter!",
                "Seeing the smiles on people’s faces makes it all worth it.",
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md p-6 rounded-lg min-w-[300px]"
                >
                  <p className="italic text-gray-700">"{testimonial}"</p>
                  <p className="mt-4 text-sm font-semibold">- Happy Donor</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Watch Our Journey</h2>
            <p className="text-lg text-gray-600">
              Learn how your donations make a real impact in people's lives.
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/example"
              title="Donation Impact"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">Be the Change</h2>
        <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default HowToHelp;
