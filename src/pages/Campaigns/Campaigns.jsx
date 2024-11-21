import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../../components/CampaignCard/CampaignCard';

const Campaigns = () => {
    const data = useLoaderData();

    return (
      <div>
        <div className="text-center mb-10 mt-4 bg-cyan-300 py-8">
          <h1 className="text-4xl font-bold text-gray-800">
            All Donation Campaigns
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore all our donation campaigns designed to bring warmth and
            comfort to those in need this winter. Together, we can make a
            difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto mb-20">
          {data.map((campaign) => (
            <CampaignCard campaign={campaign}></CampaignCard>
          ))}
        </div>
      </div>
    );
};

export default Campaigns;