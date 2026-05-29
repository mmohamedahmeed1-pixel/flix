import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Play, Star, Search, Sparkles } from 'lucide-react';

function Proudects() {
  const location = useLocation();
  const navigate = useNavigate(); // 💡 أداة التنقل لصفحة التفاصيل الجديدة
  const defaultTab = location.state?.defaultTab || 'all';
  
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [searchQuery, setSearchQuery] = useState('');
  
  // 💡 قراءة حالة الـ Dark Mode الحالية
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  // الاستماع لزرار التبديل اللي في الناف بار عشان يقلب الألوان هنا فوراً
  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(localStorage.getItem('theme') === 'dark');
    };
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  useEffect(() => {
    if (location.state?.defaultTab) {
      setActiveTab(location.state.defaultTab);
    }
  }, [location.state]);

  // 🎬 قاعدة بيانات ضخمة ومحدثة بأفلام ومسلسلات حقيقية مع التريلرات والوصف الكامل
  const realMediaData = [
    // --- أفلام أجنبية ---
    { id: "f1", title: "Inception", category: "foreign-movies", rating: "8.8", year: "2010", duration: "2h 28m", description: "عميل سري بارع يتم تعيينه لزرع فكرة داخل عقل رئيس تنفيذي لبدء حياة جديدة، لكن الأمور تتعقد داخل الأحلام.", trailer: "8hP9D6kZseM", img: "https://image.tmdb.org/t/p/w500/l946nmS4Sg6b699Ui86Z7R6I6jX.jpg" },
    { id: "f2", title: "Interstellar", category: "foreign-movies", rating: "8.6", year: "2014", duration: "2h 49m", description: "مجموعة من رواد الفضاء يسافرون عبر ثقب دودي في محاولة للبحث عن كوكب جديد لإنقاذ البشرية من الفناء الأكيد.", trailer: "zSWdZVtXT7E", img: "https://image.tmdb.org/t/p/w500/gEU2vYnzmUjC46V2v7Vv6asYgYJ.jpg" },
    { id: "f3", title: "The Dark Knight", category: "foreign-movies", rating: "9.0", year: "2008", duration: "2h 32m", description: "باتمان يواجه الشرير المرعب 'الجوكر' الذي يسعى لنشر الفوضى والدمار التام في مدينة غوثام واختبار المبادئ الأخلاقية.", trailer: "EXeTwQWrcwY", img: "https://image.tmdb.org/t/p/w500/qJ2tWGBbeZls6Z3YmP1fC9z7X0Y.jpg" },
    { id: "f4", title: "Avatar: The Way of Water", category: "foreign-movies", rating: "7.6", year: "2022", duration: "3h 12m", description: "يعود جيك سولي وعائلته لمواجهة تهديدات قديمة على كوكب باندورا، مما يجبرهم على استكشاف مناطق مائية وثقافات جديدة.", trailer: "d9MyW72ELq0", img: "https://image.tmdb.org/t/p/w500/t6HI73U63wSgWjInpU6ndZ960vO.jpg" },
    { id: "f5", title: "Oppenheimer", category: "foreign-movies", rating: "8.4", year: "2023", duration: "3h 00m", description: "قصة العالم الفيزيائي جي روبرت أوبنهايمر ودوره القيادي في مشروع مانهاتن لتطوير القنبلة الذرية وتغيير مسار التاريخ البشري.", trailer: "uYPbbksJxIg", img: "https://image.tmdb.org/t/p/w500/8Gxv8gS6eeh68jZ6gUvS1vS9g3B.jpg" },
    { id: "f6", title: "Joker", category: "foreign-movies", rating: "8.4", year: "2019", duration: "2h 02m", description: "دراسة شخصية سوداوية لـ 'آرثر فليك'، الكوميدي الفاشل الذي يعاني من التهميش المجتمعي ليتحول تدريجياً إلى أمير الجريمة.", trailer: "zAGVQLHvwOY", img: "https://image.tmdb.org/t/p/w500/udDclsv6Dl9vRiuvun073fg3wun.jpg" },
    { id: "f7", title: "The Matrix", category: "foreign-movies", rating: "8.7", year: "1999", duration: "2h 16m", description: "مبُرمج حاسوب يكتشف أن العالم الذي يعيش فيه ما هو إلا واقع افتراضي تم إنشاؤه بواسطة آلات ذكية مستبدة.", trailer: "vKQi3bBA1y8", img: "https://image.tmdb.org/t/p/w500/f89U3w9mBoRSPyw6i86wW3Zfy7v.jpg" },
    { id: "f8", title: "Gladiator II", category: "foreign-movies", rating: "7.2", year: "2024", duration: "2h 28m", description: "بعد سنوات من تضحية ماكسيموس، يجبر لوسيوس على دخول الكلوسيموم لاستعادة مجد روما المفقود ومواجهة الأباطرة الطغاة.", trailer: "1VnghBKhXp0", img: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysR4IuLIiA6C74vM.jpg" },

    // --- سينما عربية ---
    { id: "a1", title: "كيرة والجن", category: "arabic-movies", rating: "8.2", year: "2022", duration: "2h 55m", description: "يرصد الفيلم حالة الغليان التي كان يموج بها الشارع المصري بالتزامن مع اندلاع ثورة 1919، وقصص أبطال المقاومة السرية ضد الاحتلال.", trailer: "YpXb_6D8W_M", img: "https://image.tmdb.org/t/p/w500/gO9F74zK9tWkZ7qF8Y7EclQZg2E.jpg" },
    { id: "a2", title: "الفيل الأزرق 2", category: "arabic-movies", rating: "8.0", year: "2019", duration: "2h 10m", description: "تبدأ الأحداث بعد 5 سنوات من الجزء الأول، حيث يتم استدعاء الدكتور يحيى لقسم الحالات الخطيرة ليجد من يهدد حياة أسرته.", trailer: "PdC8pTNhv9w", img: "https://image.tmdb.org/t/p/w500/7V9bUOnB07xZ10IasH568I9YQvX.jpg" },
    { id: "a3", title: "ولاد رزق 3: القاضية", category: "arabic-movies", rating: "8.1", year: "2024", duration: "2h 15m", description: "بعد سنوات من انفصال الأشقاء، يعود شبح قديم ليجبرهم على العودة لحياة الجريمة والسرقة في عملية مصيرية هي الأكبر في تاريخهم.", trailer: "vjY_mXp7X0Y", img: "https://image.tmdb.org/t/p/w500/u3B2bU5K3Mxs6Z9v0zD3N6z7C8B.jpg" },
    { id: "a4", title: "الممر", category: "arabic-movies", rating: "7.9", year: "2019", duration: "2h 30m", description: "يتناول الفيلم قوات الصاعقة المصرية خلال حرب الاستنزاف، وعلى رأسهم القائد نور، ومرحلة إعادة بناء الثقة للجنود البواسل.", trailer: "gn9Zf6VvS9o", img: "https://image.tmdb.org/t/p/w500/b8bY6X3V8MxsZ7v0zD3N6z7C8C.jpg" },
    { id: "a5", title: "بيت الروبي", category: "arabic-movies", rating: "7.4", year: "2023", duration: "1h 45m", description: "في إطار كوميدي لايت، يعيش إبراهيم الروبي مع زوجته وأولاده في قرية سياحية، قبل أن يطلب منه شقيقه العودة للقاهرة في رحلة تقلب حياتهم بسبب السوشيال ميديا.", trailer: "dgK6O7nBw9o", img: "https://image.tmdb.org/t/p/w500/a3B2bU5K3Mxs6Z9v0zD3N6z7C8A.jpg" },

    // --- مسلسلات ---
    { id: "s1", title: "Breaking Bad", category: "series", rating: "9.5", year: "2008", duration: "5 مواسم", description: "معلم كيمياء في المدرسة الثانوية يتم تشخيصه بسرطان الرئة الرائع، فيتحول إلى عالم إنتاج الميث لتأمين مستقبل عائلته المالي المستقر.", trailer: "HhesaQXLuRY", img: "https://image.tmdb.org/t/p/w500/zt64zS6eeh68jZ6gUvS1vS9g3B.jpg" },
    { id: "s2", title: "Stranger Things", category: "series", rating: "8.7", year: "2016", duration: "4 مواسم", description: "مجموعة من الأطفال في بلدة صغيرة يكتشفون قوى خارقة للعادة وتجارب حكومية سرية، وبوابة تؤدي إلى عالم موازي مرعب للغاية.", trailer: "b9EkMc79ZSU", img: "https://image.tmdb.org/t/p/w500/x270Zrr270Zrr270Zrr270Zrr.jpg" },
    { id: "s3", title: "Game of Thrones", category: "series", rating: "9.2", year: "2011", duration: "8 مواسم", description: "تتصارع تسع عائلات نبيلة من أجل السيطرة على أراضي ويستروس الأسطورية والعرش الحديدي، بينما يعود عدو من الشمال يهدد فناء البشرية.", trailer: "KPLWWIOCOOQ", img: "https://image.tmdb.org/t/p/w500/7WBiZ7zOf9vRiuvun073fg3wun.jpg" },
    { id: "s4", title: "الحشاشين", category: "series", rating: "8.6", year: "2024", duration: "موسم واحد", description: "ملحمة تاريخية تدور في القرن الحادي عشر حول مؤسس طائفة الحشاشين 'حسن الصباح' ورحلته القيادية في قلعة ألموت ونشر ذعره حول العالم.", trailer: "co4Z1S6eeh6", img: "https://image.tmdb.org/t/p/w500/b8bY6X3V8MxsZ7v0zD3N6z7C8D.jpg" },
    { id: "s5", title: "ما وراء الطبيعة", category: "series", rating: "8.3", year: "2020", duration: "موسم واحد", description: "في ستينات القرن الماضي، يجد طبيب أمراض الدم د. رفعت إسماعيل نفسه وسط سلسلة من الأحداث الخارقة للطبيعة التي يحاول تفكيكها وراء قناعاته العلمية.", trailer: "397-C4L8B9w", img: "https://image.tmdb.org/t/p/w500/p7V9bUOnB07xZ10IasH568I9YQvX.jpg" },
    { id: "s6", title: "Peaky Blinders", category: "series", rating: "8.8", year: "2013", duration: "6 مواسم", description: "قصة عصابة برمنغهام الشهيرة بقيادة التكتيكي المخيف 'توماس شيلبي'، وصعودهم الأسطوري في عالم الجريمة المنظمة والسياسة بعد الحرب العالمية الأولى.", trailer: "oVzVjv6CwiM", img: "https://image.tmdb.org/t/p/w500/v35N0gBGwZ7R6I6jX1XS1n0gBG.jpg" }
  ];

  const filteredMedia = realMediaData.filter(item => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // 💡 الدالة السحرية للانتقال لصفحة التفاصيل وتمرير بيانات الكارت بالكامل
  const handleCardClick = (item) => {
    navigate(`/movie/${item.id}`, { state: { movie: item } });
  };

  return (
    <div style={{ 
      backgroundColor: darkMode ? '#141414' : '#f4f6f9', 
      minHeight: '100vh', 
      color: darkMode ? '#fff' : '#333', 
      padding: '120px 6% 60px 6%', 
      direction: 'rtl',
      transition: 'background-color 0.4s ease, color 0.4s ease'
    }}>
      
      {/* لوحة التحكم */}
      <div style={{ 
        backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', 
        padding: '25px', 
        borderRadius: '16px', 
        boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.05)', 
        marginBottom: '40px',
        transition: 'all 0.4s ease'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', margin: 0, display: 'flex', alignItems: 'center', gap: '12px', color: darkMode ? '#fff' : '#1a1a1a' }}>
            <Sparkles style={{ color: '#ff5e62' }} /> صالة الترفيه المبهجة الكبرى 🎬
          </h2>

          <div style={{ 
            display: 'flex', alignItems: 'center', 
            backgroundColor: darkMode ? '#2a2a2a' : '#f0f2f5', 
            borderRadius: '12px', padding: '10px 16px', width: '100%', maxWidth: '380px', boxSizing: 'border-box', 
            border: darkMode ? '1px solid #333' : '1px solid #e1e4e8' 
          }}>
            <Search size={18} style={{ color: '#999', marginLeft: '12px' }} />
            <input 
              type="text" placeholder="اكتب اسم الفيلم أو المسلسل للبحث فوراً..."
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              style={{ backgroundColor: 'transparent', border: 'none', color: darkMode ? '#fff' : '#333', outline: 'none', width: '100%', fontSize: '14px', fontWeight: '500' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '25px' }}>
          {[
            { id: 'all', label: 'كل الأعمال ✨', color: '#ff5e62' },
            { id: 'arabic-movies', label: 'أفلام عربي 🇪🇬', color: '#2dbb54' },
            { id: 'foreign-movies', label: 'أفلام أجنبي 🎬', color: '#007aff' },
            { id: 'series', label: 'مسلسلات 📺', color: '#ff9500' }
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{
                  backgroundColor: isSelected ? tab.color : (darkMode ? '#2a2a2a' : '#f0f2f5'), 
                  color: isSelected ? 'white' : (darkMode ? '#aaa' : '#555'),
                  border: 'none', padding: '10px 22px', borderRadius: '10px', fontSize: '14px', fontWeight: 'bold',
                  cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: isSelected ? `0 4px 12px ${tab.color}40` : 'none'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {filteredMedia.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#888' }}>
          <p style={{ fontSize: '18px', fontWeight: '500' }}>مفيش أي نتيجة مطابقة للي كتبته.. جرب اسم تاني! 🕵️‍♂️</p>
        </div>
      )}

      {/* الكروت */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px' }}>
        {filteredMedia.map((item) => (
          <div 
            key={item.id} 
            onClick={() => handleCardClick(item)} // 💡 عند الضغط ينقلنا لصفحة التفاصيل فوراً
            style={{ 
              backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', 
              borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', 
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', 
              boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.04)' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = darkMode ? '0 20px 35px rgba(0,0,0,0.6)' : '0 20px 35px rgba(0,0,0,0.1)';
              e.currentTarget.querySelector('.play-btn').style.opacity = '1';
              e.currentTarget.querySelector('.play-btn').style.transform = 'scale(1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = darkMode ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.04)';
              e.currentTarget.querySelector('.play-btn').style.opacity = '0';
              e.currentTarget.querySelector('.play-btn').style.transform = 'scale(0.8)';
            }}
          >
            <div style={{ position: 'relative', width: '100%', paddingTop: '130%', overflow: 'hidden', backgroundColor: '#e1e4e8' }}>
              <img src={item.img} alt={item.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="play-btn" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 94, 98, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transform: 'scale(0.8)', transition: 'all 0.3s ease' }}>
                <div style={{ backgroundColor: '#ff5e62', padding: '16px', borderRadius: '50%', boxShadow: '0 8px 20px rgba(255, 94, 98, 0.4)' }}>
                  <Play size={24} fill="white" color="white" />
                </div>
              </div>
            </div>

            <div style={{ padding: '18px' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '700', color: darkMode ? '#fff' : '#222', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                <span style={{ color: '#888', fontWeight: 'bold' }}>{item.year}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffb400', fontWeight: 'bold' }}><Star size={14} fill="#ffb400" color="#ffb400" /> {item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Proudects;