import React, { useState, useEffect } from 'react';
import { useLocation as useRouterLocation, useNavigate as useRouterNavigate } from 'react-router-dom';
import { ArrowRight, Star, Calendar, Clock } from 'lucide-react';

function MovieDetail() {
  const location = useRouterLocation();
  const navigate = useRouterNavigate();
  const movie = location.state?.movie;

  // 💡 قراءة حالة الـ Dark Mode الحالية من الـ Local Storage عشان يفضل متناسق مع صفحة المنتجات
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const handleThemeChange = () => setDarkMode(localStorage.getItem('theme') === 'dark');
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  // لو مفيش فيلم ممرر (مثلاً المستخدم دخل اللينك مباُشرة) نرجعه لصفحة المنتجات
  if (!movie) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '150px 20px', 
        backgroundColor: darkMode ? '#141414' : '#f4f6f9',
        color: '#ff5e62',
        minHeight: '100vh',
        direction: 'rtl'
      }}>
        <h2>لم يتم العثور على العمل الفني..</h2>
        <button 
          onClick={() => navigate('/proudects')} 
          style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer', background: '#ff5e62', color: '#fff', border: 'none', borderRadius: '8px' }}
        >
          العودة للمنتجات
        </button>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: darkMode ? '#141414' : '#f4f6f9',
      minHeight: '100vh', 
      color: darkMode ? '#fff' : '#333',
      padding: '120px 6% 60px 6%', 
      direction: 'rtl', 
      transition: 'all 0.4s ease'
    }}>
      
      {/* زر العودة الخلفي */}
      <button 
        onClick={() => navigate(-1)} 
        style={{
          display: 'flex', alignItems: 'center', gap: '8px', background: '#ff5e62', color: 'white',
          border: 'none', padding: '10px 20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '30px', boxShadow: '0 4px 12px rgba(255,94,98,0.3)'
        }}
      >
        <ArrowRight size={18} /> العودة للمعرض
      </button>

      {/* قسم المحتوى والتفاصيل */}
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        
        {/* بوستر الفيلم/المسلسل */}
        <div style={{ width: '100%', maxWidth: '320px', borderRadius: '20px', overflow: 'hidden', boxShadow: darkMode ? '0 15px 35px rgba(0,0,0,0.6)' : '0 15px 35px rgba(0,0,0,0.1)' }}>
          <img src={movie.img} alt={movie.title} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        </div>

        {/* بيانات النص والوصف */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ fontSize: '38px', fontWeight: '900', margin: '0 0 20px 0', color: darkMode ? '#fff' : '#111' }}>{movie.title}</h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffb400', fontWeight: 'bold', fontSize: '16px' }}>
              <Star fill="#ffb400" size={18} color="#ffb400" /> {movie.rating}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontWeight: '600' }}>
              <Calendar size={18} /> {movie.year}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontWeight: '600' }}>
              <Clock size={18} /> {movie.duration || "2h 15m"}
            </span>
          </div>

          <p style={{ fontSize: '18px', lineHeight: '1.8', color: darkMode ? '#ccc' : '#555', marginBottom: '40px', maxWidth: '800px' }}>
            {movie.description}
          </p>

          {/* مشغل التريلر الرسمي من اليوتيوب */}
          <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: darkMode ? '#fff' : '#222' }}>🎬 الإعلان الرسمي (Trailer)</h3>
          <div style={{ 
            width: '100%', 
            maxWidth: '750px', 
            aspectRatio: '16/9', 
            borderRadius: '16px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)', 
            backgroundColor: '#000' 
          }}>
            <iframe 
              width="100%" height="100%" 
              src={`https://www.youtube.com/embed/${movie.trailer}?autoplay=0`} 
              title={movie.title} frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MovieDetail;