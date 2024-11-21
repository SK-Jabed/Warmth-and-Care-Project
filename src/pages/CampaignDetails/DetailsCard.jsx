import React from 'react';
import { useLoaderData } from "react-router-dom";

const DetailsCard = () => {
    const singleData = useLoaderData();
    const { title, image, description, status, contactInfo, division } =
      singleData;

    return (
      <div className="w-11/12 mx-auto mt-8">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center">
            <div className="max-w-md text-white">
              <h2 className="mb-5 text-5xl font-bold">{title}</h2>
              <p className="mb-5 font-semibold">{description}</p>
              <span className="px-5 py-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white uppercase tracking-wide font-medium hover:opacity-90 hover:bg-gradient-to-br hover:from-blue-500 hover:to-teal-400 transition-all duration-300">
                {status}
              </span>
              <p className="text-lg font-normal text-white mt-5">
                <span className='font-bold text-lg'>Contact Info: </span>
                {contactInfo}
              </p>
              <p className="text-lg font-normal text-white mt-5">{division}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;