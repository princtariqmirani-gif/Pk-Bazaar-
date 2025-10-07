
import React from 'react';
import type { CartItem } from '../types';

interface CartScreenProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
}

const CartScreen: React.FC<CartScreenProps> = ({ cartItems, onUpdateQuantity, onRemoveFromCart }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 250 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="p-4 flex flex-col items-center justify-center h-full text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mt-6">Your Cart is Empty</h1>
        <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Cart</h1>
      
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex bg-white p-4 rounded-lg shadow-sm items-center">
            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-md object-cover"/>
            <div className="flex-grow ml-4">
              <h2 className="font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500">Rs {item.price.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 bg-gray-200 rounded-full text-gray-600">-</button>
                <span className="mx-3 font-medium">{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 bg-gray-200 rounded-full text-gray-600">+</button>
              </div>
            </div>
            <button onClick={() => onRemoveFromCart(item.id)} className="text-gray-400 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>Rs {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>Rs {shipping.toLocaleString()}</span>
        </div>
        <div className="border-t my-2"></div>
        <div className="flex justify-between text-gray-800 font-bold text-lg">
          <span>Total</span>
          <span>Rs {total.toLocaleString()}</span>
        </div>
      </div>

      <button className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartScreen;
