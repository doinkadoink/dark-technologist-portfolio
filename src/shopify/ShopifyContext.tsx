import React, { createContext, useContext, useEffect, useState } from 'react';
import { getShopifyClient, createCheckout } from './client';

interface ShopifyContextType {
  client: any;
  checkout: any;
  isLoading: boolean;
  addToCart: (variantId: string, quantity: number) => Promise<void>;
  removeFromCart: (lineItemId: string) => Promise<void>;
  updateCartItemQuantity: (lineItemId: string, quantity: number) => Promise<void>;
}

const ShopifyContext = createContext<ShopifyContextType | undefined>(undefined);

export const useShopify = () => {
  const context = useContext(ShopifyContext);
  if (!context) {
    throw new Error('useShopify must be used within a ShopifyProvider');
  }
  return context;
};

export const ShopifyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [client, setClient] = useState<any>(null);
  const [checkout, setCheckout] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initShopify = async () => {
      try {
        const shopifyClient = getShopifyClient();
        setClient(shopifyClient);

        if (shopifyClient) {
          const existingCheckoutId = localStorage.getItem('shopify_checkout_id');
          
          let checkoutObj;
          if (existingCheckoutId) {
            try {
              checkoutObj = await shopifyClient.checkout.fetch(existingCheckoutId);
              if (checkoutObj.completedAt) {
                checkoutObj = await createCheckout();
                localStorage.setItem('shopify_checkout_id', checkoutObj.id);
              }
            } catch (error) {
              checkoutObj = await createCheckout();
              localStorage.setItem('shopify_checkout_id', checkoutObj.id);
            }
          } else {
            checkoutObj = await createCheckout();
            if (checkoutObj) {
              localStorage.setItem('shopify_checkout_id', checkoutObj.id);
            }
          }
          
          setCheckout(checkoutObj);
        }
      } catch (error) {
        console.error('Error initializing Shopify:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initShopify();
  }, []);

  const addToCart = async (variantId: string, quantity: number = 1) => {
    if (!client || !checkout) {
      console.warn('Shopify not initialized');
      return;
    }

    try {
      const lineItemsToAdd = [
        {
          variantId,
          quantity,
        },
      ];

      const updatedCheckout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);
      setCheckout(updatedCheckout);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (lineItemId: string) => {
    if (!client || !checkout) {
      console.warn('Shopify not initialized');
      return;
    }

    try {
      const updatedCheckout = await client.checkout.removeLineItems(checkout.id, [lineItemId]);
      setCheckout(updatedCheckout);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateCartItemQuantity = async (lineItemId: string, quantity: number) => {
    if (!client || !checkout) {
      console.warn('Shopify not initialized');
      return;
    }

    try {
      const lineItemsToUpdate = [
        {
          id: lineItemId,
          quantity,
        },
      ];

      const updatedCheckout = await client.checkout.updateLineItems(checkout.id, lineItemsToUpdate);
      setCheckout(updatedCheckout);
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  return (
    <ShopifyContext.Provider
      value={{
        client,
        checkout,
        isLoading,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </ShopifyContext.Provider>
  );
};

export default ShopifyProvider;
