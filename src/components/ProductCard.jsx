import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            style={{
                borderRadius: 'var(--radius)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)',
                transition: 'box-shadow 0.3s ease'
            }}
        >
            <Link
                to={`/produit/${product.id}`}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    backgroundColor: 'var(--white)',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    height: '100%'
                }}
                onMouseOver={(e) => e.currentTarget.parentElement.style.boxShadow = '0 12px 32px rgba(0,0,0,0.35), 0 4px 8px rgba(0,0,0,0.2)'}
                onMouseOut={(e) => e.currentTarget.parentElement.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)'}
            >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                    />
                    <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', padding: '0.25rem 0.6rem', backgroundColor: 'var(--white)', borderRadius: '4px', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: 'var(--shadow-sm)' }}>
                        {product.brand}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', padding: '0 0.5rem 0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.01em', margin: 0, lineHeight: 1.3 }}>
                        {product.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.35rem' }}>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                            {t(`categories.${product.category}`)}
                        </p>
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            backgroundColor: 'var(--black)',
                            color: 'var(--white)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                        }}>
                            {product.volumes[0].price.toLocaleString()} {product.currency}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
