# 🛍️ Astorefront - Scalable E-Commerce Platform

![alt text](image.png)
Astorefront is a full-stack e-commerce solution built with modern technologies like React, Next.js, and Prisma. It enables online grocery businesses to launch a secure, customizable storefront with role-based dashboards and advanced payment integration.

---

## ✅ Key Capabilities

### 💳 Payment Processing

- Stripe checkout for secure online payments
- Cash on Delivery (COD) support

### 🔐 Authentication & Access

- JWT-based authentication
- OAuth with Google
- OTP email verification (Mailtrap)
- Role-based access (Admin, Manager, Customer)

### 🛒 Storefront Features

- Product catalog and filtering
- Shopping cart and checkout
- Wishlists, discount codes, order tracking

### 📊 Admin Dashboard

- User & order management
- Category/product CRUD
- Analytics & real-time stats
- Message center & layout settings

---

## 📦 Tech Stack

| Frontend           | Backend | Database   | Auth         | UI/UX        | Payments |
| ------------------ | ------- | ---------- | ------------ | ------------ | -------- |
| React              | Next.js | PostgreSQL | JWT          | Tailwind CSS | Stripe   |
| Next.js App Router | Prisma  | Cloudinary | Google OAuth | shadcn/ui    | COD      |

---

## 🧑‍💻 Get Started

```bash
git clone https://github.com/your-username/astorefront.git
cd astorefront
npm install
npx prisma migrate dev
npm run dev
```

---

## 📝 License

Licensed under the MIT License.
