import React from "react";

const DonationImpact = () => {
  return (
    <section
      className="bg-green-100 py-12 px-6 my-12"
      data-aos="fade-in"
      data-aos-delay="200"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">
          The Impact of Your Donation
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Your donations are making a real difference! Together, we have helped
          thousands of people across Bangladesh stay warm during the cold winter
          months. See the impact of your generous contributions below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-white p-6 shadow-lg rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Clothes Donated
            </h3>
            <p className="text-xl text-gray-700">5,000+ items donated</p>
          </div>
          <div
            className="bg-white p-6 shadow-lg rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              People Helped
            </h3>
            <p className="text-xl text-gray-700">2,000+ individuals helped</p>
          </div>
          <div
            className="bg-white p-6 shadow-lg rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Volunteers Involved
            </h3>
            <p className="text-xl text-gray-700">300+ volunteers joined</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
