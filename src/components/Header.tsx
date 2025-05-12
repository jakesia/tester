import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartDropdown from './CartDropdown';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  activeTab: 'shop' | 'about';
  setActiveTab: (tab: 'shop' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { cartItems, isCartOpen, toggleCart } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-dark-800/80 backdrop-blur-md border-b border-dark-600">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-dark-50">
            <span className="text-white">LUXE</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => setActiveTab('shop')}
              className={`nav-link text-sm font-medium ${activeTab === 'shop' ? 'active text-white' : 'text-dark-100 hover:text-white'}`}
            >
              Shop Now
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`nav-link text-sm font-medium ${activeTab === 'about' ? 'active text-white' : 'text-dark-100 hover:text-white'}`}
            >
              About Us
            </button>
          </nav>
          
          <div className="relative">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-white hover:text-dark-100 transition-colors"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            {isCartOpen && <CartDropdown />}
          </div>
        </div>
      </div>
      
      <div className="md:hidden border-t border-dark-600">
        <div className="flex">
          <button
            onClick={() => setActiveTab('shop')}
            className={`flex-1 py-2 text-center text-sm font-medium ${
              activeTab === 'shop' 
                ? 'text-white border-b-2 border-white' 
                : 'text-dark-100'
            }`}
          >
            Shop Now
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`flex-1 py-2 text-center text-sm font-medium ${
              activeTab === 'about' 
                ? 'text-white border-b-2 border-white' 
                : 'text-dark-100'
            }`}
          >
            About Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;