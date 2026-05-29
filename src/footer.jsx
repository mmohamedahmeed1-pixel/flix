import React from 'react';

function Footer() {
  const footerLinks = [
    "الأسئلة الشائعة", "مركز المساعدة", "الحساب", "مركز الإعلام",
    "علاقات المستثمرين", "الوظائف", "طرق المشاهدة", "شروط الاستخدام",
    "الخصوصية", "إعدادات ملفات تعريف الارتباط", "المعلومات القانونية", "اتصل بنا"
  ];

  return (
    <footer style={{
      backgroundColor: '#141414',
      color: '#808080',
      padding: '50px 4% 30px 4%',
      fontSize: '14px',
      borderTop: '8px solid #222', // خط فاصل عريض زي نيتفليكس الأصلي
      direction: 'rtl' // عشان يدعم التصفح العربي بشكل صحيح
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* رقم خدمة العملاء */}
        <p style={{ marginBottom: '30px', cursor: 'pointer' }}>
          هل لديك أسئلة؟ اتصل بنا على <span style={{ textDecoration: 'underline' }}>1-800-812-1454</span>
        </p>

        {/* شبكة الروابط المتجاوبة */}
        <div style={{
          display: 'grid',
          // الـ Grid هنا سحري: هيعمل 4 أعمدة على الشاشات الكبيرة، وعمودين أو عمود على الموبايل تلقائياً
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {footerLinks.map((link, index) => (
            <a 
              key={index} 
              href="#" 
              style={{ 
                color: '#808080', 
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* زر اختيار اللغة */}
        <div style={{ marginBottom: '30px' }}>
          <select style={{
            backgroundColor: 'transparent',
            color: '#808080',
            border: '1px solid #333',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* حقوق الملكية */}
        <p style={{ fontSize: '12px', margin: 0 }}>نيتفليكس مصر - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;