import Image from 'next/image';
import { siteData } from '@/data/site';

export default function MobileLanding({ onEnterOrder }) {
  return (
    <div className="mobile-sf-landing">
      {/* 1. Header */}
      <header className="sf-header">
        <div className="sf-header-brand">
          <Image src={siteData.logo} alt="Logo" width={28} height={28} style={{ borderRadius: '50%' }} />
          <strong>{siteData.name}</strong>
        </div>

      </header>

      {/* 2. Hero Section */}
      <section className="sf-hero">
        <div className="sf-hero-image">
          <Image src="/saung-depan.jpg" alt="Saung Berkah" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="sf-hero-block">
          <h2>SELAMAT DATANG DI SAUNG BERKAH WARAS</h2>
          <p>Pesan menu favoritmu dengan mudah, diantar langsung, atau siap diambil.</p>
          <div className="sf-hero-apps">
            {/* Mock buttons mimicking app store badges, or standard order buttons */}
            <button className="sf-btn-outline" onClick={onEnterOrder}>Pesan Sekarang</button>
          </div>
        </div>
      </section>

      {/* 3. Info Section */}
      <section className="sf-info-section">
        <Image src={siteData.logo} alt="Logo" width={50} height={50} style={{ borderRadius: '50%', marginBottom: '12px' }} />
        <h3>Sekarang Saung Berkah hadir secara Online!</h3>
        <p>Nikmati menu andalan seperti paket ayam, lele, soto, dan bakso beranak langsung dari genggamanmu. Pesan lebih cepat dan hemat waktu antre.</p>
      </section>

      {/* 4. Features Section */}
      <section className="sf-features">
        <h3 className="sf-section-title">Kenapa Pesan Lewat Kami?</h3>
        
        <div className="sf-feature-item">
          <div className="sf-icon-box">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div className="sf-feature-text">
            <strong>Harga Terjangkau</strong>
            <p>Mulai dari Rp 3.000 saja. Sangat ramah di kantong.</p>
          </div>
        </div>

        <div className="sf-feature-item">
          <div className="sf-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </div>
          <div className="sf-feature-text">
            <strong>Menu Beragam</strong>
            <p>Tersedia lebih dari 30+ pilihan lauk, minuman, dan paket.</p>
          </div>
        </div>

        <div className="sf-feature-item">
          <div className="sf-icon-box">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <div className="sf-feature-text">
            <strong>Pesan Super Cepat</strong>
            <p>Terintegrasi langsung ke WhatsApp kami tanpa ribet aplikasi pihak ketiga.</p>
          </div>
        </div>
      </section>

      {/* 5. Menu Grid & Big CTA */}
      <section className="sf-menu-grid-section">
        <div className="sf-menu-grid">
          {siteData.galleryItems.slice(0, 6).map((img, i) => (
             <div key={i} className="sf-grid-item">
               <Image src={img.image} alt={img.title} fill sizes="(max-width: 768px) 33vw, 150px" style={{ objectFit: 'cover' }} />
             </div>
          ))}
        </div>
        
        <div className="sf-cta-container" style={{ flexDirection: 'column', gap: '12px', padding: '0 16px' }}>
          <button 
            className="sf-btn-primary" 
            onClick={onEnterOrder}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '8px' 
            }}
          >
             <Image src="/images/brands/whatsapp.png" alt="WhatsApp" width={24} height={24} style={{ borderRadius: '50%' }} />
             Pesan lewat WhatsApp
          </button>
          <a 
            href={siteData.gofoodHref} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sf-btn-primary gofood-btn" 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '8px', 
              textDecoration: 'none' 
            }}
          >
             <Image src="/images/brands/gofood.png" alt="GoFood" width={60} height={18} style={{ objectFit: 'contain' }} />
             Pesan lewat GoFood
          </a>
        </div>
      </section>

      {/* 6. Mobile Footer */}
      <footer className="sf-footer">
        <div className="sf-footer-brand">
          <Image src={siteData.logo} alt="Logo" width={32} height={32} style={{ borderRadius: '50%' }} />
          <strong>{siteData.name}</strong>
        </div>
        <div className="sf-footer-links">
          <p>Alamat: {siteData.address[0]}, {siteData.address[1]}</p>
          <p>Buka: {siteData.hours}</p>
          <p>WhatsApp: 0831-4292-7758</p>
        </div>
        <div className="sf-footer-copyright">
          © {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
