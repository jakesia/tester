import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Collection</h2>
        <p className="text-lg text-dark-100 mb-12 max-w-2xl">
          Each piece is crafted with exceptional attention to detail, using the finest materials for those who appreciate the art of minimalism.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;