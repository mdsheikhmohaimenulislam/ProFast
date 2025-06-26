import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorksData from '../HowItWorksData/HowItWorksData';
import ServicesSection from '../ServicesSection/ServicesSection';
import ClientLogoSlider from '../ClientLogoSlider/ClientLogoSlider';
import FeatureCards from '../FeatureCards/FeatureCards';
import Merchant from '../Merchant/Merchant';
import ReviewSection from '../ReviewSection/ReviewSection';
import Demo from '../../../Demo';



const HomePages = () => {
    return (
        <div>
            <Banner/>
          <HowItWorksData/>
          <ServicesSection/>
          <ClientLogoSlider/>
          <FeatureCards/>
          <Merchant/>
          <ReviewSection/>
          <Demo/>
        </div>
    );
};

export default HomePages;