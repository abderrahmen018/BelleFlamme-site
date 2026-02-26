import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="container section-padding">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="font-serif" style={{ fontSize: '4rem', marginBottom: '3rem', textAlign: 'center' }}>Notre Histoire</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.125rem', lineHeight: 1.8 }}>
                    <p>
                        BelleFlamme est née de la passion pour l'art de la parfumerie fine. Notre mission est de rendre le luxe accessible sans compromettre la qualité.
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1590736704228-a44730623d0c?q=80&w=2070&auto=format&fit=crop"
                        alt="Perfume Creation"
                        style={{ width: '100%', height: '500px', objectFit: 'cover', margin: '2rem 0' }}
                    />
                    <p>
                        Nous sélectionnons méticuleusement les meilleures essences pour créer des inspirations de parfums iconiques, tout en proposant des fragrances originales et des décants pour vous permettre d'explorer de nouveaux horizons olfactifs.
                    </p>
                    <div style={{ marginTop: '4rem', padding: '4rem', backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
                        <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Notre Vision</h2>
                        <p style={{ opacity: 0.7 }}>L'excellence, la transparence et l'innovation au service de votre sillage.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
