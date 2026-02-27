import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft, ChevronRight, ArrowLeft,
    ShieldCheck, Sparkles, Clock, Droplets,
    Plus, Minus, Star
} from 'lucide-react';
import OrderForm from '../components/OrderForm';

const Accordion = ({ title, content, isOpen, onClick }) => {
    return (
        <div style={{ borderBottom: '1px solid var(--border-color)' }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '1.5rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
                }}
            >
                <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '0.02em' }}>{title}</span>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ paddingBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const product = products.find(p => p.id === parseInt(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openAccordion, setOpenAccordion] = useState('description');

    const carouselRef = useRef(null);

    if (!product) return <div className="container section-padding">Product not found</div>;

    const benefits = [
        { icon: <Clock size={20} />, text: i18n.language === 'ar' ? 'ثبات طويل' : 'Longue Tenue' },
        { icon: <Sparkles size={20} />, text: i18n.language === 'ar' ? 'جودة ممتازة' : 'Qualité Premium' },
        { icon: <Droplets size={20} />, text: i18n.language === 'ar' ? 'مكونات طبيعية' : 'Ingrédients Naturels' },
        { icon: <ShieldCheck size={20} />, text: i18n.language === 'ar' ? 'أصلي ١٠٠٪' : '100% Authentique' }
    ];

    return (
        <div style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
            <div className="container" style={{ paddingTop: '2rem' }}>
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(-1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '2rem',
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        fontSize: '0.9rem'
                    }}
                >
                    <ArrowLeft size={18} />
                    {i18n.language === 'ar' ? 'العودة للمتجر' : 'Retour au catalogue'}
                </motion.button>

                <div className="product-layout" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    marginBottom: '8rem'
                }}>
                    {/* LEFT COLUMN: Gallery */}
                    <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
                        <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', backgroundColor: '#F9F9F9' }}>
                            <motion.div
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = offset.x;
                                    if (swipe < -50 && currentImageIndex < product.images.length - 1) {
                                        setCurrentImageIndex(c => c + 1);
                                    } else if (swipe > 50 && currentImageIndex > 0) {
                                        setCurrentImageIndex(c => c - 1);
                                    }
                                }}
                                style={{
                                    aspectRatio: '1/1',
                                    cursor: 'grab',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={product.images[currentImageIndex]}
                                        alt={product.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                </AnimatePresence>
                            </motion.div>

                            {/* Navigation Points (Mobile/Tablet focus) */}
                            <div style={{
                                position: 'absolute',
                                bottom: '1.5rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '0.5rem'
                            }}>
                                {product.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        style={{
                                            width: currentImageIndex === idx ? '24px' : '8px',
                                            height: '8px',
                                            borderRadius: '10px',
                                            backgroundColor: currentImageIndex === idx ? 'var(--black)' : 'rgba(0,0,0,0.1)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Desktop Thumbnails */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: currentImageIndex === idx ? '2px solid var(--black)' : '2px solid transparent',
                                        overflow: 'hidden',
                                        padding: '0'
                                    }}
                                >
                                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Info & Buy */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                <div style={{ display: 'flex', color: '#FFB800' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-secondary)' }}>(48 avis)</span>
                            </div>
                            <h4 style={{
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                fontSize: '0.85rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '0.5rem'
                            }}>{product.brand}</h4>
                            <h1 className="font-serif" style={{ fontSize: '3.5rem', lineHeight: 1, marginBottom: '1.5rem' }}>{product.name}</h1>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                                <span style={{ fontSize: '2.25rem', fontWeight: 700 }}>{product.price.toLocaleString()} {product.currency}</span>
                            </div>
                        </div>

                        {/* Benefits Badges */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1.5rem',
                            padding: '1.5rem',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: 'var(--radius)'
                        }}>
                            {benefits.map((b, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ color: 'var(--black)' }}>{b.icon}</div>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{b.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Integrated Selection & Order Form */}
                        <OrderForm product={product} />

                        {/* Accordions */}
                        <div style={{ marginTop: '1rem' }}>
                            <Accordion
                                title={i18n.language === 'ar' ? 'الوصف' : 'Description'}
                                content={product.description}
                                isOpen={openAccordion === 'description'}
                                onClick={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
                            />
                            <Accordion
                                title={i18n.language === 'ar' ? 'مكونات العطر' : 'Notes Olfactives'}
                                content={product.notes || "Notes de tête : Bergamote, Poivre. Notes de cœur : Lavande, Géranium. Notes de fond : Ambroxan, Cèdre."}
                                isOpen={openAccordion === 'notes'}
                                onClick={() => setOpenAccordion(openAccordion === 'notes' ? null : 'notes')}
                            />
                            <Accordion
                                title={i18n.language === 'ar' ? 'طريقة الاستخدام' : "Conseils d'utilisation"}
                                content="Vaporisez à environ 20 cm de votre peau, en privilégiant les points de pulsation (intérieur des poignets, sous le lobe de l'oreille)."
                                isOpen={openAccordion === 'usage'}
                                onClick={() => setOpenAccordion(openAccordion === 'usage' ? null : 'usage')}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Styles via inline media-like logic or just responsive grid */}
            <style>
                {`
                    @media (max-width: 900px) {
                        .product-layout {
                            grid-template-columns: 1fr !important;
                            gap: 2rem !important;
                        }
                        .product-layout > div:first-child {
                            position: relative !important;
                            top: 0 !important;
                        }
                        .font-serif {
                            font-size: 2.5rem !important;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ProductDetail;
