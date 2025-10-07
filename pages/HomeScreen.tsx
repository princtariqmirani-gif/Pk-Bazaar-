
import React from 'react';
import type { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';

interface HomeScreenProps {
  products: Product[];
  categories: Category[];
  onAddToCart: (product: Product) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ products, categories, onAddToCart }) => {
  const popularProducts = products.slice(0, 4);

  return (
    <div className="space-y-8 p-4">
      {/* Banner Section */}
      <section className="banner bg-teal-500 rounded-lg p-8 text-white text-center flex flex-col items-center shadow-lg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://picsum.photos/seed/banner/1200/400)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <h1 className="text-3xl font-bold">Discover Your Perfect Shopping Journey!</h1>
        <p className="mt-2 max-w-md">Browse thousands of products from local sellers all over Pakistan.</p>
        <button className="mt-6 bg-white text-teal-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-md">
          Shop Now
        </button>
      </section>

      {/* Categories Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Categories</h2>
          <a href="#" className="text-sm font-medium text-teal-600 hover:text-teal-500">See all</a>
        </div>
        <div className="grid grid-cols-4 gap-4 text-center">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-md">
                {category.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Popular Products</h2>
          <a href="#" className="text-sm font-medium text-teal-600 hover:text-teal-500">See more</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
