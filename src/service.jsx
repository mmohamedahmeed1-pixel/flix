import React from 'react';
import { Tv, Download, ShieldCheck, Users, Headphones, Clapperboard } from 'lucide-react';

function Service() {
  // بيانات الخدمات والمميزات المتاحة في الموقع
  const servicesList = [
    {
      id: 1,
      title: "جودة بث فائقة 4K Ultra HD",
      description: "استمتع بمشاهدة أفلامك ومسلسلاتك المفضلة بأعلى دقة ممكنة وتقنيات صوت سينمائية مجسمة تجعلك في قلب الحدث.",
      icon: <Tv size={32} color="#ff5e62" />,
      bgColor: "#fff0f1"
    },
    {
      id: 2,
      title: "التحميل والمشاهدة بدون إنترنت",
      description: "حمل عروضك المفضلة بسهولة على أي جهاز تملكّه وشاهدها في أي وقت وأي مكان حتى لو كنت خارج نطاق التغطية.",
      icon: <Download size={32} color="#007aff" />,
      bgColor: "#e6f2ff"
    },
    {
      id: 3,
      title: "مشاهدة آمنة تماماً وبدون إعلانات",
      description: "نضمن لك تجربة مشاهدة متواصلة ونظيفة 100% بدون أي إعلانات مزعجة أو نوافذ منبثقة، لتستمتع بكل ثانية.",
      icon: <ShieldCheck size={32} color="#2dbb54" />,
      bgColor: "#eaf8ee"
    },
    {
      id: 4,
      title: "شاشات متعددة للحساب الواحد",
      description: "يمكنك مشاركة متعة المشاهدة مع عائلتك وأصدقائك، حيث يدعم الحساب الواحد المشاهدة على أكثر من شاشة في نفس الوقت.",
      icon: <Users size={32} color="#ff9500" />,
      bgColor: "#fff5e6"
    },
    {
      id: 5,
      title: "دعم فني متواصل 24/7",
      description: "فريق الدعم الفني متواجد دائماً لخدمتك وحل أي استفسار أو مشكلة تواجهك في أسرع وقت ممكن طوال أيام الأسبوع.",
      icon: <Headphones size={32} color="#af52de" />,
      bgColor: "#f5eafa"
    },
    {
      id: 6,
      title: "تحديث يومي للمحتوى السينمائي",
      description: "نضيف يومياً أحدث الأفلام والمسلسلات الحصرية العربية والأجنبية فور صدورها، لتكون أول من يشاهد كل جديد.",
      icon: <Clapperboard size={32} color="#5856d6" />,
      bgColor: "#eeeefa"
    }
  ];

  return (
    <div style={{
      backgroundColor: '#f4f6f9', // نفس الخلفية المبهجة المريحة للعين
      minHeight: '100vh',
      padding: '130px 6% 60px 6%', // مسافة علوية مناسبة عشان الناف بار
      direction: 'rtl',
      fontFamily: 'sans-serif'
    }}>
      
      {/* مقدمة الصفحة */}
      <div style={{
        textAlign: 'center',
        marginBottom: '50px',
        maxWidth: '700px',
        margin: '0 auto 50px auto'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', marginBottom: '15px' }}>
          باقة خدماتنا ومميزات المنصة ✨
        </h2>
        <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>
          نحن هنا لنقدم لك التجربة السينمائية الأفضل على الإطلاق. اكتشف ما الذي يجعل منصتنا الخيار الأول لعشاق الأفلام والمسلسلات.
        </p>
      </div>

      {/* شبكة عرض الخدمات المتجاوبة */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px'
      }}>
        {servicesList.map((service) => (
          <div
            key={service.id}
            style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
            }}
          >
            {/* الدائرة الحاضنة للأيقونة بلونها الخاص */}
            <div style={{
              backgroundColor: service.bgColor,
              width: '64px',
              height: '64px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              {service.icon}
            </div>

            {/* عنوان الخدمة */}
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '12px'
            }}>
              {service.title}
            </h3>

            {/* تفاصيل وشرح الخدمة */}
            <p style={{
              fontSize: '14px',
              color: '#555',
              lineHeight: '1.7',
              margin: 0
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Service;