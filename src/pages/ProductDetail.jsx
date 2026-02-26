import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ProductDetail = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const product = products.find(p => p.id === parseInt(id));
    const [selectedVolume, setSelectedVolume] = useState(product?.volumes[0]);

    if (!product) return <div className="container section-padding">Product not found</div>;

    return (
        <div className="container section-padding">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem' }}>
                {/* Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ height: '700px', backgroundColor: 'var(--bg-secondary)' }}
                >
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div>

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                    <div>
                        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>{product.brand}</span>
                        <h1 className="font-serif" style={{ fontSize: '3rem', marginTop: '0.5rem' }}>{product.name}</h1>
                        <p style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '1rem' }}>{product.price} {product.currency}</p>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '2rem 0' }}>
                        <p style={{ color: 'var(--text-secondary)' }}>{product.description}</p>
                    </div>

                    <div>
                        <h4 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>Volume</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {product.volumes.map(vol => (
                                <button
                                    key={vol}
                                    onClick={() => setSelectedVolume(vol)}
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        border: '1px solid black',
                                        backgroundColor: selectedVolume === vol ? 'black' : 'transparent',
                                        color: selectedVolume === vol ? 'white' : 'black',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    {vol}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="btn btn-black" style={{ width: '100%', marginTop: 'auto' }}>
                        Ajouter au Panier
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDetail;
