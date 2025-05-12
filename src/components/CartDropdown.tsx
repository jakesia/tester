import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartDropdown: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="absolute right-0 mt-2 w-72 bg-dark-700 rounded-lg shadow-neon overflow-hidden z-50 border border-dark-600">
        <div className="p-4 text-center text-dark-100">
          Your cart is empty
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-0 mt-2 w-80 bg-dark-700 rounded-lg shadow-neon overflow-hidden z-50 border border-dark-600">
      <div className="max-h-96 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="p-4 border-b border-dark-600 flex items-start">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-16 h-16 object-cover rounded opacity-90"
            />
            
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-white">{item.name}</h4>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-dark-200 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="mt-1 text-sm text-dark-100">${item.price.toFixed(2)}</div>
              
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="w-6 h-6 flex items-center justify-center bg-dark-600 text-white rounded"
                >
                  -
                </button>
                <span className="mx-2 text-sm text-white">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 flex items-center justify-center bg-dark-600 text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-dark-800">
        <div className="flex justify-between mb-4">
          <span className="font-medium text-white">Total:</span>
          <span className="font-bold text-white">${total.toFixed(2)}</span>
        </div>
        
        <button className="w-full py-2 bg-white hover:bg-dark-50 text-black rounded font-medium transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;