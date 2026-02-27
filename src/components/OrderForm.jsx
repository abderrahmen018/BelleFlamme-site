import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { User, Phone, MapPin, ShoppingCart, CheckCircle, Package } from 'lucide-react';
import { WILAYAS, SHIPPING_FEES } from '../data/shipping';



const OrderForm = ({ product }) => {
    const { i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    const [submitted, setSubmitted] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState(product?.volumes?.[0]?.size || '');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        wilaya: '',
        city: '',
        quantity: 1
    });

    const variantData = product.volumes.find(v => v.size === selectedVariant) || product.volumes[0];
    const shippingFee = SHIPPING_FEES[formData.wilaya] || (formData.wilaya ? SHIPPING_FEES['default'] : 0);
    const subtotal = variantData.price * formData.quantity;
    const totalPrice = subtotal + shippingFee;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Submitted:', {
            product,
            variant: selectedVariant,
            price: variantData.price,
            subtotal,
            shipping: shippingFee,
            total: totalPrice,
            ...formData
        });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    background: '#F0FDF4',
                    borderRadius: 'var(--radius)',
                    border: '1px solid #BBF7D0',
                    marginTop: '2rem'
                }}
            >
                <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#4ADE80',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'white'
                }}>
                    <CheckCircle size={32} />
                </div>
                <h3 style={{ color: '#166534', marginBottom: '0.75rem', fontSize: '1.5rem', fontWeight: 700 }}>
                    {isAr ? 'تم استلام طلبك!' : 'Commande Réussie !'}
                </h3>
                <p style={{ color: '#166534', fontSize: '1rem', lineHeight: 1.5 }}>
                    {isAr ? 'شكراً لثقتكم. سنتصل بك قريباً لتأكيد الطلب.' : 'Merci pour votre confiance. Notre équipe vous contactera sous peu.'}
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-black"
                    style={{ marginTop: '2rem', width: '100%', borderRadius: '50px' }}
                >
                    {isAr ? 'إجراء طلب آخر' : 'Nouvelle commande'}
                </button>
            </motion.div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* SHIPPING INFO */}
            <div>
                <label style={{ display: 'block', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {isAr ? 'معلومات الشحن' : 'Informations de livraison'}
                </label>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Name */}
                    <div style={{ position: 'relative' }}>
                        <User size={18} style={{ position: 'absolute', right: isAr ? 'unset' : '1rem', left: isAr ? '1rem' : 'unset', top: '50%', transform: 'translateY(-50%)', color: 'var(--medium-gray)' }} />
                        <input
                            type="text"
                            required
                            placeholder={isAr ? 'الاسم الكامل *' : 'Nom Complet *'}
                            style={{
                                width: '100%',
                                padding: '1.1rem 3rem',
                                paddingRight: isAr ? '1.2rem' : '3rem',
                                paddingLeft: isAr ? '3rem' : '1.2rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-color)',
                                backgroundColor: '#F9F9FB',
                                fontSize: '1rem',
                                transition: 'border-color 0.2s ease'
                            }}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    {/* Phone */}
                    <div style={{ position: 'relative' }}>
                        <Phone size={18} style={{ position: 'absolute', right: isAr ? 'unset' : '1rem', left: isAr ? '1rem' : 'unset', top: '50%', transform: 'translateY(-50%)', color: 'var(--medium-gray)' }} />
                        <input
                            type="tel"
                            required
                            placeholder={isAr ? 'رقم الهاتف *' : 'Numéro de téléphone *'}
                            style={{
                                width: '100%',
                                padding: '1.1rem 3rem',
                                paddingRight: isAr ? '1.2rem' : '3rem',
                                paddingLeft: isAr ? '3rem' : '1.2rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-color)',
                                backgroundColor: '#F9F9FB',
                                fontSize: '1rem'
                            }}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    {/* Location Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ position: 'relative' }}>
                            <MapPin size={18} style={{ position: 'absolute', right: isAr ? 'unset' : '1rem', left: isAr ? '1rem' : 'unset', top: '50%', transform: 'translateY(-50%)', color: 'var(--medium-gray)', pointerEvents: 'none' }} />
                            <select
                                required
                                style={{
                                    width: '100%',
                                    padding: '1.1rem 3rem',
                                    paddingRight: isAr ? '1.2rem' : '3rem',
                                    paddingLeft: isAr ? '3rem' : '1.2rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--border-color)',
                                    backgroundColor: '#F9F9FB',
                                    fontSize: '0.95rem',
                                    appearance: 'none',
                                    cursor: 'pointer'
                                }}
                                value={formData.wilaya}
                                onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
                            >
                                <option value="">{isAr ? 'الولاية' : 'Wilaya'}</option>
                                {WILAYAS.map(w => (
                                    <option key={w.name} value={w.name}>{w.id} - {w.name}</option>
                                ))}
                            </select>
                        </div>
                        <input
                            type="text"
                            required
                            placeholder={isAr ? 'البلدية/المدينة' : 'Commune/Ville'}
                            style={{
                                width: '100%',
                                padding: '1.1rem 1.5rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-color)',
                                backgroundColor: '#F9F9FB',
                                fontSize: '0.95rem'
                            }}
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                    </div>

                    {/* VARIANT SELECTION (Moved here) */}
                    <div style={{ marginTop: '0.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {isAr ? 'اختر الحجم' : 'Choisir le format'}
                        </label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                            {product.volumes.map(vol => (
                                <button
                                    key={vol.size}
                                    type="button"
                                    onClick={() => setSelectedVariant(vol.size)}
                                    style={{
                                        padding: '1rem',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '2px solid',
                                        borderColor: selectedVariant === vol.size ? 'var(--black)' : 'var(--border-color)',
                                        backgroundColor: selectedVariant === vol.size ? 'var(--black)' : 'var(--white)',
                                        color: selectedVariant === vol.size ? 'var(--white)' : 'var(--black)',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.25rem',
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Package size={18} />
                                        {vol.size}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                                        {vol.price.toLocaleString()} {product.currency}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Summary */}
                    <div style={{
                        marginTop: '1rem',
                        padding: '1.5rem',
                        background: 'var(--light-gray)',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        {/* Quantity Row */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{isAr ? 'الكمية' : 'Quantité'}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <button type="button" onClick={() => setFormData(f => ({ ...f, quantity: Math.max(1, f.quantity - 1) }))} style={{ width: '30px', height: '30px', border: '1px solid var(--border-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
                                <span style={{ fontWeight: 700 }}>{formData.quantity}</span>
                                <button type="button" onClick={() => setFormData(f => ({ ...f, quantity: f.quantity + 1 }))} style={{ width: '30px', height: '30px', border: '1px solid var(--border-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                            </div>
                        </div>

                        <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>

                        {/* Subtotal */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>{isAr ? 'سعر المنتوج' : 'Prix du produit'}</span>
                            <span style={{ fontWeight: 600 }}>{subtotal.toLocaleString()} {product.currency}</span>
                        </div>

                        {/* Shipping */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>{isAr ? 'سعر التوصيل' : 'Frais de livraison'}</span>
                            <span style={{ fontWeight: 600, color: shippingFee === 0 ? 'var(--text-secondary)' : 'inherit' }}>
                                {shippingFee > 0 ? `${shippingFee.toLocaleString()} ${product.currency}` : (isAr ? 'اختر الولاية' : 'Choisir Wilaya')}
                            </span>
                        </div>

                        <div style={{ height: '1px', backgroundColor: 'var(--black)', opacity: 0.1 }}></div>

                        {/* Total */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: 700 }}>Total</span>
                            <span style={{ fontWeight: 800, fontSize: '1.4rem' }}>{totalPrice.toLocaleString()} {product.currency}</span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-black" style={{
                        marginTop: '1rem',
                        width: '100%',
                        padding: '1.4rem',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        {isAr ? 'تأكيد الطلب الآن' : 'Confirmer ma Commande'}
                        <ShoppingCart size={20} />
                    </button>

                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#10B981', borderRadius: '50%' }}></div>
                        {isAr ? 'الدفع عند الاستلام (COD)' : 'Paiement à la livraison (Cash on Delivery)'}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;
