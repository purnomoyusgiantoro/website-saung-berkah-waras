import { siteData } from '@/data/site';

export default function MobileHeader({ onBack }) {
  return (
    <header className="mobile-header">
      <div className="mobile-header-top">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {onBack && (
            <button 
              onClick={onBack} 
              style={{ background: 'none', border: 'none', color: 'var(--text)', display: 'flex', alignItems: 'center', padding: '0', cursor: 'pointer' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
          )}
          <div className="mobile-header-location">
            <span className="location-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </span>
            <div className="location-text">
              <span>Diantar ke</span>
              <strong>Lokasi Anda</strong>
            </div>
          </div>
        </div>
        <div className="mobile-header-brand">
          <strong>{siteData.name}</strong>
        </div>
      </div>
      <div className="mobile-header-search">
        <div className="search-bar">
          <span className="search-icon">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-soft)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </span>
          <input type="text" placeholder="Mau makan apa hari ini?" readOnly />
        </div>
      </div>
    </header>
  );
}
