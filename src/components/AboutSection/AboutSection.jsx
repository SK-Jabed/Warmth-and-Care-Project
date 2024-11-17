import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-blue-100 py-12 px-6 w-11/12 mx-auto rounded-2xl mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to the Winter Clothing Donation Platform. Our mission is to
          connect generous donors with volunteers who work tirelessly to
          distribute warm clothing to those in need across Bangladesh. Every
          winter, thousands of vulnerable people face harsh weather conditions
          without proper clothing. By donating your unused or gently worn winter
          clothes, you can bring warmth and comfort to those who need it the
          most. Together, let's make this winter warmer for everyone!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
