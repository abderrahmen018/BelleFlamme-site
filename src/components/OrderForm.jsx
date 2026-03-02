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
                    borderRadius: '12px',
                    border: '1px solid #BBF7D0',
                    marginTop: '2rem',
                    boxShadow: '0 0 20px rgba(0,0,0,0.12)'
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

    const inputStyle = {
        width: '100%',
        padding: '0.85rem 1rem 0.85rem 2.75rem',
        borderRadius: '8px',
        border: '1.5px solid #D1D5DB',
        backgroundColor: '#fff',
        fontSize: '0.97rem',
        color: '#111',
        outline: 'none',
        transition: 'border-color 0.2s',
        boxSizing: 'border-box',
    };

    const iconStyle = {
        position: 'absolute',
        left: '0.85rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#9CA3AF',
        pointerEvents: 'none',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.45rem',
        fontSize: '0.9rem',
        fontWeight: 700,
        color: '#111',
    };

    const redAccent = { color: '#E53E3E' };

    return (
        <>
            {/* OUTER CARD BOX */}
            <div style={{
                background: '#fff',
                borderRadius: '14px',
                boxShadow: '0 0 24px rgba(0,0,0,0.13)',
                padding: '1.5rem',
                maxWidth: '420px',
                margin: '0 auto',
            }}>

                {/* PRODUCT SUMMARY ROW */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    paddingBottom: '1rem',
                    borderBottom: '1.5px solid #E5E7EB',
                    marginBottom: '1rem',
                }}>
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                        <div style={{
                            width: '46px',
                            height: '56px',
                            borderRadius: '6px',
                            overflow: 'hidden',
                            border: '1px solid #E5E7EB',
                            background: '#F9FAFB',
                        }}>
                            <img
                                src={product.images?.[0]}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '-8px',
                            left: '-8px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#6B7280',
                            color: '#fff',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {formData.quantity}
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.3, color: '#111' }}>
                            {product.brand} {product.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#6B7280', marginTop: '2px' }}>
                            {selectedVariant}
                        </div>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.97rem', color: '#111', flexShrink: 0 }}>
                        DA {subtotal.toLocaleString()}
                    </div>
                </div>

                {/* PRICE SUMMARY BOX */}
                <div style={{
                    background: '#F3F4F6',
                    borderRadius: '8px',
                    padding: '0.85rem 1.1rem',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span style={{ ...redAccent, fontWeight: 600 }}>{isAr ? 'المجموع الفرعي' : 'Sous-total'}</span>
                        <span style={{ fontWeight: 600 }}>DA {subtotal.toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span style={{ ...redAccent, fontWeight: 600 }}>{isAr ? 'التوصيل' : 'Livraison'}</span>
                        <span style={{ fontWeight: 600 }}>
                            {shippingFee > 0
                                ? `DA ${shippingFee.toLocaleString()}`
                                : `--`}
                        </span>
                    </div>
                    <div style={{ height: '1px', background: '#D1D5DB', margin: '0.2rem 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem' }}>
                        <span style={{ fontWeight: 800 }}>Total</span>
                        <span style={{ fontWeight: 800 }}>DA {totalPrice.toLocaleString()}</span>
                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                    {/* VARIANT SELECTION */}
                    {product.volumes.length > 1 && (
                        <div>
                            <label style={labelStyle}>
                                {isAr ? 'اختر الحجم' : 'Choisir le format'} <span style={redAccent}>*</span>
                            </label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
                                {product.volumes.map(vol => (
                                    <button
                                        key={vol.size}
                                        type="button"
                                        onClick={() => setSelectedVariant(vol.size)}
                                        style={{
                                            padding: '0.65rem',
                                            borderRadius: '8px',
                                            border: '2px solid',
                                            borderColor: selectedVariant === vol.size ? '#111' : '#D1D5DB',
                                            backgroundColor: selectedVariant === vol.size ? '#111' : '#fff',
                                            color: selectedVariant === vol.size ? '#fff' : '#111',
                                            fontWeight: 700,
                                            fontSize: '0.88rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '0.15rem',
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <Package size={15} />
                                            {vol.size}
                                        </div>
                                        <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                                            {vol.price.toLocaleString()} {product.currency}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* NOM COMPLET */}
                    <div>
                        <label style={labelStyle}>
                            {isAr ? 'الاسم الكامل' : 'Nom Complet'} <span style={redAccent}>*</span>
                        </label>
                        <div style={{ position: 'relative' }}>
                            <User size={16} style={iconStyle} />
                            <input
                                type="text"
                                required
                                placeholder={isAr ? 'الاسم الكامل' : 'Nom Complet'}
                                style={inputStyle}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* TÉLÉPHONE */}
                    <div>
                        <label style={labelStyle}>
                            {isAr ? 'الهاتف' : 'Téléphone'} <span style={redAccent}>*</span>
                        </label>
                        <div style={{ position: 'relative' }}>
                            <Phone size={16} style={iconStyle} />
                            <input
                                type="tel"
                                required
                                placeholder={isAr ? 'رقم الهاتف' : 'Téléphone'}
                                style={inputStyle}
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* WILAYA + COMMUNE */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                        <div>
                            <label style={labelStyle}>
                                {isAr ? 'الولاية' : 'Wilaya الولاية'} <span style={redAccent}>*</span>
                            </label>
                            <div style={{ position: 'relative' }}>
                                <MapPin size={16} style={iconStyle} />
                                <select
                                    required
                                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', paddingRight: '2rem' }}
                                    value={formData.wilaya}
                                    onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
                                >
                                    <option value="">{isAr ? 'الولاية' : 'Wilaya الولاية'}</option>
                                    {WILAYAS.map(w => (
                                        <option key={w.name} value={w.name}>{w.id} - {w.name}</option>
                                    ))}
                                </select>
                                <div style={{
                                    position: 'absolute', right: '0.75rem', top: '50%',
                                    transform: 'translateY(-50%)', pointerEvents: 'none',
                                    color: '#6B7280', fontSize: '0.7rem'
                                }}>▼</div>
                            </div>
                        </div>
                        <div>
                            <label style={labelStyle}>
                                {isAr ? 'البلدية' : 'Commune/Ville'}
                            </label>
                            <input
                                type="text"
                                placeholder={isAr ? 'البلدية/المدينة' : 'Commune/Ville'}
                                style={{ ...inputStyle, paddingLeft: '1rem' }}
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* QUANTITY ROW */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.4rem 0',
                    }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{isAr ? 'الكمية' : 'Quantité'}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <button type="button"
                                onClick={() => setFormData(f => ({ ...f, quantity: Math.max(1, f.quantity - 1) }))}
                                style={{
                                    width: '28px', height: '28px', border: '1.5px solid #D1D5DB',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontWeight: 700, cursor: 'pointer', background: '#fff',
                                    fontSize: '1rem',
                                }}>−</button>
                            <span style={{ fontWeight: 700, minWidth: '20px', textAlign: 'center' }}>{formData.quantity}</span>
                            <button type="button"
                                onClick={() => setFormData(f => ({ ...f, quantity: f.quantity + 1 }))}
                                style={{
                                    width: '28px', height: '28px', border: '1.5px solid #D1D5DB',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontWeight: 700, cursor: 'pointer', background: '#fff',
                                    fontSize: '1rem',
                                }}>+</button>
                        </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        className="order-submit-btn"
                        style={{
                            marginTop: '0.5rem',
                            width: '100%',
                            padding: '1.1rem',
                            fontSize: '1rem',
                            fontWeight: 800,
                            borderRadius: '8px',
                            background: '#E53E3E',
                            color: '#fff',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.75rem',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#C53030'}
                        onMouseLeave={e => e.currentTarget.style.background = '#E53E3E'}
                    >
                        <ShoppingCart size={18} />
                        {isAr
                            ? `أتم طلبك - DA ${totalPrice.toLocaleString()}`
                            : `Terminez votre achat -  DA ${totalPrice.toLocaleString()}`}
                    </button>

                    {/* COD badge */}
                    <div style={{
                        textAlign: 'center', color: '#6B7280', fontSize: '0.82rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'
                    }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#10B981', borderRadius: '50%' }} />
                        {isAr ? 'الدفع عند الاستلام (COD)' : 'Paiement à la livraison (Cash on Delivery)'}
                    </div>
                </form>
            </div>

            <style>{`
                @media (max-width: 600px) {
                    .order-submit-btn {
                        font-size: 0.9rem !important;
                        padding: 1rem !important;
                    }
                }
            `}</style>
        </>
    );
};

export default OrderForm;
