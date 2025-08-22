# 👗 Ladies Fashion Store

A modern **Next.js + MongoDB** web application for browsing and managing ladies’ fashion products.  
Built with **Next.js 14 (App Router)**, **TailwindCSS**, and **daisyUI**.

---

## 🚀 Features
- 🏠 Home page displaying all products
- 📦 Product details page (dynamic route)
- 🔗 REST API with CRUD operations
- 🎨 Modern UI with TailwindCSS + daisyUI
- ⚡ Optimized for performance with Next.js

---

## 🛣 Routes Summary

### 🌐 Frontend Pages
- `/` → Home Page (lists all products)
- `/products/[id]` → Product Details Page (dynamic)

### 🔌 API Endpoints
- `GET /api/products` → Fetch all products  
- `POST /api/products` → Add a new product  
- `GET /api/products/[id]` → Get single product details  
- `PUT /api/products/[id]` → Update a product  
- `DELETE /api/products/[id]` → Delete a product  

---

### Clone the Repository
git clone https://github.com/your-username/ladies-fashion-store.git
cd ladies-fashion-store
npm install
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Run Development Server
npm run dev
