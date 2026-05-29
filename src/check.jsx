import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, User, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';

function Check() {
  const location = useLocation();
  const navigate = useNavigate();
  const { planName, planPrice } = location.state || { planName: "الباقة القياسية", planPrice: "100 ج.م" };

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [formData, setFormData] = useState({ name: '', email: '', cardNumber: '', cardExpiry: '', cardCvc: '' });
  const [isSuccess, setIsSuccess] = useState(false); // 💡 حالة نجاح الاشتراك

  useEffect(() => {
    const handleThemeChange = () => setDarkMode(localStorage.getItem('theme') === 'dark');
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.cardNumber) {
      alert("برجاء ملء البيانات الأساسية!");
      return;
    }
    setIsSuccess(true); // تشغيل شاشة النجاح
  };

  // 🌟 شاشة تم الاشتراك بنجاح المبهجة
  if (isSuccess) {
    return (
      <div style={{
        backgroundColor: darkMode ? '#141414' : '#f4f6f9', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', direction: 'rtl'
      }}>
        <div style={{
          backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', padding: '40px', borderRadius: '24px',
          textAlign: 'center', maxWidth: '450px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          animation: 'scaleUp 0.4s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <CheckCircle2 size={80} color="#2dbb54" />
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: '900', color: darkMode ? '#fff' : '#111', margin: '0 0 10px 0' }}>تم الاشتراك بنجاح! 🎉</h2>
          <p style={{ color: '#888', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
            مرحباً بك في عائلة سيما فليكس. تم تفعيل **{planName}** بنجاح، يمكنك الآن البدء في الاستمتاع بمشاهدة غير محدودة.
          </p>
          <button 
            onClick={() => navigate('/proudects')}
            style={{ backgroundColor: '#ff5e62', color: 'white', border: 'none', padding: '14px 30px', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}
          >
            ابدأ المشاهدة الآن 🎬
          </button>
        </div>
      </div>
    );
  }

  // 📝 فورمة الشراء العادية
  return (
    <div style={{
      backgroundColor: darkMode ? '#141414' : '#f4f6f9', minHeight: '100vh',
      color: darkMode ? '#fff' : '#333', padding: '120px 6% 60px 6%', direction: 'rtl', transition: 'all 0.4s'
    }}>
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
        
        {/* فورم البيانات */}
        <form onSubmit={handleSubmit} style={{
          backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', padding: '30px', borderRadius: '20px',
          flex: '1', maxWidth: '500px', minWidth: '300px', boxShadow: '0 10px 25px rgba(0,0,0,0.03)'
        }}>
          <h2 style={{ margin: '0 0 25px 0', fontSize: '22px', fontWeight: '800' }}>تأكيد بيانات الاشتراك والدفع 💳</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>الاسم بالكامل</label>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: darkMode ? '#2a2a2a' : '#f0f2f5', padding: '12px', borderRadius: '10px' }}>
              <User size={18} color="#888" style={{ marginLeft: '10px' }} />
              <input type="text" required placeholder="محمد أحمد" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ backgroundColor: 'transparent', border: 'none', color: darkMode ? '#fff' : '#333', outline: 'none', width: '100%' }} />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>البريد الإلكتروني</label>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: darkMode ? '#2a2a2a' : '#f0f2f5', padding: '12px', borderRadius: '10px' }}>
              <Mail size={18} color="#888" style={{ marginLeft: '10px' }} />
              <input type="email" required placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ backgroundColor: 'transparent', border: 'none', color: darkMode ? '#fff' : '#333', outline: 'none', width: '100%' }} />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>رقم البطاقة (الفيزا)</label>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: darkMode ? '#2a2a2a' : '#f0f2f5', padding: '12px', borderRadius: '10px' }}>
              <CreditCard size={18} color="#888" style={{ marginLeft: '10px' }} />
              <input type="text" required placeholder="1234 5678 9101 1121" value={formData.cardNumber} onChange={(e) => setFormData({...formData, cardNumber: e.target.value})} style={{ backgroundColor: 'transparent', border: 'none', color: darkMode ? '#fff' : '#333', outline: 'none', width: '100%' }} />
            </div>
          </div>

          <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#2dbb54', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
            تأكيد الدفع والاشتراك فوراً
          </button>
        </form>

        {/* ملخص الطلب بجانب الفورم */}
        <div style={{
          backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', padding: '30px', borderRadius: '20px',
          width: '100%', maxWidth: '320px', boxShadow: '0 10px 25px rgba(0,0,0,0.03)'
        }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '800', borderBottom: '1px solid #333', paddingBottom: '10px' }}>ملخص الحساب 📑</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}><span>الباقة المختارة:</span><strong style={{ color: '#ff5e62' }}>{planName}</strong></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}><span>المبلغ المستحق:</span><strong>{planPrice}</strong></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2dbb54', fontSize: '13px', backgroundColor: 'rgba(45,187,84,0.1)', padding: '10px', borderRadius: '8px' }}>
            <ShieldCheck size={18} /> دفع آمن ومُشفر 100%
          </div>
        </div>

      </div>
    </div>
  );
}
export default Check;