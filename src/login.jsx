import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isSignIn, setIsSignIn] = useState(true); // للتنقل بين تسجيل الدخول وإنشاء الحساب
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // مؤقتاً عند الضغط على الزرار هينقله للصفحة الرئيسية
    navigate('/');
  };

  return (
    <div style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925")`,
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      direction: 'rtl'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        padding: '60px',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '450px',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ marginBottom: '28px', fontSize: '32px', fontWeight: 'bold' }}>
          {isSignIn ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
        </h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input type="email" placeholder="البريد الإلكتروني" required style={inputStyle} />
          <input type="password" placeholder="كلمة المرور" required style={inputStyle} />
          {!isSignIn && <input type="password" placeholder="تأكيد كلمة المرور" required style={inputStyle} />}
          
          <button type="submit" style={{
            backgroundColor: '#E50914',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '20px'
          }}>
            {isSignIn ? 'تسجيل الدخول' : 'تسجيل حساب جديد'}
          </button>
        </form>

        <p style={{ marginTop: '30px', color: '#737373' }}>
          {isSignIn ? 'جديد على نيتفليكس؟ ' : 'لديك حساب بالفعل؟ '}
          <span 
            onClick={() => setIsSignIn(!isSignIn)} 
            style={{ color: 'white', cursor: 'pointer', textDecoration: 'underline' }}
          >
            {isSignIn ? 'اشترك الآن' : 'سجل دخولك'}
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  backgroundColor: '#333',
  border: 'none',
  borderRadius: '4px',
  color: 'white',
  height: '50px',
  padding: '16px',
  fontSize: '16px',
  boxSizing: 'border-box'
};

export default Login;