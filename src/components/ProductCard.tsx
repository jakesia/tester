import React from 'react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const itemInCart = cartItems.find(item => item.id === product.id);
  
  return (
    <div className="product-card bg-dark-700 rounded-lg overflow-hidden shadow-neon hover:shadow-neon-hover flex flex-col h-full">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <span className="font-medium text-white">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-dark-100 text-sm mb-4 flex-grow">{product.description}</p>
        
        <button
          onClick={() => addToCart(product)}
          className={`w-full py-2 px-4 rounded transition-colors duration-300 ${
            itemInCart
              ? 'bg-dark-500 hover:bg-dark-400 text-white'
              : 'bg-white hover:bg-dark-50 text-black'
          }`}
        >
          {itemInCart ? `In Cart (${itemInCart.quantity})` : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;