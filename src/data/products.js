export const products = [
  {
    id: 1,
    name: "Bleu de Chanel",
    brand: "Chanel",
    type: "original",
    category: "originals",
    gender: "homme",
    isNew: false,
    currency: "DA",
    description: "Un parfum boisé-aromatique pour homme qui allie fraîcheur et intensité.",
    images: [
      "https://images.unsplash.com/photo-1541602240222-df4ed52cd370?q=80&w=800",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800"
    ],
    volumes: [
      { size: "50ml", price: 15000 },
      { size: "100ml", price: 26000 }
    ]
  },
  {
    id: 2,
    name: "Aventus Inspiration",
    brand: "BelleFlamme",
    type: "dupe",
    category: "dupes",
    gender: "homme",
    isNew: true,
    currency: "DA",
    description: "Une inspiration fidèle du célèbre Creed Aventus avec des notes d'ananas et de bouleau.",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800",
      "https://images.unsplash.com/photo-1557170334-a7c3a4f22038?q=80&w=800"
    ],
    volumes: [
      { size: "50ml", price: 4500, oldPrice: 6000 },
      { size: "100ml", price: 8000, oldPrice: 10000 }
    ]
  },
  {
    id: 3,
    name: "Libre Decant",
    brand: "YSL",
    type: "decant",
    category: "decants",
    gender: "femme",
    isNew: false,
    currency: "DA",
    description: "Un échantillon de 5ml du parfum original Yves Saint Laurent Libre, parfait pour tester.",
    images: [
      "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=800",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800"
    ],
    volumes: [
      { size: "5ml", price: 1500 },
      { size: "10ml", price: 2800 }
    ]
  },
  {
    id: 4,
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    type: "original",
    category: "originals",
    gender: "mixte",
    isNew: true,
    currency: "DA",
    description: "Un sillage boisé ambré lumineux et racé.",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800",
      "https://images.unsplash.com/photo-1541602240222-df4ed52cd370?q=80&w=800"
    ],
    volumes: [
      { size: "70ml", price: 55000 }
    ]
  },
  {
    id: 5,
    name: "Good Girl",
    brand: "Carolina Herrera",
    type: "original",
    category: "originals",
    gender: "femme",
    isNew: false,
    currency: "DA",
    description: "Une fragrance puissante et sensuelle, audacieuse et hautement addictive.",
    images: [
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800"
    ],
    volumes: [
      { size: "80ml", price: 22000, oldPrice: 26000 }
    ]
  }
];

export const categories = [
  { id: 'originals', name_fr: 'Originaux', name_en: 'Originals', name_ar: 'أصلي' },
  { id: 'dupes', name_fr: 'Inspirations', name_en: 'Inspirations', name_ar: 'مستوحى' },
  { id: 'decants', name_fr: 'Décants', name_en: 'Decants', name_ar: 'عينات' }
];

