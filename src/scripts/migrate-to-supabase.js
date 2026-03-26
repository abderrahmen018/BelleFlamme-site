import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { products } from '../data/products.js';

dotenv.config();

// Note: Using process.env because this runs in Node.js
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrate() {
  console.log('🚀 Starting migration to Supabase...');

  for (const product of products) {
    console.log(`📦 Migrating product: ${product.name} (${product.brand})`);

    // 1. Insert product
    const { data: insertedProduct, error: productError } = await supabase
      .from('products')
      .insert([
        {
          name: product.name,
          brand: product.brand,
          description: product.description,
          gender: product.gender,
          categories: [product.category], // On initialise avec la catégorie actuelle
          images: product.images,         // On prend tout le tableau d'images
        },
      ])
      .select()
      .single();

    if (productError) {
      console.error(`❌ Error inserting product ${product.name}:`, productError.message);
      continue;
    }

    // 2. Insert variants (volumes/sizes/prices)
    const variants = product.volumes.map((v) => ({
      product_id: insertedProduct.id,
      size_ml: parseInt(v.size.replace('ml', '')),
      price: v.price,
      old_price: v.oldPrice || null
      // stock supprimé selon vos instructions
    }));

    const { error: variantError } = await supabase
      .from('product_variants')
      .insert(variants);

    if (variantError) {
      console.error(`❌ Error inserting variants for ${product.name}:`, variantError.message);
    } else {
      console.log(`✅ ${product.name} migrated successfully with ${variants.length} variants.`);
    }
  }

  console.log('🏁 Migration completed!');
}

migrate().catch((err) => {
  console.error('💥 Fatal migration error:', err);
});
