import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Smile } from 'lucide-react';

function LoginOut() {
  const navigate = useNavigate();

  // تأثير ذكي: أول ما الصفحة تفتح، هيستنى 4 ثواني وينقله تلقائياً للرئيسية
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      backgroundColor: '#f4f6f9', // نفس الخلفية المبهجة المريحة
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#333',
      direction: 'rtl',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '50px 40px',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        textAlign: 'center',
        maxWidth: '450px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* أيقونة تسجيل خروج متحركة وخفيفة */}
        <div style={{
          backgroundColor: '#fff0f1',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto',
          boxShadow: '0 8px 20px rgba(229, 9, 20, 0.1)'
        }}>
          <LogOut size={36} color="#E50914" />
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: '#1a1a1a' }}>
          تم تسجيل الخروج بنجاح!
        </h2>
        
        <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
          نشوفك على خير قريب إن شاء الله <Smile size={16} style={{ display: 'inline', verticalAlign: 'middle', color: '#ff9500' }} />. سيتم تحويلك إلى الصفحة الرئيسية تلقائياً خلال لحظات...
        </p>

        {/* زرار للعودة الفورية لو مش عايز يستنى الـ 4 ثواني */}
        <button 
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#ff5e62',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s',
            width: '100%',
            boxShadow: '0 4px 12px rgba(255, 94, 98, 0.3)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e04b50'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ff5e62'}
        >
          الانتقال للرئيسية الآن
        </button>
      </div>
    </div>
  );
}

export default LoginOut;