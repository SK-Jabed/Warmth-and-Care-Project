import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutSection from '../../components/AboutSection/AboutSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            This is HomePage
            <Banner></Banner>
            <AboutSection></AboutSection>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;