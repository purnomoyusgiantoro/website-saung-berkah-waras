import Image from 'next/image';

export default function Order({ channels }) {
  return (
    <section id="pesan" className="section section-warm">
      <div className="container">
        <div className="section-heading">
          <span className="sec-tag">Cara pesan</span>
          <h2 className="sec-title">
            Pilih jalur order yang paling <em>nyaman buat kamu</em>
          </h2>
          <p className="sec-desc">
            Fokusnya sederhana: pelanggan bisa langsung chat, pesan dari
            aplikasi, atau cek channel yang segera aktif.
          </p>
        </div>

        <div className="order-grid">
          {channels.map((channel) => {
            const className = `order-card order-card-${channel.tone}`;

            if (!channel.href) {
              return (
                <div key={channel.name} className={className}>
                  <span className={`order-icon order-icon-${channel.name.toLowerCase()}`}>
                    <Image
                      src={channel.logo}
                      alt={channel.name}
                      fill
                      sizes="58px"
                    />
                  </span>
                  <div className="order-body">
                    <span className="order-badge">{channel.badge}</span>
                    <h3>{channel.name}</h3>
                    <p>{channel.description}</p>
                    <span className="order-link muted">Belum tersedia</span>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                <span className={`order-icon order-icon-${channel.name.toLowerCase()}`}>
                  <Image
                    src={channel.logo}
                    alt={channel.name}
                    fill
                    sizes="58px"
                  />
                </span>
                <div className="order-body">
                  <span className="order-badge">{channel.badge}</span>
                  <h3>{channel.name}</h3>
                  <p>{channel.description}</p>
                  <span className="order-link">Buka sekarang</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
