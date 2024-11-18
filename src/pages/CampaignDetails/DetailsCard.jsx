import React from 'react';
import { useLoaderData } from "react-router-dom";

const DetailsCard = () => {
    const singleData = useLoaderData();
    const { title, image, description, status, contactInfo, division } =
      singleData;

    return (
      <div className="w-11/12 mx-auto mt-8 ">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h2 className="mb-5 text-5xl font-bold">{title}</h2>
              <p className="mb-5">{description}</p>
              <p className="text-lg font-normal text-[#09080F60] mt-5">{status}</p>
              <p className="text-lg font-normal text-[#09080F60] mt-5">{contactInfo}</p>
              <p className="text-lg font-normal text-[#09080F60] mt-5">{division}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;