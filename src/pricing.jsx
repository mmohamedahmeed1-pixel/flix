import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

function Pricing() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const handleThemeChange = () => setDarkMode(localStorage.getItem('theme') === 'dark');
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  const plans = [
    { id: 'basic', name: 'الباقة الأساسية', price: '50 ج.م', icon: <Zap size={24} color="#2dbb54" />, features: ['شاشة واحدة في نفس الوقت', 'جودة عادية SD', 'إعلانات محدودة', 'وصول كامل للأفلام'] },
    { id: 'standard', name: 'الباقة القياسية', price: '100 ج.م', icon: <Sparkles size={24} color="#007aff" />, features: ['شاشتين في نفس الوقت', 'جودة عالية Full HD', 'بدون إعلانات تماماً', 'تحميل للمشاهدة بدون إنترنت'], popular: true },
    { id: 'premium', name: 'الباقة المميزة', price: '150 ج.م', icon: <Crown size={24} color="#ff9500" />, features: ['4 شاشات في نفس الوقت', 'جودة فائقة 4K Ultra HD', 'صوت محيطي ودعم كامل', 'الوصول الحصري للعروض الأولى'] }
  ];

  return (
    <div style={{
      backgroundColor: darkMode ? '#141414' : '#f4f6f9', minHeight: '100vh',
      color: darkMode ? '#fff' : '#333', padding: '120px 6% 60px 6%', direction: 'rtl', transition: 'all 0.4s'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '10px' }}>اختر خطة الاشتراك المناسبة لك 🎟️</h1>
        <p style={{ color: '#888', fontSize: '16px' }}>شاهد جميع الأفلام والمسلسلات الحصرية بجودة عالية وبدون فواصل</p>
      </div>

      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {plans.map((plan) => (
          <div key={plan.id} style={{
            backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
            borderRadius: '20px', padding: '35px', width: '100%', maxWidth: '300px',
            position: 'relative', transition: 'all 0.3s',
            border: plan.popular ? '2px solid #ff5e62' : (darkMode ? '1px solid #333' : '1px solid #e1e4e8'),
            boxShadow: plan.popular ? '0 10px 30px rgba(255,94,98,0.15)' : '0 10px 20px rgba(0,0,0,0.02)'
          }}>
            {plan.popular && <span style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#ff5e62', color: '#fff', padding: '4px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>الأكثر طلباً 🔥</span>}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>{plan.icon} <h3 style={{ margin: 0, fontSize: '20px' }}>{plan.name}</h3></div>
            <div style={{ fontSize: '32px', fontWeight: '900', marginBottom: '25px', color: '#ff5e62' }}>{plan.price}<span style={{ fontSize: '14px', color: '#888', fontWeight: 'normal' }}> / شهرياً</span></div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 35px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {plan.features.map((f, i) => <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: darkMode ? '#ccc' : '#555' }}><Check size={16} color="#2dbb54" /> {f}</li>)}
            </ul>
            <button 
              onClick={() => navigate('/check/subscription', { state: { planName: plan.name, planPrice: plan.price } })} // 💡 تمرير البيانات لصفحة الشراء
              style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', backgroundColor: plan.popular ? '#ff5e62' : (darkMode ? '#333' : '#e1e4e8'), color: plan.popular ? '#fff' : (darkMode ? '#fff' : '#333'), fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}
            >
              اشترك الآن
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Pricing;