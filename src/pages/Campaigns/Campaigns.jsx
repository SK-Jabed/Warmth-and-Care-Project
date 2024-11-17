import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../../components/CampaignCard/CampaignCard';

const Campaigns = () => {
    const data = useLoaderData();
    console.log(data);

    return (
      <div>
        All Campaigns are here
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
          {data.map((campaign) => (
            <CampaignCard campaign={campaign}></CampaignCard>
          ))}
        </div>
      </div>
    );
};

export default Campaigns;