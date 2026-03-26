import { supabase } from '../lib/supabase';

export const productService = {
  /**
   * Récupère tous les produits avec leurs variations
   */
  async getAllProducts() {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_variants (*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error.message);
      throw error;
    }

    // Transformer les données pour qu'elles correspondent au format attendu par le frontend
    return data.map(product => ({
      ...product,
      // On re-mappe pour garder la compatibilité avec le code existant
      volumes: product.product_variants.map(v => ({
        size: `${v.size_ml}ml`,
        price: v.price,
        oldPrice: v.old_price
      }))
    }));
  },

  /**
   * Récupère un produit par son ID
   */
  async getProductById(id) {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_variants (*)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching product ${id}:`, error.message);
      throw error;
    }

    return {
      ...data,
      volumes: data.product_variants.map(v => ({
        size: `${v.size_ml}ml`,
        price: v.price,
        oldPrice: v.old_price
      }))
    };
  }
};
