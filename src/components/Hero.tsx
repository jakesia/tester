import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-[80vh] md:h-[70vh] lg:h-[80vh] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/60 to-dark-900 z-10"></div>
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        >
          <img 
            src="https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Premium lifestyle products" 
            className="w-full h-full object-cover object-center opacity-75"
          />
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-end pb-16 md:pb-24 relative z-20">
          <div className="hero-content max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Redefine Your Style
            </h2>
            <p className="text-lg md:text-xl mb-8 text-dark-100 animate-fade-in-delay-1">
              Discover our collection of premium, handcrafted products designed for those who dare to stand out.
            </p>
            <button 
              className="bg-white text-black hover:bg-dark-50 px-8 py-3 rounded-md font-medium transition-all duration-300 animate-fade-in-delay-2 shadow-neon hover:shadow-neon-hover"
              onClick={() => {
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;