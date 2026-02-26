import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        products: "Produits",
        about: "À propos",
        scentPicker: "Choisir mon parfum",
      },
      hero: {
        title: "L'Art de la Parfumerie Fine",
        subtitle: "Découvrez des inspirations d'exception, des dupes de luxe et des fragrances originales.",
        cta: "Découvrir la Collection"
      },
      categories: {
        title: "Nos Catégories",
        originals: "Parfums Originaux",
        dupes: "Inspirations (Dupes)",
        decants: "Décants"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        products: "Products",
        about: "About",
        scentPicker: "AI Scent Picker",
      },
      hero: {
        title: "The Art of Fine Perfumery",
        subtitle: "Discover exceptional inspirations, luxury dupes, and original fragrances.",
        cta: "Explore Collection"
      },
      categories: {
        title: "Our Categories",
        originals: "Original Perfumes",
        dupes: "Inspirations (Dupes)",
        decants: "Decants"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        products: "المنتجات",
        about: "عن الشركة",
        scentPicker: "اختر عطري بالذكاء الاصطناعي",
      },
      hero: {
        title: "فن العطور الفاخرة",
        subtitle: "اكتشف إلهامات استثنائية، بدائل فاخرة وعطور أصلية.",
        cta: "اكتشف المجموعة"
      },
      categories: {
        title: "تصنيفاتنا",
        originals: "عطور أصلية",
        dupes: "عطور مستوحاة",
        decants: "عينات"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
