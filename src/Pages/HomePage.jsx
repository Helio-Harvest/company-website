import React from 'react';
import Navigation from '../Components/Navigation';
import EnergySolutions from '../Components/Home/EnergySolutions';
import HeroSection from '../Components/Home/HeroSection';

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <HeroSection/>
            <EnergySolutions/>
        </div>
    );
};

export default HomePage;