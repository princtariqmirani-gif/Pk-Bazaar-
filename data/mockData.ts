
import React from 'react';
import type { Product, Category } from '../types';

// FIX: The following icon components have been rewritten using React.createElement 
// to avoid using JSX syntax in a .ts file, which was causing parsing errors.
const ElectronicsIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })
);
const FashionIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" })
);
const HomeGoodsIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" })
);
const GroceriesIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" })
);

export const CATEGORIES: Category[] = [
  // FIX: Instantiating components with React.createElement to avoid JSX syntax.
  { id: 1, name: 'Electronics', icon: React.createElement(ElectronicsIcon) },
  { id: 2, name: 'Fashion', icon: React.createElement(FashionIcon) },
  { id: 3, name: 'Home Goods', icon: React.createElement(HomeGoodsIcon) },
  { id: 4, name: 'Groceries', icon: React.createElement(GroceriesIcon) }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    description: 'High-fidelity sound with a comfortable over-ear design. 40 hours of playtime.',
    price: 12500,
    imageUrl: 'https://picsum.photos/seed/product1/400/400',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 1245
  },
  {
    id: 2,
    name: 'Men\'s Leather Jacket',
    description: 'Classic biker-style jacket made from premium quality genuine leather.',
    price: 18000,
    imageUrl: 'https://picsum.photos/seed/product2/400/400',
    category: 'Fashion',
    rating: 4.6,
    reviewCount: 890
  },
  {
    id: 3,
    name: 'Smart WiFi Air Fryer',
    description: 'Cook your favorite meals with less oil. Controllable via a smartphone app.',
    price: 22000,
    imageUrl: 'https://picsum.photos/seed/product3/400/400',
    category: 'Home Goods',
    rating: 4.9,
    reviewCount: 2310
  },
  {
    id: 4,
    name: 'Organic Almonds (1kg)',
    description: 'Fresh and crunchy organic almonds, a healthy snack for any time of the day.',
    price: 2500,
    imageUrl: 'https://picsum.photos/seed/product4/400/400',
    category: 'Groceries',
    rating: 4.7,
    reviewCount: 560
  },
  {
    id: 5,
    name: '4K Ultra HD Smart TV 55"',
    description: 'Immersive viewing experience with stunning 4K resolution and smart features.',
    price: 95000,
    imageUrl: 'https://picsum.photos/seed/product5/400/400',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 1800
  },
  {
    id: 6,
    name: 'Women\'s Lawn Suit',
    description: 'Beautifully printed 3-piece unstitched lawn suit, perfect for the summer season.',
    price: 4500,
    imageUrl: 'https://picsum.photos/seed/product6/400/400',
    category: 'Fashion',
    rating: 4.5,
    reviewCount: 1120
  },
   {
    id: 7,
    name: 'Robotic Vacuum Cleaner',
    description: 'Intelligent path planning for efficient cleaning. Strong suction and quiet operation.',
    price: 45000,
    imageUrl: 'https://picsum.photos/seed/product7/400/400',
    category: 'Home Goods',
    rating: 4.7,
    reviewCount: 950
  },
   {
    id: 8,
    name: 'Gaming Laptop RTX 4060',
    description: 'High-performance gaming laptop with the latest graphics card and a high-refresh-rate screen.',
    price: 250000,
    imageUrl: 'https://picsum.photos/seed/product8/400/400',
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 780
  }
];