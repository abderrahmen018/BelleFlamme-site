import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const questions = [
    {
        id: 'personality',
        question_fr: "Comment décririez-vous votre personnalité ?",
        question_en: "How would you describe your personality?",
        question_ar: "كيف تصف شخصيتك؟",
        options: [
            { id: 'bold', fr: 'Audacieux & Intense', en: 'Bold & Intense', ar: 'جرئ و مكثف' },
            { id: 'elegant', fr: 'Élégant & Classique', en: 'Elegant & Classic', ar: 'أنيق و كلاسيكي' },
            { id: 'fresh', fr: 'Frais & Énergique', en: 'Fresh & Energetic', ar: 'متجدد و حيوي' },
            { id: 'mysterious', fr: 'Mystérieux & Sensuel', en: 'Mysterious & Sensual', ar: 'غامض و حسي' }
        ]
    },
    {
        id: 'occasion',
        question_fr: "Pour quelle occasion cherchez-vous un parfum ?",
        question_en: "For which occasion are you looking for a perfume?",
        question_ar: "لأي مناسبة تبحث عن عطر؟",
        options: [
            { id: 'daily', fr: 'Usage Quotidien', en: 'Daily Wear', ar: 'استخدام يومي' },
            { id: 'evening', fr: 'Soirée Spéciale', en: 'Special Evening', ar: 'سهرة خاصة' },
            { id: 'office', fr: 'Travail / Bureau', en: 'Work / Office', ar: 'العمل / المكتب' },
            { id: 'sport', fr: 'Sport / Extérieur', en: 'Sport / Outdoor', ar: 'رياضة / خارج المنزل' }
        ]
    },
    {
        id: 'preference',
        question_fr: "Quelles notes préférez-vous ?",
        question_en: "Which notes do you prefer?",
        question_ar: "أي روائح تفضل؟",
        options: [
            { id: 'woody', fr: 'Boisées & Épicées', en: 'Woody & Spicy', ar: 'خشبي و توابل' },
            { id: 'floral', fr: 'Florales & Douces', en: 'Floral & Sweet', ar: 'زهري و حلو' },
            { id: 'citrus', fr: 'Agrumes & Fraîcheur', en: 'Citrus & Fresh', ar: 'حمضيات و انتعاش' },
            { id: 'oriental', fr: 'Orientales & Ambrées', en: 'Oriental & Ambery', ar: 'شرقي و عنبري' }
        ]
    }
];

const ScentPicker = () => {
    const { i18n } = useTranslation();
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnswer = (questionId, optionId) => {
        const newAnswers = { ...answers, [questionId]: optionId };
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            handleAnalysis();
        }
    };

    const handleAnalysis = () => {
        setIsAnalyzing(true);
        // Simulate AI analysis
        setTimeout(() => {
            setIsAnalyzing(false);
            setResult({
                name: "Bleu de Chanel",
                match: "98%",
                reason_fr: "Votre préférence pour les notes boisées et votre personnalité élégante correspondent parfaitement à l'équilibre de cette fragrance.",
                reason_en: "Your preference for woody notes and your elegant personality perfectly match the balance of this fragrance.",
                reason_ar: "تفضيلك للروائح الخشبية وشخصيتك الأنيقة تتطابقان تمامًا مع توازن هذا العطر."
            });
        }, 2500);
    };

    const reset = () => {
        setStep(0);
        setAnswers({});
        setResult(null);
    };

    return (
        <div className="container section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                <AnimatePresence mode="wait">
                    {!result && !isAnalyzing && (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%' }}>
                                    <Sparkles size={32} />
                                </div>
                            </div>
                            <h1 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Scent Finder AI</h1>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem' }}>Étape {step + 1} sur {questions.length}</p>

                            <div style={{ textAlign: i18n.language === 'ar' ? 'right' : 'left' }}>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 500 }}>
                                    {questions[step][`question_${i18n.language}`]}
                                </h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {questions[step].options.map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => handleAnswer(questions[step].id, opt.id)}
                                            className="btn btn-outline"
                                            style={{
                                                justifyContent: 'space-between',
                                                padding: '1.5rem 2rem',
                                                textTransform: 'none',
                                                textAlign: i18n.language === 'ar' ? 'right' : 'left'
                                            }}
                                        >
                                            {opt[i18n.language]}
                                            <ArrowRight size={18} style={{ transform: i18n.language === 'ar' ? 'rotate(180deg)' : 'none' }} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {isAnalyzing && (
                        <motion.div
                            key="analyzing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            >
                                <Sparkles size={64} opacity={0.3} />
                            </motion.div>
                            <p style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Analyse de vos préférences...</p>
                        </motion.div>
                    )}

                    {result && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Félicitations !</p>
                                <h2 className="font-serif" style={{ fontSize: '3rem' }}>Match : {result.match}</h2>
                            </div>

                            <div style={{ padding: '3rem', backgroundColor: 'var(--bg-secondary)', width: '100%', textAlign: 'center', borderRadius: 'var(--radius)' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{result.name}</h3>
                                <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}>{result[`reason_${i18n.language}`]}</p>
                                <button className="btn btn-black" style={{ marginTop: '2rem' }}>Voir le produit</button>
                            </div>

                            <button onClick={reset} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.5, fontSize: '0.875rem' }}>
                                <RotateCcw size={16} /> Recommencer le test
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ScentPicker;
