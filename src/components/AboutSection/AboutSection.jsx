import React from "react";

const AboutSection = () => {
  return (
    <section
      className="bg-blue-100 py-12 px-6 w-11/12 mx-auto rounded-2xl mt-12"
      data-aos="fade-left" // Animation for the section
    >
      <div
        className="max-w-4xl mx-auto text-center"
        data-aos="zoom-in" // Nested animation for the text
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-700 font-medium leading-relaxed">
          Welcome to Warmth & Care, a heartfelt initiative dedicated to
          bringing comfort and warmth to those in need during the coldest months
          of the year. Our mission is simple yet impactful: to ensure that
          everyone, regardless of their circumstances, can experience the warmth
          and care they deserve. We are a passionate community of individuals
          and organizations working together to collect and distribute winter
          essentials such as coats, blankets, scarves, and gloves to
          underprivileged families, homeless shelters, and vulnerable
          communities. Whether it’s through donation drives, local events, or
          volunteer efforts, our goal is to make a tangible difference, one warm
          item at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;