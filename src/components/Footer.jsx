import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer style={{ backgroundColor: 'var(--black)', color: 'var(--white)', padding: '5rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '0.1em' }}>BELLEFLAMME</h3>
                        <p style={{ opacity: 0.6, fontSize: '0.875rem' }}>
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    <div>
                        <h4 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '1.5rem', opacity: 0.4 }}>Navigation</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/" style={{ fontSize: '0.875rem' }}>{t('nav.home')}</Link></li>
                            <li><Link to="/produits" style={{ fontSize: '0.875rem' }}>{t('nav.products')}</Link></li>
                            <li><Link to="/a-propos" style={{ fontSize: '0.875rem' }}>{t('nav.about')}</Link></li>
                            <li><Link to="/conditions" style={{ fontSize: '0.875rem' }}>Conditions de vente</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '1.5rem', opacity: 0.4 }}>Contact</h4>
                        <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>contact@belleflamme.com</p>
                        <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>+213 5XX XX XX XX</p>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', opacity: 0.4 }}>
                    <p>© 2024 BelleFlamme. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span>Instagram</span>
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
