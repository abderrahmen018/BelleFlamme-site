import React from 'react';
import ProductCard from './ProductCard';

const ProductGridSection = ({ title, products, linkUrl, linkText, bgColor = 'var(--white)' }) => {
    if (!products || products.length === 0) return null;

    return (
        <section className="section-padding" style={{ backgroundColor: bgColor }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                    <div>
                        <h2 className="font-serif" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>{title}</h2>
                        {/* Optional subtitle here */}
                    </div>
                    {linkUrl && (
                        <a href={linkUrl} className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}>
                            {linkText || 'Voir Tout'}
                        </a>
                    )}
                </div>

                <div className="product-grid">
                    {products.slice(0, 4).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGridSection;
