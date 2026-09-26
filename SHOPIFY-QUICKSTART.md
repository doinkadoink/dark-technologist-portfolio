# 🦇 NightKind Shopify Integration - Quick Start

## ⚡ 5-Minute Setup

### 1. Get Your Shopify Credentials

**In Shopify Admin:**
```
Settings → Apps and sales channels → Develop apps → Create an app
```

**Name it:** `NightKind Portfolio`

**Configure Storefront API with these scopes:**
- ✅ `unauthenticated_read_product_listings`
- ✅ `unauthenticated_read_product_inventory`  
- ✅ `unauthenticated_read_collection_listings`
- ✅ `unauthenticated_write_checkouts`
- ✅ `unauthenticated_read_checkouts`

**Install app → Copy Storefront API access token**

### 2. Add Credentials to Environment

Create `.env` file:
```bash
cp .env.example .env
```

Update `.env` with your details:
```env
REACT_APP_SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here
REACT_APP_SHOPIFY_API_VERSION=2024-01
```

### 3. Test It

```bash
npm start
```

Navigate to: `http://localhost:3000/nightkind`

## ✅ Checklist

- [ ] Shopify app created
- [ ] Storefront API configured
- [ ] Access token copied
- [ ] `.env` file created with credentials
- [ ] At least one active product in Shopify
- [ ] Product available on "Online Store" channel
- [ ] App running locally
- [ ] Products displaying on /nightkind page
- [ ] Add to cart working
- [ ] Cart icon showing count
- [ ] Checkout opens when clicking cart

## 🐛 Quick Fixes

**No products showing?**
```
1. Check Shopify Admin → Products
2. Make sure products are "Active"
3. Check "Online Store" is selected in product availability
```

**Cart not working?**
```
1. Clear browser localStorage
2. Check Storefront API has checkout permissions
3. Refresh the page
```

**Environment variables not loading?**
```
1. Restart npm dev server after adding .env
2. Make sure all variables start with REACT_APP_
3. No spaces around = in .env file
```

## 📚 Full Documentation

See [SHOPIFY-SETUP.md](./SHOPIFY-SETUP.md) for complete setup instructions.

---

**Happy selling! 🦇✨**
