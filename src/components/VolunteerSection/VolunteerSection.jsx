import React from "react";

const VolunteerSection = () => {
  return (
    <section
      className="bg-blue-50 py-12 px-6 w-11/12 mx-auto rounded-2xl my-20"
      data-aos="fade-right"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Become a Volunteer
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Your help can make a big difference! By volunteering with us, you can
          be part of the movement to bring warmth to those who need it most.
          Here's how you can get involved:
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="zoom-in"
        >
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Why Volunteer?
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>Make a direct impact on the lives of people in need</li>
              <li>
                Help distribute clothing and coordinate with donation centers
              </li>
              <li>Gain experience in a meaningful community service project</li>
            </ul>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Volunteer Benefits
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>Receive a certificate of appreciation</li>
              <li>Get access to exclusive volunteer events</li>
              <li>Be part of a passionate and supportive community</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition duration-300 ease-in-out">
            Sign Up to Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
