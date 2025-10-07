
import type { ReactElement } from 'react';

export interface Category {
  id: number;
  name: string;
  // FIX: Changed JSX.Element to ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: ReactElement;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewCount: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Page {
  Home = 'home',
  Products = 'products',
  Cart = 'cart',
  Profile = 'profile'
}