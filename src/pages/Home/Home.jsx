import React, { useEffect } from "react";
import AOS from "aos";
import Banner from '../../components/Banner/Banner';
import AboutSection from '../../components/AboutSection/AboutSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import DonationImpact from '../../components/DonationImpact/DonationImpact';
import VolunteerSection from '../../components/VolunteerSection/VolunteerSection';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <HowItWorks></HowItWorks>
            <DonationImpact></DonationImpact>
            <VolunteerSection></VolunteerSection>
        </div>
    );
};

export default Home;