import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSlider />
            <CategorySection />
            <FeaturedProducts />
        </div>
    );
};

export default Home;
