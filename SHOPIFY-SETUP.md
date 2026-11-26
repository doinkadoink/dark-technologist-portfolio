# NightKind Collective - Shopify Integration Setup Guide

This guide explains how to connect your NightKind portfolio to your Shopify store.

## 🦇 Overview

The NightKind page now includes full Shopify e-commerce integration, allowing you to:
- Display products from your Shopify store
- Add items to cart
- Complete purchases through Shopify checkout
- Track cart items with a shopping cart icon

## 📋 Prerequisites

1. A Shopify store (you can create one at [shopify.com](https://www.shopify.com))
2. Products added to your Shopify store
3. Storefront API access credentials

## 🔑 Step 1: Get Your Shopify Credentials

### Option A: Create a Custom App (Recommended)

1. **Log in to your Shopify Admin**
   - Go to: `https://your-store-name.myshopify.com/admin`

2. **Navigate to Apps**
   - Click on **Settings** → **Apps and sales channels**
   - Click **Develop apps**
   - Click **Create an app**

3. **Name your app**
   - App name: `NightKind Portfolio Integration`
   - Click **Create app**

4. **Configure Storefront API**
   - Click on **Configure Storefront API scopes**
   - Select the following permissions:
     - `unauthenticated_read_product_listings`
     - `unauthenticated_read_product_inventory`
     - `unauthenticated_read_collection_listings`
     - `unauthenticated_write_checkouts`
     - `unauthenticated_read_checkouts`
   - Click **Save**

5. **Install the app**
   - Click **Install app**
   - Confirm the installation

6. **Get your Access Token**
   - Go to **API credentials**
   - Under **Storefront API**, you'll see:
     - **Storefront API access token** (copy this)
   - Your store domain is: `your-store-name.myshopify.com`

### Option B: Use Existing App

If you already have a Shopify app with Storefront API access:
1. Go to your app's API credentials
2. Copy the Storefront API access token
3. Note your store domain

## 🔧 Step 2: Configure Environment Variables

1. **Create a `.env` file in your project root**
   ```bash
   cp .env.example .env
   ```

2. **Add your Shopify credentials to `.env`**
   ```env
   REACT_APP_SHOPIFY_STORE_DOMAIN=nightkind-collective.myshopify.com
   REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_actual_token_here
   REACT_APP_SHOPIFY_API_VERSION=2024-01
   ```

3. **Replace the values:**
   - `nightkind-collective.myshopify.com` → Your actual store domain
   - `your_actual_token_here` → Your Storefront API access token

⚠️ **Important**: Never commit your `.env` file to Git! It's already in `.gitignore`.

## 🚀 Step 3: Update Your Application

### For React Development

1. **Wrap your app with ShopifyProvider**

   Update `src/App.tsx`:
   ```typescript
   import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import { ShopifyProvider } from './shopify/ShopifyContext';
   import NightKind from './components/NightKind';
   // ... other imports

   function App() {
     return (
       <ShopifyProvider>
         <Router>
           <Routes>
             <Route path="/nightkind" element={<NightKind />} />
             {/* ... other routes */}
           </Routes>
         </Router>
       </ShopifyProvider>
     );
   }

   export default App;
   ```

2. **Add routing for NightKind page**

   Update your router to include the NightKind route:
   ```typescript
   <Route path="/nightkind" element={<NightKind />} />
   ```

## 🧪 Step 4: Test Your Integration

1. **Start your development server**
   ```bash
   npm start
   ```

2. **Navigate to the NightKind page**
   - Go to: `http://localhost:3000/nightkind`

3. **Verify functionality:**
   - ✅ Products are loading from your Shopify store
   - ✅ "Add to Cart" buttons work
   - ✅ Cart icon shows item count
   - ✅ Clicking cart icon opens Shopify checkout

## 📦 Step 5: Add Products to Your Shopify Store

If you don't have products yet:

1. **Go to Shopify Admin → Products**
2. **Click "Add product"**
3. **Fill in product details:**
   - Title (e.g., "NightKind Bat Conservation T-Shirt")
   - Description
   - Price
   - Images
   - Inventory
4. **Make sure the product is:**
   - ✅ Active
   - ✅ Available on "Online Store" sales channel
5. **Save the product**

### Recommended NightKind Products

Consider adding products that align with the NightKind aesthetic:
- 🦇 Bat-themed apparel (t-shirts, hoodies)
- 🌙 Nocturnal artwork prints
- ⚡ Alt-gothic accessories
- 🖤 Conservation awareness merchandise

## 🎨 Customization

### Modify Product Display

Edit `src/components/shopify/ProductGrid.tsx`:
```typescript
const fetchedProducts = await fetchProducts(12); // Change number of products
```

### Customize Styling

Edit the following CSS files:
- `src/components/shopify/ProductCard.css` - Product card styles
- `src/components/shopify/ProductGrid.css` - Grid layout
- `src/components/NightKind.css` - Overall page styles

## 🔒 Security Best Practices

1. **Never commit `.env` to Git**
   - Already included in `.gitignore`
   - Use environment variables on deployment platforms

2. **Use Storefront API, not Admin API**
   - Storefront API is safe for client-side use
   - Admin API should only be used on servers

3. **Rotate tokens if exposed**
   - If you accidentally commit a token, regenerate it immediately
   - Go to Shopify Admin → Apps → Your App → API credentials

## 🌐 Deployment

### Environment Variables on Hosting Platforms

#### Netlify
1. Go to: Site Settings → Build & Deploy → Environment
2. Add the environment variables:
   - `REACT_APP_SHOPIFY_STORE_DOMAIN`
   - `REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
   - `REACT_APP_SHOPIFY_API_VERSION`

#### Vercel
1. Go to: Project Settings → Environment Variables
2. Add the same variables as above

#### GitHub Pages
For GitHub Pages, you'll need to use GitHub Secrets:
1. Go to: Repository Settings → Secrets and variables → Actions
2. Add secrets with the same names

## 🐛 Troubleshooting

### Products not loading?

1. **Check console for errors**
   - Open browser DevTools (F12)
   - Look for error messages

2. **Verify credentials**
   - Make sure `.env` file exists
   - Check that tokens are correct
   - Ensure no extra spaces in `.env`

3. **Check Shopify settings**
   - Products must be active
   - Products must be available on "Online Store" channel
   - App must have correct permissions

### "Add to Cart" not working?

1. **Check Storefront API permissions**
   - Must have `unauthenticated_write_checkouts`
   - Must have `unauthenticated_read_checkouts`

2. **Clear localStorage**
   - Open DevTools → Application → Local Storage
   - Delete `shopify_checkout_id`
   - Refresh page

### Styling issues?

1. **Import Google Fonts**
   - Make sure `Space Mono` font is loaded
   - Add to your HTML `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
   ```

## 📊 Analytics & Tracking

To track conversions and sales:

1. **Add Google Analytics**
2. **Use Shopify Analytics**
   - Go to Shopify Admin → Analytics
   - Track sales from the Storefront API

3. **Custom tracking**
   - Add event tracking to `addToCart` function
   - Track product views and cart interactions

## 🎯 Next Steps

- [ ] Add product collections/categories
- [ ] Implement product search
- [ ] Add product filtering (by price, type, etc.)
- [ ] Create product detail pages
- [ ] Add wishlist functionality
- [ ] Implement discount codes
- [ ] Add customer reviews

## 📚 Resources

- [Shopify Storefront API Documentation](https://shopify.dev/api/storefront)
- [Shopify Buy SDK Documentation](https://shopify.github.io/js-buy-sdk/)
- [Creating a Shopify App](https://help.shopify.com/en/manual/apps/custom-apps)

## 🆘 Need Help?

If you encounter issues:
1. Check the [Shopify Community Forums](https://community.shopify.com/)
2. Review the [Shopify Dev Docs](https://shopify.dev/docs)
3. Check your Shopify Admin logs for API errors

---

**NightKind Collective** - *Alt-gothic conservation through ethical commerce* 🦇
