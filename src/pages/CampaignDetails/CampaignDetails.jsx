import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DetailsCard from './DetailsCard';
import DonationForm from './DonationForm';

const CampaignDetails = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <DetailsCard></DetailsCard>
            <DonationForm></DonationForm>
            <Footer></Footer>
        </div>
    );
};

export default CampaignDetails;