import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import ProductGridSection from '../components/ProductGridSection';
import { products } from '../data/products';

const Home = () => {
    // Filter products for various sections
    const newProducts = products.filter(p => p.isNew);
    const promoProducts = products.filter(p => p.volumes?.some(v => v.oldPrice));
    const hommeProducts = products.filter(p => p.gender === 'homme' || p.gender === 'mixte');
    const femmeProducts = products.filter(p => p.gender === 'femme' || p.gender === 'mixte');

    return (
        <div className="home-page">
            <HeroSlider />
            
            <ProductGridSection 
                title="Nouveautés" 
                products={newProducts} 
                linkUrl="/produits?filter=new" 
                bgColor="var(--white)"
            />
            
            <CategorySection />
            
            <ProductGridSection 
                title="Promotions" 
                products={promoProducts} 
                linkUrl="/produits?filter=promo" 
                bgColor="var(--bg-secondary)"
            />
            
            <ProductGridSection 
                title="Parfums pour Homme" 
                products={hommeProducts} 
                linkUrl="/produits?gender=homme" 
                bgColor="var(--white)"
            />
            
            <ProductGridSection 
                title="Parfums pour Femme" 
                products={femmeProducts} 
                linkUrl="/produits?gender=femme" 
                bgColor="var(--bg-secondary)"
            />
        </div>
    );
};

export default Home;
