import React, { useContext } from 'react';
import { MovieContext } from './CartContext';
import { Heart, Play } from 'lucide-react';

function Watchlist() {
  const { favorites, toggleFavorite, darkMode } = useContext(MovieContext);

  return (
    <div style={{ padding: '120px 6%', direction: 'rtl', minHeight: '80vh' }}>
      <h2 style={{ color: darkMode ? '#fff' : '#000' }}>قائمة مفضلاتي ❤️ ({favorites.length})</h2>
      {favorites.length === 0 ? (
        <p style={{ color: '#888', marginTop: '20px' }}>لسه مفيش أفلام في قائمتك.. روح ضيف شوية!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '25px', marginTop: '30px' }}>
          {favorites.map(movie => (
            <div key={movie.id} style={{ backgroundColor: darkMode ? '#1e1e1e' : '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <img src={movie.img} alt={movie.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h4 style={{ color: darkMode ? '#fff' : '#000', margin: '0 0 10px 0' }}>{movie.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={() => toggleFavorite(movie)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#E50914' }}><Heart fill="#E50914" /></button>
                  <button style={{ backgroundColor: '#ff5e62', border: 'none', color: '#fff', padding: '5px 15px', borderRadius: '5px', cursor: 'pointer' }}><Play size={16} fill="white" /> مشاهدة</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Watchlist;