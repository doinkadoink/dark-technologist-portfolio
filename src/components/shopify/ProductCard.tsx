import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  product: any;
  onAddToCart: (variantId: string, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (product.variants && product.variants.length > 0) {
      onAddToCart(product.variants[0].id, 1);
    }
  };

  const price = product.variants && product.variants.length > 0 
    ? product.variants[0].price 
    : '0.00';

  const imageUrl = product.images && product.images.length > 0 
    ? product.images[0].src 
    : 'https://via.placeholder.com/300x400?text=No+Image';

  return (
    <div className="shopify-product-card">
      <div className="shopify-product-image-container">
        <img 
          src={imageUrl} 
          alt={product.title} 
          className="shopify-product-image"
          loading="lazy"
        />
      </div>
      <div className="shopify-product-info">
        <h3 className="shopify-product-title">{product.title}</h3>
        <p className="shopify-product-description">
          {product.description ? 
            (product.description.length > 100 
              ? `${product.description.substring(0, 100)}...` 
              : product.description)
            : 'No description available'}
        </p>
        <div className="shopify-product-footer">
          <span className="shopify-product-price">${price}</span>
          <button 
            onClick={handleAddToCart}
            className="shopify-add-to-cart-btn"
            aria-label={`Add ${product.title} to cart`}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
