import React, { useState, useEffect } from 'react';
import { Search, Bell, User, LogOut, Sun, Moon, Menu, X } from 'lucide-react'; // 💡 ضفنا أزرار الـ Menu والـ X للموبايل
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false); 
  const [profileOpen, setProfileOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // 💡 حالة لمراقبة فتح قائمة الموبايل
  
  // مراقبة عرض الشاشة حركياً
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [notifications] = useState([
    { id: 1, text: "تم إضافة الحلقة الأخيرة من مسلسل الحشاشين الآن! 🔥", time: "منذ دقيقتين" },
    { id: 2, text: "فيلم Oppenheimer متوفر الآن بجودة 4K مترجم 🎬", time: "منذ ساعة" },
    { id: 3, text: "اشتراكك ينتهي بعد 3 أيام، جدد الآن لتجنب الفواصل 🎟️", time: "منذ يوم" }
  ]);
  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

    // مراقبة حجم الشاشة أثناء تغيير المقاس
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMobileMenuOpen(false); // إغلاق قائمة الموبايل تلقائياً لو الشاشة كبرت
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    window.dispatchEvent(new Event('themeChange'));
  };

  const handleBellClick = () => {
    setNotificationsOpen(!notificationsOpen);
    setProfileOpen(false);
    setUnreadCount(0);
  };

  const getNavbarBg = () => {
    if (isHomePage) {
      return isScrolled ? '#141414' : 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)';
    }
    return darkMode ? '#1e1e1e' : '#ffffff';
  };

  const navBgColor = getNavbarBg();
  const navTextColor = isHomePage ? '#e5e5e5' : (darkMode ? '#e5e5e5' : '#555');
  const navActiveColor = isHomePage ? '#ffffff' : (darkMode ? '#ffffff' : '#ff5e62');
  const navShadow = isHomePage ? 'none' : (darkMode ? '0 2px 10px rgba(0,0,0,0.5)' : '0 2px 10px rgba(0,0,0,0.06)');
  const iconColor = isHomePage ? '#ffffff' : (darkMode ? '#e5e5e5' : '#555');

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', height: '70px', padding: isMobile ? '0 4%' : '0 6%',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000,
      background: navBgColor, boxShadow: navShadow, transition: 'all 0.4s ease',
      boxSizing: 'border-box', direction: 'rtl'
    }}>
      
      {/* اليمين: اللوجو + القائمة (تتحول لقائمة منسدلة في الموبايل) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        {/* زرار البرجر المخصص للموبايل فقط */}
        {isMobile && (
          <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: iconColor }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        )}

        <h1 onClick={() => navigate('/')} style={{ color: '#E50914', fontSize: isMobile ? '22px' : '26px', fontWeight: '900', margin: 0, cursor: 'pointer' }}>
          NETFLIX
        </h1>
        
        {/* الروابط: تظهر عادية في الكمبيوتر، وقائمة منسدلة متحركة في الموبايل */}
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          gap: isMobile ? '0' : '20px', 
          margin: 0, 
          padding: isMobile ? '20px 0' : '0', 
          color: navTextColor, 
          fontSize: '15px', 
          fontWeight: '600',
          alignItems: isMobile ? 'flex-start' : 'center',
          flexDirection: isMobile ? 'column' : 'row',
          position: isMobile ? 'absolute' : 'static',
          top: '70px',
          right: 0,
          width: isMobile ? '100%' : 'auto',
          backgroundColor: isMobile ? (darkMode || isHomePage ? '#141414' : '#ffffff') : 'transparent',
          boxShadow: isMobile ? '0 10px 15px rgba(0,0,0,0.2)' : 'none',
          maxHeight: isMobile ? (mobileMenuOpen ? '300px' : '0px') : 'none',
          opacity: isMobile ? (mobileMenuOpen ? 1 : 0) : 1,
          overflow: 'hidden',
          transition: 'all 0.4s ease-in-out',
          zIndex: 999
        }}>
          <li style={{ padding: isMobile ? '12px 25px' : '0', width: isMobile ? '100%' : 'auto' }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ color: location.pathname === '/' ? navActiveColor : navTextColor, textDecoration: 'none', fontWeight: '700', display: 'block' }}>الرئيسية</Link>
          </li>
          <li style={{ padding: isMobile ? '12px 25px' : '0', width: isMobile ? '100%' : 'auto' }}>
            <Link to="/service" onClick={() => setMobileMenuOpen(false)} style={{ color: location.pathname === '/service' ? navActiveColor : navTextColor, textDecoration: 'none', display: 'block' }}>خدمات</Link>
          </li>
          <li style={{ padding: isMobile ? '12px 25px' : '0', width: isMobile ? '100%' : 'auto' }}>
            <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: location.pathname === '/pricing' ? navActiveColor : navTextColor, textDecoration: 'none', display: 'block' }}>الاشتراكات 🎟️</Link>
          </li>
          <li onClick={() => { navigate('/proudects', { state: { defaultTab: 'series' } }); setMobileMenuOpen(false); }} style={{ padding: isMobile ? '12px 25px' : '0', color: location.state?.defaultTab === 'series' && location.pathname === '/proudects' ? navActiveColor : navTextColor, cursor: 'pointer', width: '100%' }}>المسلسلات</li>
          <li onClick={() => { navigate('/proudects', { state: { defaultTab: 'foreign-movies' } }); setMobileMenuOpen(false); }} style={{ padding: isMobile ? '12px 25px' : '0', color: location.state?.defaultTab === 'foreign-movies' && location.pathname === '/proudects' ? navActiveColor : navTextColor, cursor: 'pointer', width: '100%' }}>الأفلام</li>
        </ul>
      </div>

      {/* الشمال: أزرار التحكم والبروفايل (تظل متناسقة ومتقاربة في الموبايل) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '22px', color: iconColor, position: 'relative' }}>
        
        {/* زرار الثيم */}
        {!isHomePage && (
          <button 
            onClick={toggleTheme}
            style={{
              background: 'none', border: 'none', color: iconColor, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px'
            }}
          >
            {darkMode ? <Sun size={isMobile ? 18 : 20} style={{ color: '#ffb400' }} /> : <Moon size={isMobile ? 18 : 20} />}
          </button>
        )}

        {/* زرار البحث الذكي للموبايل والكمبيوتر */}
        <div style={{ 
          display: 'flex', alignItems: 'center', 
          border: searchOpen ? (isHomePage || darkMode ? '1px solid #555' : '1px solid #ddd') : 'none', 
          backgroundColor: searchOpen ? (isHomePage || darkMode ? 'rgba(0,0,0,0.6)' : '#f0f2f5') : 'transparent',
          padding: '5px 10px', borderRadius: '20px', transition: 'all 0.3s' 
        }}>
          <Search size={isMobile ? 18 : 20} style={{ cursor: 'pointer', color: iconColor }} onClick={() => setSearchOpen(!searchOpen)} />
          <input 
            type="text" placeholder="البحث..." 
            style={{
              width: searchOpen ? (isMobile ? '80px' : '140px') : '0px', opacity: searchOpen ? 1 : 0, transition: 'all 0.3s',
              backgroundColor: 'transparent', border: 'none', color: isHomePage || darkMode ? '#fff' : '#333',
              outline: 'none', paddingRight: searchOpen ? '6px' : '0px', fontSize: '12px'
            }}
          />
        </div>

        {/* 🔔 زرار وقائمة الإشعارات المنبثقة */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <div onClick={handleBellClick} style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Bell size={isMobile ? 18 : 20} style={{ color: iconColor }} />
            {unreadCount > 0 && (
              <span style={{
                position: 'absolute', top: '-4px', right: '-4px', backgroundColor: '#E50914',
                color: 'white', fontSize: '9px', fontWeight: 'bold', borderRadius: '50%',
                width: '14px', height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {unreadCount}
              </span>
            )}
          </div>

          {/* قائمة الإشعارات المتجاوبة */}
          {notificationsOpen && (
            <div style={{
              position: 'absolute', top: '45px', left: isMobile ? '-70px' : '-40px',
              backgroundColor: isHomePage || darkMode ? '#141414' : '#ffffff',
              border: isHomePage || darkMode ? '1px solid #333' : '1px solid #e1e4e8',
              borderRadius: '12px', width: isMobile ? '250px' : '280px', padding: '10px 0',
              boxShadow: '0px 10px 30px rgba(0,0,0,0.4)', zIndex: 2000
            }}>
              <div style={{ 
                padding: '5px 15px 10px 15px', 
                borderBottom: isHomePage || darkMode ? '1px solid #222' : '1px solid #eee', 
                fontSize: '13px', fontWeight: 'bold', color: isHomePage || darkMode ? '#fff' : '#141414' 
              }}>
                الإشعارات الأخيرة 🍿
              </div>
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {notifications.map((notif) => (
                  <div key={notif.id} style={{
                    padding: '10px 15px', fontSize: '12px', 
                    borderBottom: isHomePage || darkMode ? '1px solid #222' : '1px solid #f9f9f9',
                    color: isHomePage || darkMode ? '#bbb' : '#555', textDirection: 'right'
                  }}>
                    <div>{notif.text}</div>
                    <div style={{ fontSize: '10px', color: '#888', marginTop: '3px' }}>{notif.time}</div>
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
            width: isMobile ? '32px' : '36px', height: isMobile ? '32px' : '36px', 
            backgroundColor: isHomePage || darkMode ? '#333' : '#f0f2f5', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}
        >
          <User size={isMobile ? 16 : 18} />
          
          {profileOpen && (
            <div style={{
              position: 'absolute', top: '50px', left: '0px', 
              backgroundColor: isHomePage || darkMode ? '#141414' : '#ffffff',
              border: isHomePage || darkMode ? '1px solid #333' : '1px solid #e1e4e8', 
              borderRadius: '12px', padding: '12px', width: '160px',
              display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 2000
            }}>
              <div onClick={() => navigate('/login')} style={{ fontSize: '13px', color: isHomePage || darkMode ? '#fff' : '#333', display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer' }}>
                <User size={14} style={{ color: '#ff5e62' }} /> حسابي
              </div>
              <hr style={{ border: 'none', height: '1px', backgroundColor: isHomePage || darkMode ? '#222' : '#eee', margin: '2px 0' }} />
              <div onClick={() => navigate('/logout')} style={{ fontSize: '13px', color: '#ff5e62', display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer' }}>
                <LogOut size={14} /> خروج
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;