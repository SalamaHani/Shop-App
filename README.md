# 🛍️ E-commerce Dashboard - Full Stack Next.js Application

![alt text](image.png)
A comprehensive e-commerce dashboard built with Next.js 15, featuring user management, product catalog, order processing, and advanced search functionality.

## ✨ Features

### 🎯 Core Functionality

- **User Management** - Complete CRUD operations with role-based access
- **Product Catalog** - Advanced product management with categories and filtering
- **Order Processing** - Order tracking with status management
- **Search System** - Advanced search with filters and URL parameters
- **Authentication** - Secure auth with email verification and password reset

### 🎨 UI/UX

- **Modern Design** - Clean, responsive interface with shadcn/ui components
- **Dark/Light Theme** - Complete theme system with persistence
- **Interactive Components** - Rich interactions with loading states
- **Mobile Responsive** - Optimized for all screen sizes
- **Accessibility** - WCAG compliant with proper ARIA labels

### 🔧 Technical Features

- **Server Actions** - Next.js 15 server actions for form handling
- **TypeScript** - Full type safety throughout the application
- **Database Integration** - Supabase for data storage and real-time updates
- **Email System** - Resend integration for transactional emails
- **Search & Filtering** - Advanced search with URL parameter management

## 🚀 Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library

### Backend

- **Next.js Server Actions** - Server-side form handling
- **Supabase** - PostgreSQL database with real-time features
- **Resend** - Email delivery service
- **Server Components** - React Server Components for performance

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Resend account (optional, for emails)

### Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd ecommerce-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Variables**
   Create a \`.env.local\` file in the root directory:
   \`\`\`env

   # Supabase

   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Email (Optional)

   RESEND_API_KEY=your_resend_api_key
   EMAIL_FROM=noreply@yourdomain.com

   # App URL

   NEXT_PUBLIC_APP_URL=http://localhost:3000
   \`\`\`

4. **Database Setup**
   Run the SQL scripts in your Supabase SQL editor:
   \`\`\`bash

   # Execute these files in order:

   scripts/sql/001_create_password_reset_codes.sql
   scripts/sql/002_create_email_verification_codes.sql
   \`\`\`

5. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   Navigate to \`http://localhost:3000\`

## 📁 Project Structure

\`\`\`
├── app/ # Next.js App Router
│ ├── auth/ # Authentication pages
│ ├── dashboard/ # Dashboard pages
│ ├── orders/ # Order management
│ ├── products/ # Product management
│ ├── users/ # User management
│ ├── search/ # Search results
│ └── layout.tsx # Root layout
├── components/ # React components
│ ├── ui/ # shadcn/ui components
│ ├── auth/ # Authentication components
│ └── ... # Feature components
├── lib/ # Utility functions
│ ├── supabase/ # Database clients
│ ├── mock-data.ts # Sample data
│ └── utils.ts # Helper functions
├── actions/ # Server actions
│ ├── auth-actions.ts # Authentication actions
│ ├── user-actions.ts # User management actions
│ └── ... # Other actions
└── scripts/ # Database scripts
└── sql/ # SQL migration files
\`\`\`

## 🎯 Key Components

### 🔐 Authentication System

- **Login/Register** - Secure user authentication
- **Email Verification** - 6-digit code verification with 30s expiry
- **Password Reset** - Forgot password flow with email codes
- **Role Management** - Admin, Manager, User, Guest roles

### 👥 User Management

- **User Table** - Comprehensive user listing with search and filters
- **CRUD Operations** - Create, read, update, delete users
- **Role Assignment** - Color-coded role badges and management
- **User Forms** - Complete user creation and editing forms

### 🛍️ Product Management

- **Product Catalog** - Rich product display with images and details
- **Category Management** - Product categorization and filtering
- **Inventory Tracking** - Stock management and availability
- **Product Search** - Advanced search with multiple criteria

### 📦 Order Management

- **Order Tracking** - Complete order lifecycle management
- **Status Updates** - Real-time order status changes
- **Order Filters** - Advanced filtering by status, date, customer
- **Order Actions** - Duplicate, delete, and modify orders

### 🔍 Search System

- **Global Search** - Header search with real-time suggestions
- **Advanced Filters** - Category, brand, price, rating filters
- **URL Parameters** - Shareable search URLs
- **Search Results** - Paginated results with sorting options

## 🎨 UI Components

### 📱 Layout Components

- **Header** - Navigation with search and user menu
- **Sidebar** - Dashboard navigation with active states
- **Footer** - Site information and links
- **Theme Toggle** - Dark/light mode switcher

### 🎛️ Form Components

- **Input Fields** - Styled form inputs with validation
- **Select Dropdowns** - Custom select components
- **Checkboxes** - Styled checkbox inputs
- **Buttons** - Various button styles and states

### 📊 Data Components

- **Tables** - Responsive data tables with sorting
- **Cards** - Information display cards
- **Badges** - Status and role indicators
- **Charts** - Data visualization components

### 🎪 Interactive Components

- **Modals** - Dialog boxes for forms and confirmations
- **Dropdowns** - Action menus and selectors
- **Tooltips** - Contextual help and information
- **Loading States** - Skeleton loaders and spinners

## 🔧 Server Actions

### 🔐 Authentication Actions

- \`requestPasswordReset\` - Send password reset code
- \`verifyResetCode\` - Verify reset code and allow password change
- \`resetPassword\` - Update user password
- \`sendVerificationCode\` - Send email verification code
- \`verifyEmailCode\` - Verify email with code

### 👥 User Actions

- \`createUser\` - Create new user account
- \`updateUser\` - Update user information
- \`deleteUser\` - Remove user account
- \`changeUserRole\` - Update user role

### 🛍️ Product Actions

- \`createProduct\` - Add new product
- \`updateProduct\` - Edit product details
- \`deleteProduct\` - Remove product
- \`toggleProductStatus\` - Enable/disable product

### 📦 Order Actions

- \`changeOrderStatus\` - Update order status
- \`deleteOrder\` - Remove order
- \`duplicateOrder\` - Create order copy

### 🔍 Search Actions

- \`searchProducts\` - Advanced product search
- \`performSearch\` - Handle search form submissions
- \`quickSearch\` - Fast header search

## 🎯 Features in Detail

### 🔍 Advanced Search

The search system provides comprehensive product discovery:

- **Multi-field Search** - Name, brand, category, description
- **Real-time Suggestions** - Instant search results
- **Filter Combinations** - Price, rating, category filters
- **URL Parameters** - Bookmarkable search results
- **Pagination** - Navigate through large result sets

### 👥 User Management

Complete user administration system:

- **Role-based Access** - Different permissions per role
- **Color-coded Roles** - Visual role identification
- **Bulk Operations** - Manage multiple users
- **User Creation** - Comprehensive user forms
- **Search & Filter** - Find users quickly

### 🛍️ Product Catalog

Rich product management features:

- **Image Gallery** - Multiple product images
- **Category System** - Organized product hierarchy
- **Inventory Management** - Stock tracking
- **Price Management** - Regular and sale prices
- **Product Variants** - Size, color, style options

### 📦 Order Processing

Complete order management workflow:

- **Status Tracking** - Order lifecycle management
- **Customer Information** - Complete order details
- **Order History** - Track order changes
- **Bulk Actions** - Process multiple orders
- **Export Functionality** - Order data export

## 🎨 Styling & Theming

### 🎯 Design System

- **Consistent Colors** - Unified color palette
- **Typography Scale** - Harmonious text sizing
- **Spacing System** - Consistent margins and padding
- **Component Variants** - Multiple style options

### 🌙 Theme Support

- **Dark Mode** - Complete dark theme
- **Light Mode** - Clean light theme
- **Theme Persistence** - Remembers user preference
- **Smooth Transitions** - Animated theme switching

### 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Perfect tablet experience
- **Desktop Enhanced** - Rich desktop features
- **Touch Friendly** - Optimized touch interactions

## 🔒 Security Features

### 🛡️ Authentication Security

- **Secure Password Hashing** - bcrypt password protection
- **JWT Tokens** - Secure session management
- **Email Verification** - Confirmed email addresses
- **Password Reset** - Secure password recovery

### 🔐 Data Protection

- **Input Validation** - Server-side validation
- **SQL Injection Prevention** - Parameterized queries
- **XSS Protection** - Sanitized user input
- **CSRF Protection** - Cross-site request forgery prevention

### 👤 Access Control

- **Role-based Permissions** - Granular access control
- **Route Protection** - Authenticated route access
- **API Security** - Protected server actions
- **Data Isolation** - User data separation

## 📈 Performance Optimizations

### ⚡ Next.js Features

- **Server Components** - Reduced client-side JavaScript
- **Static Generation** - Pre-built pages for speed
- **Image Optimization** - Automatic image optimization
- **Code Splitting** - Lazy-loaded components

### 🚀 Database Optimization

- **Efficient Queries** - Optimized database queries
- **Connection Pooling** - Database connection management
- **Caching Strategy** - Reduced database load
- **Real-time Updates** - Supabase real-time features

### 🎯 User Experience

- **Loading States** - Immediate user feedback
- **Error Handling** - Graceful error recovery
- **Offline Support** - Basic offline functionality
- **Progressive Enhancement** - Works without JavaScript

## 🧪 Testing

### 🔍 Testing Strategy

- **Unit Tests** - Component and function testing
- **Integration Tests** - Feature workflow testing
- **E2E Tests** - Complete user journey testing
- **Accessibility Tests** - WCAG compliance testing

### 🛠️ Testing Tools

- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Playwright** - End-to-end testing
- **Axe** - Accessibility testing

## 🚀 Deployment

### 🌐 Vercel Deployment

1. **Connect Repository** - Link your GitHub repository
2. **Environment Variables** - Add production environment variables
3. **Deploy** - Automatic deployment on push
4. **Custom Domain** - Configure your domain

### 🔧 Production Setup

- **Database Migration** - Run SQL scripts in production
- **Environment Variables** - Configure production secrets
- **Email Configuration** - Set up production email service
- **Monitoring** - Set up error tracking and analytics

## 📚 API Documentation

### 🔐 Authentication Endpoints

- \`POST /api/auth/login\` - User login
- \`POST /api/auth/register\` - User registration
- \`POST /api/auth/logout\` - User logout
- \`POST /api/auth/reset-password\` - Password reset

### 👥 User Management

- \`GET /api/users\` - List users
- \`POST /api/users\` - Create user
- \`PUT /api/users/:id\` - Update user
- \`DELETE /api/users/:id\` - Delete user

### 🛍️ Product Management

- \`GET /api/products\` - List products
- \`POST /api/products\` - Create product
- \`PUT /api/products/:id\` - Update product
- \`DELETE /api/products/:id\` - Delete product

### 📦 Order Management

- \`GET /api/orders\` - List orders
- \`POST /api/orders\` - Create order
- \`PUT /api/orders/:id\` - Update order
- \`DELETE /api/orders/:id\` - Delete order

## 🤝 Contributing

### 📋 Development Guidelines

1. **Fork the repository**
2. **Create a feature branch** - \`git checkout -b feature/amazing-feature\`
3. **Commit your changes** - \`git commit -m 'Add amazing feature'\`
4. **Push to the branch** - \`git push origin feature/amazing-feature\`
5. **Open a Pull Request**

### 📝 Code Standards

- **TypeScript** - Use TypeScript for all new code
- **ESLint** - Follow ESLint configuration
- **Prettier** - Format code with Prettier
- **Conventional Commits** - Use conventional commit messages

### 🧪 Testing Requirements

- **Unit Tests** - Add tests for new functions
- **Component Tests** - Test React components
- **Integration Tests** - Test feature workflows
- **Documentation** - Update documentation for changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Vercel** - Excellent hosting platform
- **Supabase** - Powerful backend-as-a-service
- **shadcn/ui** - Beautiful component library
- **Tailwind CSS** - Utility-first CSS framework

## 📞 Support

For support, email support@yourdomain.com or join our Slack channel.

## 🔗 Links

- **Live Demo** - [https://your-app.vercel.app](https://your-app.vercel.app)
- **Documentation** - [https://docs.your-app.com](https://docs.your-app.com)
- **GitHub** - [https://github.com/yourusername/ecommerce-dashboard](https://github.com/yourusername/ecommerce-dashboard)

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
