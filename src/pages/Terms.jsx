import React from 'react';

const Terms = () => {
    return (
        <div className="container section-padding">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="font-serif" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Conditions Générales de Vente</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>1. Introduction</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Les présentes conditions générales de vente régissent l'ensemble des transactions effectuées sur le site BelleFlamme. Toute commande passée sur ce site implique l'adhésion entière et sans réserve du client à ces CGV.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2. Produits</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            BelleFlamme propose des parfums originaux, des inspirations (dupes) et des décants. Les caractéristiques essentielles des produits sont présentées sur chaque fiche produit.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>3. Livraison</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Nous livrons dans toute l'Algérie. Les délais de livraison varient selon votre wilaya. Les frais de livraison sont calculés lors du passage en caisse.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>4. Retours</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Pour des raisons d'hygiène, les produits ouverts ne peuvent être retournés. En cas de défaut de fabrication, veuillez nous contacter sous 48h.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
