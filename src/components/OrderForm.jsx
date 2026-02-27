import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const OrderForm = ({ product, variation }) => {
    const { i18n } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        quantity: 1
    });

    const isAr = i18n.language === 'ar';

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Submitted:', { product, variation, ...formData });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    background: '#F8FAF8',
                    borderRadius: 'var(--radius)',
                    border: '1px solid #E6EEE6',
                    marginTop: '2rem'
                }}
            >
                <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#E6F4EA',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: '#1E7E34'
                }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 style={{ color: '#1A1A1A', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                    {isAr ? 'تم استلام طلبك!' : 'Merci pour votre commande !'}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {isAr ? 'سنتصل بك قريباً لتأكيد التفاصيل.' : 'Nous vous contacterons bientôt pour confirmer les détails.'}
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                    style={{ marginTop: '2rem', width: '100%' }}
                >
                    {isAr ? 'طلب جديد' : 'Nouvelle commande'}
                </button>
            </motion.div>
        );
    }

    return (
        <div style={{
            marginTop: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-color)'
        }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ gridColumn: 'span 2' }}>
                        <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {isAr ? 'الاسم الكامل' : 'Nom Complet'}
                        </label>
                        <input
                            type="text"
                            required
                            placeholder={isAr ? 'أدخل اسمك...' : 'Votre nom...'}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-color)',
                                backgroundColor: '#FAFAFA',
                                fontSize: '1rem'
                            }}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {isAr ? 'رقم الهاتف' : 'Téléphone'}
                        </label>
                        <input
                            type="tel"
                            required
                            placeholder="05XX XX XX XX"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-color)',
                                backgroundColor: '#FAFAFA',
                                fontSize: '1rem'
                            }}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {isAr ? 'الكمية' : 'Quantité'}
                        </label>
                        <input
                            type="number"
                            min="1"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-color)',
                                backgroundColor: '#FAFAFA',
                                fontSize: '1rem'
                            }}
                            value={formData.quantity}
                            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                        />
                    </div>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {isAr ? 'عنوان التسليم' : 'Adresse de livraison'}
                    </label>
                    <textarea
                        required
                        placeholder={isAr ? 'أدخل عنوانك بالتفصيل (الولاية، المدينة...)' : 'Votre adresse complète...'}
                        rows="3"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                            backgroundColor: '#FAFAFA',
                            fontSize: '1rem',
                            lineHeight: 1.5,
                            resize: 'none'
                        }}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-black" style={{
                    marginTop: '0.5rem',
                    width: '100%',
                    padding: '1.25rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '50px'
                }}>
                    {isAr ? 'تأكيد الطلب الآن' : 'Commander Maintenant'}
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
