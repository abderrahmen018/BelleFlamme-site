import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 80) { // scrolling down
                    setIsVisible(false);
                } else { // scrolling up
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const toggleLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.products'), path: '/produits' },
        { name: t('nav.scentPicker'), path: '/Choisir_mon_parfum_avec_IA' },
        { name: t('nav.about'), path: '/a-propos' },
    ];

    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'transform 0.3s ease-in-out',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
        }}>
            <div className="container" style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Belle<span style={{ fontWeight: 300 }}>Flamme</span>
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link key={link.path} to={link.path} style={{ fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {link.name}
                        </Link>
                    ))}
                    <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
                        <button onClick={() => toggleLanguage('fr')} style={{ opacity: i18n.language === 'fr' ? 1 : 0.5, fontSize: '0.75rem' }}>FR</button>
                        <button onClick={() => toggleLanguage('en')} style={{ opacity: i18n.language === 'en' ? 1 : 0.5, fontSize: '0.75rem' }}>EN</button>
                        <button onClick={() => toggleLanguage('ar')} style={{ opacity: i18n.language === 'ar' ? 1 : 0.5, fontSize: '0.75rem' }}>AR</button>
                    </div>
                    <ShoppingBag size={20} style={{ cursor: 'pointer' }} />
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <ShoppingBag size={20} className="mobile-only" />
                    <button className="mobile-only" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: '80px',
                            right: 0,
                            width: '100%',
                            height: 'calc(100vh - 80px)',
                            background: 'var(--white)',
                            zIndex: 999,
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: 500 }}>
                                {link.name}
                            </Link>
                        ))}
                        <div style={{ marginTop: 'auto', display: 'flex', gap: '2rem', paddingBottom: '2rem' }}>
                            <button onClick={() => toggleLanguage('fr')} style={{ fontWeight: i18n.language === 'fr' ? 700 : 400 }}>Français</button>
                            <button onClick={() => toggleLanguage('en')} style={{ fontWeight: i18n.language === 'en' ? 700 : 400 }}>English</button>
                            <button onClick={() => toggleLanguage('ar')} style={{ fontWeight: i18n.language === 'ar' ? 700 : 400 }}>العربية</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
