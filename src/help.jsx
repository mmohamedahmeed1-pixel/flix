import React, { useState, useContext } from 'react';
import { MovieContext } from './CartContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Help() {
  const { darkMode } = useContext(MovieContext);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "إزاي أقدر ألغي اشتراكي؟", a: "تقدر تلغي اشتراكك في أي وقت من إعدادات الحساب بضغطة واحدة." },
    { q: "هل الموقع بيدعم جودة 4K؟", a: "أيوة، لو مشترك في الخطة المميزة هتقدر تتفرج بجودة 4K Ultra HD." },
    { q: "أقدر أحمل الأفلام أشوفها أوفلاين؟", a: "طبعاً، ميزة التحميل متاحة في الخطة القياسية والمميزة." }
  ];

  return (
    <div style={{ padding: '120px 6%', maxWidth: '800px', margin: '0 auto', direction: 'rtl' }}>
      <h2 style={{ textAlign: 'center', color: darkMode ? '#fff' : '#000', marginBottom: '40px' }}>الأسئلة الشائعة ❓</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '15px', backgroundColor: darkMode ? '#1e1e1e' : '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <div 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}
          >
            {faq.q} {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </div>
          {openIndex === index && <div style={{ padding: '20px', backgroundColor: darkMode ? '#252525' : '#f9f9f9', color: darkMode ? '#ccc' : '#666' }}>{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}
export default Help;