# Daraz Clone - E-Commerce Platform

A production-grade, pixel-perfect clone of Daraz Nepal (daraz.com.np) built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: PostgreSQL + PostgREST (via Supabase)
- **Authentication**: Supabase Auth (Email + Google + Phone OTP)
- **State Management**: Zustand + TanStack Query
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom Daraz theme

## Features

### Core Features
- **Homepage**: Hero slider with auto-rotation, Flash Sale countdown, Categories grid, Product carousels, Top Brands
- **Search**: Global search with autocomplete and suggestions
- **Product Listing**: Infinite scroll, Advanced filters (price, brand, rating, color, size, discount), Sort options
- **Product Detail**: Image gallery with zoom, Color/size variants, Price & discount info, Add to Cart & Buy Now, Description, Specifications, Reviews
- **Cart & Wishlist**: Persistent cart with localStorage, Voucher/discount code input
- **Checkout Flow**: Address selection, Delivery options, Payment methods (COD + online payment)
- **User Features**: Login/Register with OTP, My Account, Orders, Wishlist, Addresses, Reviews

### Daraz-like Features
- Flash Sale timer with countdown
- "Daraz Mall" badge on verified products
- Free shipping / Cash on Delivery badges
- Rating & Review system with star ratings
- Order tracking status
- Mobile-first responsive design

## Project Structure

```
daraz-clone/
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── (shop)/           # Shop pages (cart, checkout, product)
│   ├── account/          # User account pages
│   ├── categories/       # Category pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── auth/            # Authentication components
│   ├── checkout/        # Checkout components
│   ├── layout/          # Header, Footer, Navigation
│   ├── product/         # Product components
│   ├── ui/              # shadcn/ui components
│   └── home/            # Homepage components
├── lib/
│   ├── supabase/        # Supabase client & types
│   ├── store/           # Zustand stores
│   ├── hooks/           # Custom hooks
│   └── utils.ts         # Utility functions
├── types/               # TypeScript types
├── supabase/
│   ├── migrations/      # Database migrations
│   └── seed.sql         # Seed data
└── public/              # Static assets
```

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- A Supabase account (free tier works)

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to Project Settings > API to get your credentials
3. Run the SQL migration in the Supabase SQL Editor:
   - Open `supabase/migrations/001_initial_schema.sql`
   - Copy and paste the SQL into the Supabase SQL Editor
   - Run the script to create all tables
4. Run the seed data:
   - Open `supabase/seed.sql`
   - Copy and paste into the SQL Editor
   - Run to populate sample data

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Get these values from your Supabase project settings.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## Database Schema

The project uses PostgreSQL with the following main tables:

- **profiles**: User profiles (extends auth.users)
- **categories**: Product categories with hierarchy
- **brands**: Product brands
- **products**: Products with variants, specifications, pricing
- **product_variants**: Product color/size/other variants
- **addresses**: User shipping addresses
- **orders**: Customer orders
- **order_items**: Items in each order
- **cart_items**: Shopping cart items
- **wishlist_items**: User wishlist
- **reviews**: Product reviews
- **banners**: Homepage banners

All tables have Row Level Security (RLS) enabled for secure data access.

## Key Components

### State Management
- **cartStore**: Manages shopping cart with localStorage persistence
- **wishlistStore**: Manages wishlist with localStorage persistence
- **userStore**: Manages user authentication state

### UI Components
- **Header**: Responsive header with search, cart, wishlist, user menu
- **Footer**: Multi-column footer with links and app download
- **ProductCard**: Product card with image, price, rating, add to cart
- **HeroSlider**: Auto-rotating hero banner slider
- **FlashSale**: Flash sale section with countdown timer
- **CategoriesGrid**: Category grid with icons and images

## Authentication

The project uses Supabase Auth with support for:
- Email/Password authentication
- Google OAuth (configured in Supabase)
- Phone OTP (configured in Supabase)

Authentication pages are located in `app/(auth)/`.

## Payment Methods

- **Cash on Delivery (COD)**: Default payment method for Nepal
- **Online Payment**: Integration ready for eSewa, Khalti, credit/debit cards

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## Customization

### Colors
Daraz brand colors are defined in `tailwind.config.ts`:
- Primary Orange: #f85606
- Yellow: #ffc400
- Green: #00bfa5
- Red: #f5222d
- Blue: #1890ff

### Images
Currently using Unsplash placeholder images. Replace with your own product images by:
1. Upload images to Supabase Storage
2. Update image URLs in the database
3. Or use a CDN like Cloudinary

## Performance Optimization

- Next.js Image optimization for all images
- Lazy loading for product carousels
- Code splitting with Next.js App Router
- State management with Zustand for minimal re-renders
- localStorage for cart/wishlist persistence

## Future Enhancements

- [ ] Real-time search with Algolia or Meilisearch
- [ ] Advanced analytics with Google Analytics
- [ ] Email notifications for orders
- [ ] SMS notifications via Twilio
- [ ] Admin dashboard for product management
- [ ] Multi-vendor support
- [ ] Chat support integration

## License

This project is for educational purposes only. It is a clone of Daraz Nepal for learning purposes.

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js 15, TypeScript, and Supabase
