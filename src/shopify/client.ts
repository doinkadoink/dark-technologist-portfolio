import Client from 'shopify-buy';

export interface ShopifyConfig {
  domain: string;
  storefrontAccessToken: string;
  apiVersion?: string;
}

let shopifyClient: any = null;

export const initializeShopifyClient = (config: ShopifyConfig) => {
  if (!config.domain || !config.storefrontAccessToken) {
    console.error('Shopify configuration is missing. Please set REACT_APP_SHOPIFY_STORE_DOMAIN and REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN');
    return null;
  }

  try {
    shopifyClient = Client.buildClient({
      domain: config.domain,
      storefrontAccessToken: config.storefrontAccessToken,
      apiVersion: config.apiVersion || '2024-01',
    });
    
    console.log('Shopify client initialized successfully');
    return shopifyClient;
  } catch (error) {
    console.error('Error initializing Shopify client:', error);
    return null;
  }
};

export const getShopifyClient = () => {
  if (!shopifyClient) {
    const config: ShopifyConfig = {
      domain: process.env.REACT_APP_SHOPIFY_STORE_DOMAIN || '',
      storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
      apiVersion: process.env.REACT_APP_SHOPIFY_API_VERSION || '2024-01',
    };
    
    return initializeShopifyClient(config);
  }
  
  return shopifyClient;
};

export const fetchProducts = async (limit: number = 10) => {
  const client = getShopifyClient();
  
  if (!client) {
    console.warn('Shopify client not available');
    return [];
  }

  try {
    const products = await client.product.fetchAll(limit);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchCollections = async () => {
  const client = getShopifyClient();
  
  if (!client) {
    console.warn('Shopify client not available');
    return [];
  }

  try {
    const collections = await client.collection.fetchAllWithProducts();
    return collections;
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
};

export const createCheckout = async () => {
  const client = getShopifyClient();
  
  if (!client) {
    console.warn('Shopify client not available');
    return null;
  }

  try {
    const checkout = await client.checkout.create();
    return checkout;
  } catch (error) {
    console.error('Error creating checkout:', error);
    return null;
  }
};

export const addLineItemToCheckout = async (checkoutId: string, lineItems: any[]) => {
  const client = getShopifyClient();
  
  if (!client) {
    console.warn('Shopify client not available');
    return null;
  }

  try {
    const checkout = await client.checkout.addLineItems(checkoutId, lineItems);
    return checkout;
  } catch (error) {
    console.error('Error adding items to checkout:', error);
    return null;
  }
};

export default {
  initializeShopifyClient,
  getShopifyClient,
  fetchProducts,
  fetchCollections,
  createCheckout,
  addLineItemToCheckout,
};
