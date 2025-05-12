import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'shop' | 'about'>('shop');

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-grow">
          {activeTab === 'shop' ? (
            <>
              <Hero />
              <ProductGrid />
            </>
          ) : (
            <div className="container mx-auto px-4 py-16 max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-navy-900">About Us</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Founded in 2023, Luxe is a premium lifestyle brand dedicated to bringing you 
                  the finest quality products with minimalist design and exceptional craftsmanship.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team of designers and craftspeople work tirelessly to create products that 
                  blend functionality with aesthetic beauty, ensuring that each item not only serves 
                  its purpose but also enhances your living environment.
                </p>
                <p className="text-gray-700 mb-6">
                  We believe in sustainable production practices and ethical sourcing of materials, 
                  working only with partners who share our values of quality, integrity, and environmental 
                  responsibility.
                </p>
                <p className="text-gray-700">
                  Thank you for choosing Luxe. We're excited to be part of your journey toward a more 
                  beautiful, functional lifestyle.
                </p>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;