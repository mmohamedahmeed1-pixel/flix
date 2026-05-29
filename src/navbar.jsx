import React, { useState, useEffect } from 'react';
import { Search, Bell, User, LogOut, Sun, Moon } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false); 
  const [profileOpen, setProfileOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 🔔 إدارة حالة الإشعارات والعدد غير المقروء (المستوى الثاني)
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3); // يبدأ بـ 3 إشعارات غير مقروءة

  // مصفوفة تحتوي على الإشعارات السينمائية التفاعلية
  const [notifications] = useState([
    { id: 1, text: "تم إضافة الحلقة الأخيرة من مسلسل الحشاشين الآن! 🔥", time: "منذ دقيقتين" },
    { id: 2, text: "فيلم Oppenheimer متوفر الآن بجودة 4K مترجم 🎬", time: "منذ ساعة" },
    { id: 3, text: "اشتراكك ينتهي بعد 3 أيام، جدد الآن لتجنب الفواصل 🎟️", time: "منذ يوم" }
  ]);
  
  // 💡 إدارة وضع الـ Dark Mode وحفظه في المتصفح
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // مراقبة تغيير الثيم وتطبيقه على جسم الصفحة بالكامل (body)
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#141414';
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.style.backgroundColor = isHomePage ? '#141414' : '#f4f6f9';
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // دالة تبديل الثيم
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // إرسال حدث مخصص عشان صفحة البرودكتس والخدمات تحس بالتغيير فوراً
    window.dispatchEvent(new Event('themeChange'));
  };

  // دالة التعامل مع فتح وقراءة الإشعارات
  const handleBellClick = () => {
    setNotificationsOpen(!notificationsOpen);
    setProfileOpen(false); // إغلاق قائمة البروفايل تلقائياً إذا كانت مفتوحة
    setUnreadCount(0); // تصفير العداد بمجرد فتح القائمة
  };

  // 🎨 الألوان الديناميكية للـ Navbar بناءً على الصفحة والـ Dark Mode
  const getNavbarBg = () => {
    if (isHomePage) {
      return isScrolled ? '#141414' : 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)';
    }
    return darkMode ? '#1e1e1e' : '#ffffff'; // يقلب رمادي غامق في الدارك مود وأبيض في اللايت
  };

  const navBgColor = getNavbarBg();
  const navTextColor = isHomePage ? '#e5e5e5' : (darkMode ? '#e5e5e5' : '#555');
  const navActiveColor = isHomePage ? '#ffffff' : (darkMode ? '#ffffff' : '#ff5e62');
  const navShadow = isHomePage ? 'none' : (darkMode ? '0 2px 10px rgba(0,0,0,0.5)' : '0 2px 10px rgba(0,0,0,0.06)');
  const iconColor = isHomePage ? '#ffffff' : (darkMode ? '#e5e5e5' : '#555');

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', height: '70px', padding: '0 6%',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000,
      background: navBgColor, boxShadow: navShadow, transition: 'all 0.4s ease',
      boxSizing: 'border-box', direction: 'rtl'
    }}>
      {/* اليمين: اللوجو والقائمة */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <h1 onClick={() => navigate('/')} style={{ color: '#E50914', fontSize: '26px', fontWeight: '900', margin: 0, cursor: 'pointer' }}>
          NETFLIX
        </h1>
        <ul style={{ 
          display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0, 
          color: navTextColor, fontSize: '15px', fontWeight: '600', cursor: 'pointer',
          alignItems: 'center'
        }}>
          <li>
            <Link to="/" style={{ color: location.pathname === '/' ? navActiveColor : navTextColor, textDecoration: 'none', fontWeight: '700' }}>الرئيسية</Link>
          </li>
          <li>
            <Link to="/service" style={{ color: location.pathname === '/service' ? navActiveColor : navTextColor, textDecoration: 'none' }}>خدمات</Link>
          </li>
          {/* 💡 لينك الاشتراكات تم إضافته هنا بستايل متناسق مع باقي اللينكات */}
          <li>
            <Link to="/pricing" style={{ color: location.pathname === '/pricing' ? navActiveColor : navTextColor, textDecoration: 'none' }}>الاشتراكات 🎟️</Link>
          </li>
          <li onClick={() => navigate('/proudects', { state: { defaultTab: 'series' } })} style={{ color: location.state?.defaultTab === 'series' && location.pathname === '/proudects' ? navActiveColor : navTextColor }}>المسلسلات</li>
          <li onClick={() => navigate('/proudects', { state: { defaultTab: 'foreign-movies' } })} style={{ color: location.state?.defaultTab === 'foreign-movies' && location.pathname === '/proudects' ? navActiveColor : navTextColor }}>الأفلام</li>
        </ul>
      </div>

      {/* الشمال: أزرار التحكم والبروفايل */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '22px', color: iconColor, position: 'relative' }}>
        
        {/* 💡 زرار التبديل السحري بين الـ Dark و Light Mode */}
        {!isHomePage && (
          <button 
            onClick={toggleTheme}
            style={{
              background: 'none', border: 'none', color: iconColor, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {darkMode ? <Sun size={20} style={{ color: '#ffb400' }} /> : <Moon size={20} />}
          </button>
        )}

        {/* زرار البحث */}
        <div style={{ 
          display: 'flex', alignItems: 'center', 
          border: searchOpen ? (isHomePage || darkMode ? '1px solid #555' : '1px solid #ddd') : 'none', 
          backgroundColor: searchOpen ? (isHomePage || darkMode ? 'rgba(0,0,0,0.6)' : '#f0f2f5') : 'transparent',
          padding: '6px 12px', borderRadius: '20px', transition: 'all 0.3s' 
        }}>
          <Search size={20} style={{ cursor: 'pointer', color: iconColor }} onClick={() => setSearchOpen(!searchOpen)} />
          <input 
            type="text" placeholder="البحث السريع..." 
            style={{
              width: searchOpen ? '140px' : '0px', opacity: searchOpen ? 1 : 0, transition: 'all 0.3s',
              backgroundColor: 'transparent', border: 'none', color: isHomePage || darkMode ? '#fff' : '#333',
              outline: 'none', paddingRight: searchOpen ? '8px' : '0px', fontSize: '13px'
            }}
          />
        </div>

        {/* 🔔 زرار الإشعارات مع القائمة المنسدلة الذكية */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <div onClick={handleBellClick} style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Bell size={20} style={{ color: iconColor }} />
            {unreadCount > 0 && (
              <span style={{
                position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#E50914',
                color: 'white', fontSize: '10px', fontWeight: 'bold', borderRadius: '50%',
                width: '15px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 8px rgba(229, 9, 20, 0.6)'
              }}>
                {unreadCount}
              </span>
            )}
          </div>

          {/* القائمة المنسدلة الخاصة بالإشعارات */}
          {notificationsOpen && (
            <div style={{
              position: 'absolute', top: '45px', left: '-40px',
              backgroundColor: isHomePage || darkMode ? '#141414' : '#ffffff',
              border: isHomePage || darkMode ? '1px solid #333' : '1px solid #e1e4e8',
              borderRadius: '12px', width: '280px', padding: '10px 0',
              boxShadow: '0px 10px 30px rgba(0,0,0,0.4)', zIndex: 2000,
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                padding: '5px 15px 10px 15px', 
                borderBottom: isHomePage || darkMode ? '1px solid #222' : '1px solid #eee', 
                fontSize: '14px', fontWeight: 'bold', 
                color: isHomePage || darkMode ? '#fff' : '#141414' 
              }}>
                الإشعارات الأخيرة 🍿
              </div>
              <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
                {notifications.map((notif) => (
                  <div key={notif.id} style={{
                    padding: '12px 15px', fontSize: '13px', 
                    borderBottom: isHomePage || darkMode ? '1px solid #222' : '1px solid #f9f9f9',
                    color: isHomePage || darkMode ? '#bbb' : '#555', transition: 'background 0.2s', cursor: 'pointer',
                    textAlign: 'right'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isHomePage || darkMode ? '#222' : '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div>{notif.text}</div>
                    <div style={{ fontSize: '11px', color: '#888', marginTop: '5px' }}>{notif.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* البروفايل */}
        <div 
          onClick={() => { setProfileOpen(!profileOpen); setNotificationsOpen(false); }} 
          style={{ 
            width: '36px', height: '36px', backgroundColor: isHomePage || darkMode ? '#333' : '#f0f2f5', 
            border: isHomePage || darkMode ? '1px solid #444' : '1px solid #e1e4e8', borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: iconColor
          }}
        >
          <User size={18} />
          
          {profileOpen && (
            <div style={{
              position: 'absolute', top: '50px', left: '0px', 
              backgroundColor: isHomePage || darkMode ? '#141414' : '#ffffff',
              border: isHomePage || darkMode ? '1px solid #333' : '1px solid #e1e4e8', 
              borderRadius: '12px', padding: '14px', width: '180px',
              display: 'flex', flexDirection: 'column', gap: '12px', 
              boxShadow: '0px 10px 25px rgba(0,0,0,0.3)', whiteSpace: 'nowrap', zIndex: 2000
            }}>
              <div onClick={() => navigate('/login')} style={{ fontSize: '14px', color: isHomePage || darkMode ? '#fff' : '#333', display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer', fontWeight: '600' }}>
                <User size={16} style={{ color: '#ff5e62' }} /> تسجيل دخول / حساب
              </div>
              <hr style={{ border: 'none', height: '1px', backgroundColor: isHomePage || darkMode ? '#222' : '#eee', margin: '4px 0' }} />
              <div onClick={() => navigate('/logout')} style={{ fontSize: '14px', color: '#ff5e62', display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer', fontWeight: '600' }}>
                <LogOut size={16} /> تسجيل الخروج
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;