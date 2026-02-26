import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OrderForm = ({ product, variation }) => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        quantity: 1
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Submitted:', { product, variation, ...formData });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    padding: '2rem',
                    textAlign: 'center',
                    background: '#dcfce7',
                    borderRadius: '1rem',
                    border: '1px solid #86efac'
                }}
            >
                <h3 style={{ color: '#166534', marginBottom: '0.5rem' }}>Merci pour votre commande !</h3>
                <p style={{ color: '#166534' }}>Nous vous contacterons bientôt pour confirmer les détails.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                    style={{ marginTop: '1rem' }}
                >
                    Nouvelle commande
                </button>
            </motion.div>
        );
    }

    return (
        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Commander ce produit</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Nom Complet</label>
                    <input
                        type="text"
                        required
                        className="input-field"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Numéro de téléphone</label>
                    <input
                        type="tel"
                        required
                        className="input-field"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Adresse de livraison</label>
                    <textarea
                        required
                        className="input-field"
                        rows="3"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    ></textarea>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Quantité</label>
                    <input
                        type="number"
                        min="1"
                        required
                        className="input-field"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                    />
                </div>
                <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                    Confirmer la commande
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
