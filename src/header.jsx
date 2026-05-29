import React from 'react';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // خلفية سينمائية عامة تعبر عن الأفلام
  const backgroundImage = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop";

  return (
    <header style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(20,20,20,1) 100%), url("${backgroundImage}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      height: '75vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', // توسيط المحتوى في نص الشاشة
      textAlign: 'center',
      padding: '0 20px',
      boxSizing: 'border-box'
    }}>
      {/* محتوى الشرح */}
      <div style={{ maxWidth: '800px', marginTop: '60px' }}>
        {/* عنوان رئيسي قوي */}
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'bold', 
          marginBottom: '20px', 
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          lineHeight: '1.2'
        }}>
          أفلام، مسلسلات، وعروض تلفزيونية بلا حدود
        </h1>

        {/* شرح مبسط للموقع */}
        <p style={{ 
          fontSize: '1.4rem', 
          marginBottom: '30px', 
          color: '#e5e5e5',
          textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
          fontWeight: '500'
        }}>
          شاهد في أي مكان. إلغاء الاشتراك في أي وقت. استمتع بتجربة سينمائية احترافية مخصصة لك بالكامل.
        </p>

        {/* زرار دعوة لاتخاذ إجراء (Call to Action) */}
        <button 
          onClick={() => navigate('/proudects')} // 💡 تم التعديل هنا لينقلك لصفحة المنتجات/الأفلام
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 35px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#E50914', // اللون الأحمر الشهير
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            boxShadow: '0 4px 15px rgba(229, 9, 20, 0.4)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#b80710'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#E50914'}
        >
          <Play size={22} fill="white" /> ابدأ المشاهدة الآن
        </button>
      </div>
    </header>
  );
}

export default Header;