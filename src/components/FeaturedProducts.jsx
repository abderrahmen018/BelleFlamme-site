import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { useTranslation } from 'react-i18next';

const FeaturedProducts = () => {
    const { t } = useTranslation();
    // Show 3 featured products
    const featured = products.slice(0, 3);

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                    <div>
                        <h2 className="font-serif" style={{ fontSize: '3rem' }}>Coups de Cœur</h2>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Notre sélection de fragrances incontournables.</p>
                    </div>
                    <button className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}>
                        Voir Tout
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    {featured.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
