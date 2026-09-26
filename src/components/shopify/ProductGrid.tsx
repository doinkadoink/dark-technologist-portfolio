import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useShopify } from '../../shopify/ShopifyContext';
import { fetchProducts } from '../../shopify/client';
import './ProductGrid.css';

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart, isLoading: shopifyLoading } = useShopify();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await fetchProducts(12);
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        console.error('Error loading products:', err);
        setError('Failed to load products. Please check your Shopify configuration.');
      } finally {
        setLoading(false);
      }
    };

    if (!shopifyLoading) {
      loadProducts();
    }
  }, [shopifyLoading]);

  const handleAddToCart = async (variantId: string, quantity: number) => {
    try {
      await addToCart(variantId, quantity);
      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart');
    }
  };

  if (loading || shopifyLoading) {
    return (
      <div className="shopify-loading">
        <div className="shopify-spinner"></div>
        <p>Loading NightKind merch...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shopify-error">
        <p>{error}</p>
        <p className="shopify-error-subtitle">
          To connect your Shopify store, add your credentials to the environment variables.
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="shopify-empty">
        <p>🦇 No products available yet</p>
        <p className="shopify-empty-subtitle">
          NightKind merch coming soon! Follow us for updates.
        </p>
      </div>
    );
  }

  return (
    <div className="shopify-product-grid">
      {products.map((product: any) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
