import React from 'react';
import { useShopify } from '../../shopify/ShopifyContext';
import './CartIcon.css';

const CartIcon: React.FC = () => {
  const { checkout } = useShopify();

  const itemCount = checkout?.lineItems?.reduce((total: number, item: any) => {
    return total + item.quantity;
  }, 0) || 0;

  const handleCartClick = () => {
    if (checkout?.webUrl) {
      window.open(checkout.webUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      className="cart-icon-button"
      onClick={handleCartClick}
      aria-label={`Shopping cart with ${itemCount} items`}
      disabled={!checkout?.webUrl}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cart-icon-svg"
      >
        <path
          d="M9 2L7.17 4H3C2.45 4 2 4.45 2 5C2 5.55 2.45 6 3 6H4L7.6 13.59L6.25 16.04C5.52 17.37 6.48 19 8 19H19C19.55 19 20 18.55 20 18C20 17.45 19.55 17 19 17H8L9.1 15H15.55C16.3 15 16.96 14.59 17.3 13.97L20.88 7.48C21.25 6.82 20.77 6 20.01 6H6.21L5.27 4H9C9.55 4 10 3.55 10 3C10 2.45 9.55 2 9 2ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
          fill="currentColor"
        />
      </svg>
      {itemCount > 0 && (
        <span className="cart-icon-badge" aria-label={`${itemCount} items in cart`}>
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
