
import React from 'react';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface ProductsScreenProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductsScreen: React.FC<ProductsScreenProps> = ({ products, onAddToCart }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsScreen;
