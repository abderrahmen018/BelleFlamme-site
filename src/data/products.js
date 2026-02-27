export const products = [
  {
    id: 1,
    name: "Bleu de Chanel",
    brand: "Chanel",
    type: "original",
    category: "originals",
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
    currency: "DA",
    description: "Une inspiration fidèle du célèbre Creed Aventus avec des notes d'ananas et de bouleau.",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800",
      "https://images.unsplash.com/photo-1557170334-a7c3a4f22038?q=80&w=800"
    ],
    volumes: [
      { size: "50ml", price: 4500 },
      { size: "100ml", price: 8000 }
    ]
  },
  {
    id: 3,
    name: "Sauvage Decant",
    brand: "Dior",
    type: "decant",
    category: "decants",
    currency: "DA",
    description: "Un échantillon de 5ml du parfum original Dior Sauvage, parfait pour tester.",
    images: [
      "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=800",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800"
    ],
    volumes: [
      { size: "5ml", price: 1200 },
      { size: "10ml", price: 2200 }
    ]
  },
  {
    id: 4,
    name: "Aventus",
    brand: "Creed",
    type: "original",
    category: "originals",
    currency: "DA",
    description: "Un échantillon de 5ml du parfum original Dior Sauvage, parfait pour tester.",
    images: [
      "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.9828.avif",
      "https://fimgs.net/mdimg/perfume-social-cards/fr-p_c_9828.jpeg"
    ],
    volumes: [
      { size: "100ml", price: 65000 },
      { size: "200ml", price: 95000 },
      { size: "300ml", price: 125000 },
      { size: "400ml", price: 155000 }
    ]
  }
];

export const categories = [
  { id: 'originals', name_fr: 'Originaux', name_en: 'Originals', name_ar: 'أصلي' },
  { id: 'dupes', name_fr: 'Inspirations', name_en: 'Inspirations', name_ar: 'مستوحى' },
  { id: 'decants', name_fr: 'Décants', name_en: 'Decants', name_ar: 'عينات' }
];

