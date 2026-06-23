import Image from 'next/image';

export default function Footer({ site }) {
  return (
    <footer className="site-footer" id="kontak">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-lockup">
              <span className="footer-brand-mark">
                <Image src={site.logo} alt={site.name} fill sizes="56px" />
              </span>
              <div>
                <strong>{site.name}</strong>
                <span>Masakan rumahan, suasana saung yang hangat</span>
              </div>
            </div>
            <p>
              Tempat makan lokal di Gombong yang fokus pada menu favorit
              keluarga dan jalur order yang mudah.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navigasi</h4>
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-links">
            <h4>Order Via</h4>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={site.gofoodHref} target="_blank" rel="noreferrer">
              GoFood
            </a>
            <span>GrabFood segera hadir</span>
          </div>

          <div className="footer-links">
            <h4>Alamat</h4>
            <span>{site.address[0]}</span>
            <span>{site.address[1]}</span>
            <span>{site.address[2]}</span>
            <span>{site.hours}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {site.name}. Semua hak cipta dilindungi.</p>
          <p>WhatsApp 0831-4292-7758</p>
        </div>
      </div>
    </footer>
  );
}
