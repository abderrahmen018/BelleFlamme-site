export const products = [
  {
    id: 1,
    name: "Bleu de Chanel",
    brand: "Chanel",
    type: "original",
    category: "originals",
    price: 15000,
    currency: "DA",
    description: "Un parfum boisé-aromatique pour homme qui allie fraîcheur et intensité.",
    images: ["https://images.unsplash.com/photo-1541602240222-df4ed52cd370?q=80&w=800"],
    volumes: ["50ml", "100ml"]
  },
  {
    id: 2,
    name: "Aventus Inspiration",
    brand: "BelleFlamme",
    type: "dupe",
    category: "dupes",
    price: 4500,
    currency: "DA",
    description: "Une inspiration fidèle du célèbre Creed Aventus avec des notes d'ananas et de bouleau.",
    images: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800"],
    volumes: ["50ml", "100ml"]
  },
  {
    id: 3,
    name: "Sauvage Decant",
    brand: "Dior",
    type: "decant",
    category: "decants",
    price: 1200,
    currency: "DA",
    description: "Un échantillon de 5ml du parfum original Dior Sauvage, parfait pour tester.",
    images: ["https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=800"],
    volumes: ["5ml", "10ml"]
  }
];

export const categories = [
  { id: 'originals', name_fr: 'Originaux', name_en: 'Originals', name_ar: 'أصلي' },
  { id: 'dupes', name_fr: 'Inspirations', name_en: 'Inspirations', name_ar: 'مستوحى' },
  { id: 'decants', name_fr: 'Décants', name_en: 'Decants', name_ar: 'عينات' }
];

