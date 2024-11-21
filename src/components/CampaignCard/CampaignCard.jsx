import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const { id, image, title, description, division } = campaign || {};

    return (
      <div>
        <div className="card shadow-xl p-6 bg-white transition  hover:scale-105 overflow-hidden cursor-pointer">
          <figure className="rounded-2xl">
            <img
              className="w-full h-[265px]"
              src={image}
              alt="Campaign Image"
            />
          </figure>
          <div className="border-b-2 pb-3 mt-8">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-base font-semibold text-gray-500">
              {description}
            </p>
            <p className="mt-3 text-base font-semibold text-gray-500">
              Division: {division}
            </p>
          </div>
          {/* <Link to={`/gadget/${product_id}`} className="mt-4">
            <button className="px-6 py-3 border-2 border-[#9538E2] text-[#9538E2] text-lg font-semibold bg-white rounded-full hover:bg-[#9538E2] hover:text-white">
              View Details
            </button>
          </Link> */}

          <Link>
            <NavLink
              to={`/details/${id}`}
              type="button"
              className="group flex h-14 w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
            >
              <div className="flex h-full w-full px-8  items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">
                Donate Now
              </div>
            </NavLink>
          </Link>
        </div>
      </div>
    );
};

export default CampaignCard;