import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

import OrderModal from '../components/OrderModal';

const Products = () => {
    const { t, i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category') || 'all';
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(product => {
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container section-padding">
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                    {t('nav.products')}
                </h1>

                {/* Search Bar */}
                <div style={{
                    position: 'relative',
                    maxWidth: '500px',
                    width: 'calc(100% - 2rem)',
                    margin: '0 auto 2.5rem',
                }}>
                    <input
                        type="text"
                        placeholder={i18n.language === 'ar' ? 'البحث عن عطر...' : 'Search for a perfume...'}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem 1.5rem 1rem 3.5rem',
                            borderRadius: '50px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--white)',
                            fontSize: '1rem',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'var(--transition)',
                            textAlign: i18n.language === 'ar' ? 'right' : 'left',
                            paddingRight: i18n.language === 'ar' ? '3.5rem' : '1.5rem',
                            paddingLeft: i18n.language === 'ar' ? '1.5rem' : '3.5rem'
                        }}
                    />
                    <Search
                        size={20}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: i18n.language === 'ar' ? 'auto' : '1.25rem',
                            right: i18n.language === 'ar' ? '1.25rem' : 'auto',
                            transform: 'translateY(-50%)',
                            color: 'var(--medium-gray)'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <button
                        onClick={() => setSearchParams({})}
                        style={{
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            fontWeight: categoryFilter === 'all' ? 700 : 400,
                            borderBottom: categoryFilter === 'all' ? '1px solid black' : 'none',
                            color: categoryFilter === 'all' ? 'var(--black)' : 'var(--medium-gray)'
                        }}
                    >
                        {i18n.language === 'ar' ? 'الكل' : 'All'}
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSearchParams({ category: cat.id })}
                            style={{
                                textTransform: 'uppercase',
                                fontSize: '0.75rem',
                                letterSpacing: '0.1em',
                                fontWeight: categoryFilter === cat.id ? 700 : 400,
                                borderBottom: categoryFilter === cat.id ? '1px solid black' : 'none',
                                color: categoryFilter === cat.id ? 'var(--black)' : 'var(--medium-gray)'
                            }}
                        >
                            {cat[`name_${i18n.language}`]}
                        </button>
                    ))}
                </div>
            </div>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        // The instruction "Update the product card mapping to use product.volumes[0].price"
                        // is interpreted as passing the price explicitly.
                        // If ProductCard already extracts price from the 'product' prop, this might be redundant.
                        // However, to fulfill the instruction, we add it as a separate prop.
                        price={product.volumes[0].price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
