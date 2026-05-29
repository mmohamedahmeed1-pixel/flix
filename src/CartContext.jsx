import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. إنشاء الـ Context الأساسي
export const MovieContext = createContext();

export const CartProvider = ({ children }) => {
  // --- ميزات المفضلة والثيم الجديدة ---
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // --- ميزات الكارت القديمة (لحماية ملف check.jsx من الانهيار) ---
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.body.style.backgroundColor = darkMode ? '#141414' : '#f4f6f9';
  }, [darkMode]);

  // دالة تبديل المفضلة
  const toggleFavorite = (movie) => {
    setFavorites(prev => 
      prev.find(m => m.id === movie.id) 
      ? prev.filter(m => m.id !== movie.id) 
      : [...prev, movie]
    );
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  // دالات الكارت التقليدية لتفادي أخطاء الملفات الأخرى
  const addToCart = (item) => setCartItems(prev => [...prev, item]);
  const removeFromCart = (id) => setCartItems(prev => prev.filter(item => item.id !== id));

  return (
    <MovieContext.Provider value={{ 
      favorites, toggleFavorite, darkMode, toggleTheme,
      cartItems, addToCart, removeFromCart // دعم الأكواد القديمة
    }}>
      {children}
    </MovieContext.Provider>
  );
};

// 💡 إعادة بناء دالة useCart التي يبحث عنها ملف check.jsx وتصديرها تلقائياً
export const useCart = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};