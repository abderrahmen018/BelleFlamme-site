import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const categories = [
    {
        key: 'originals',
        image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=2070&auto=format&fit=crop',
        link: '/produits?category=originals'
    },
    {
        key: 'dupes',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2070&auto=format&fit=crop',
        link: '/produits?category=dupes'
    },
    {
        key: 'decants',
        image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2070&auto=format&fit=crop',
        link: '/produits?category=decants'
    }
];

const CategorySection = () => {
    const { t } = useTranslation();

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <h2 className="font-serif" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>
                    {t('categories.title')}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.key}
                            whileHover={{ y: -10 }}
                            style={{ position: 'relative', height: '500px', cursor: 'pointer', overflow: 'hidden', borderRadius: 'var(--radius)' }}
                        >
                            <img
                                src={cat.image}
                                alt={t(`categories.${cat.key}`)}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: 'white' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    {t(`categories.${cat.key}`)}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
