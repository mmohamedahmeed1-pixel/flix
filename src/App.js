import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// استيراد الـ Provider (المسؤول عن الكارت، المفضلة، والثيم الداكن/الفاتح)
import { CartProvider } from './CartContext';

// استيراد المكونات الأساسية للموقع 
import Navbar from './navbar'; 
import Header from './header'; 
import Footer from './footer'; 

// استيراد الصفحات
import Proudects from "./proudects";
import Check from "./check";
import About from './about';
import Help from './help';       // صفحة الأسئلة الشائعة المعدلة بـ Accordion
import Service from './service';
import Login from './login'; 
import LoginOut from './loginout'; 
import Pricing from './pricing';   // 💡 تم تعديل الحرف الصغير ليتوافق مع القرص (pricing.jsx)
import Watchlist from './watchlist'; // 💡 تم تعديل الحرف الصغير ليتوافق مع القرص (watchlist.jsx)

// 💡 استيراد صفحة تفاصيل الفيلم والتريلر الجديدة
import MovieDetail from './moviedetail'; 

// مكون الصفحة الرئيسية
const Home = () => (
  <>
    <Navbar />
    <Header />
    <Footer />
  </>
);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />
          
          {/* صفحة تسجيل الدخول */}
          <Route path="/login" element={<Login />} />

          {/* صفحة تسجيل الخروج */}
          <Route path="/logout" element={<LoginOut />} />

          {/* صفحة المنتجات/الأفلام والمسلسلات */}
          <Route path="/proudects" element={<><Navbar /><Proudects /><Footer /></>} />
          
          {/* 💡 مسار صفحة تفاصيل الفيلم والتريلر المستقلة بناءً على الـ ID */}
          <Route path="/movie/:id" element={<><Navbar /><MovieDetail /><Footer /></>} />

          {/* صفحة خطط الاشتراك والأسعار */}
          <Route path="/pricing" element={<><Navbar /><Pricing /><Footer /></>} />

          {/* صفحة قائمة المفضلات (Watchlist) */}
          <Route path="/watchlist" element={<><Navbar /><Watchlist /><Footer /></>} />

          {/* صفحة من نحن */}
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          
          {/* صفحة مركز المساعدة / الأسئلة الشائعة */}
          <Route path="/help" element={<><Navbar /><Help /><Footer /></>} />
          
          {/* صفحة الخدمات المبهجة */}
          <Route path="/service" element={<><Navbar /><Service /><Footer /></>} />
          
          {/* صفحة تفاصيل اللعبة/المنتج والتشغيل */}
          <Route path="/check/:gameSlug" element={<><Navbar /><Check /><Footer /></>} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;