import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const slides = [
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1541602240222-df4ed52cd370?q=80&w=2070&auto=format&fit=crop', // Placeholder
        title: 'hero.title',
        subtitle: 'hero.subtitle'
    },
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2070&auto=format&fit=crop', // Placeholder
        title: 'categories.originals',
        subtitle: 'hero.subtitle'
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: 'var(--black)' }}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                    <img
                        src={slides[current].url}
                        alt="Perfume"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'var(--white)', textAlign: 'center', padding: '0 2rem' }}>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="font-serif"
                            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', marginBottom: '1.5rem', letterSpacing: '0.05em' }}
                        >
                            {t(slides[current].title)}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '3rem', maxWidth: '600px', opacity: 0.8 }}
                        >
                            {t(slides[current].subtitle)}
                        </motion.p>
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="btn"
                            style={{ border: '1px solid white', color: 'white', cursor: 'pointer' }}
                            onClick={() => window.location.href = '/produits'}
                        >
                            {t('hero.cta')}
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button onClick={prevSlide} style={{ position: 'absolute', left: '2rem', top: '50%', color: 'white', transform: 'translateY(-50%)', zIndex: 10 }}>
                <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button onClick={nextSlide} style={{ position: 'absolute', right: '2rem', top: '50%', color: 'white', transform: 'translateY(-50%)', zIndex: 10 }}>
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Dots */}
            <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', zIndex: 10 }}>
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: current === idx ? 'white' : 'rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            transition: 'var(--transition)'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
