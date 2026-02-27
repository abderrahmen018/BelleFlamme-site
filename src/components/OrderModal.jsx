import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OrderModal = ({ product, isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        wilaya: '',
        commune: '',
        deliveryType: 'home'
    });

    if (!product) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend or WhatsApp
        console.log('Order Submitted:', { product, ...formData });
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const wilayas = [
        "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira",
        "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda",
        "Skikda", "Sidi Bel Abbès", "Annabi", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara",
        "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt",
        "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        style={{
                            position: 'relative',
                            backgroundColor: 'var(--white)',
                            width: '100%',
                            maxWidth: '500px',
                            borderRadius: 'var(--radius)',
                            padding: '2rem',
                            boxShadow: 'var(--shadow-lg)',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--medium-gray)' }}
                        >
                            <X size={24} />
                        </button>

                        {isSubmitted ? (
                            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                <CheckCircle size={64} color="#10B981" style={{ margin: '0 auto 1.5rem' }} />
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{i18n.language === 'ar' ? 'تم استلام طلبكم!' : 'Order Received!'}</h2>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {i18n.language === 'ar' ? 'سنتصل بكم قريبا لتأكيده.' : 'We will contact you soon to confirm.'}
                                </p>
                            </div>
                        ) : (
                            <>
                                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                                    <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{product.name}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{product.brand}</p>
                                        <p style={{ fontWeight: 700, marginTop: '0.25rem' }}>{product.volumes[0].price} {product.currency}</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{i18n.language === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label>
                                        <input
                                            required
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder={i18n.language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                                            style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', width: '100%' }}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{i18n.language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="0XXXXXXXXX"
                                            style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', width: '100%' }}
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{i18n.language === 'ar' ? 'الولاية' : 'Wilaya'}</label>
                                            <select
                                                required
                                                name="wilaya"
                                                value={formData.wilaya}
                                                onChange={handleChange}
                                                style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', width: '100%' }}
                                            >
                                                <option value="">{i18n.language === 'ar' ? 'اختر الولاية' : 'Select Wilaya'}</option>
                                                {wilayas.map(w => <option key={w} value={w}>{w}</option>)}
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{i18n.language === 'ar' ? 'البلدية' : 'Commune'}</label>
                                            <input
                                                required
                                                type="text"
                                                name="commune"
                                                value={formData.commune}
                                                onChange={handleChange}
                                                placeholder={i18n.language === 'ar' ? 'البلدية' : 'Commune'}
                                                style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', width: '100%' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                                        <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{i18n.language === 'ar' ? 'طريقة الاستلام' : 'Delivery Method'}</label>
                                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                                <input type="radio" name="deliveryType" value="home" checked={formData.deliveryType === 'home'} onChange={handleChange} />
                                                <span style={{ fontSize: '0.875rem' }}>{i18n.language === 'ar' ? 'توصيل للمنزل' : 'Home Delivery'}</span>
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                                <input type="radio" name="deliveryType" value="office" checked={formData.deliveryType === 'office'} onChange={handleChange} />
                                                <span style={{ fontSize: '0.875rem' }}>{i18n.language === 'ar' ? 'توصيل للمكتب' : 'Office'}</span>
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-black"
                                        style={{ width: '100%', marginTop: '1rem', borderRadius: 'var(--radius-sm)' }}
                                    >
                                        {i18n.language === 'ar' ? 'تأكيد الطلب' : 'Confirm Order'}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default OrderModal;
