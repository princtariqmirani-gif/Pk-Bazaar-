
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeScreen from './pages/HomeScreen';
import ProductsScreen from './pages/ProductsScreen';
import CartScreen from './pages/CartScreen';
import ProfileScreen from './pages/ProfileScreen';
import { Page } from './types';
import type { Product, CartItem } from './types';
import { PRODUCTS, CATEGORIES } from './data/mockData';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prevItems => 
        prevItems.map(item => 
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomeScreen products={PRODUCTS} categories={CATEGORIES} onAddToCart={handleAddToCart} />;
      case Page.Products:
        return <ProductsScreen products={PRODUCTS} onAddToCart={handleAddToCart} />;
      case Page.Cart:
        return <CartScreen cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveFromCart={handleRemoveFromCart} />;
      case Page.Profile:
        return <ProfileScreen />;
      default:
        return <HomeScreen products={PRODUCTS} categories={CATEGORIES} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen font-sans">
      <div className="app-container flex flex-col">
        <Header />
        <main className="flex-grow pb-20">
          {renderPage()}
        </main>
        <BottomNav 
          currentPage={currentPage} 
          onNavigate={setCurrentPage}
          cartItemCount={cartItemCount}
        />
      </div>
    </div>
  );
};

export default App;
