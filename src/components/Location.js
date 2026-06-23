export default function Location({ site }) {
  return (
    <section id="lokasi" className="section section-dark">
      <div className="container location-layout">
        <div className="location-copy">
          <span className="sec-tag">Lokasi dan jam buka</span>
          <h2 className="sec-title sec-title-light">
            Datang langsung atau <em>cek arah lewat Maps</em>
          </h2>

          <div className="location-list">
            <article className="location-item">
              <span className="location-key">Alamat</span>
              <p>{site.address.join(', ')}</p>
            </article>
            <article className="location-item">
              <span className="location-key">Jam buka</span>
              <p>{site.hours}</p>
            </article>
            <article className="location-item">
              <span className="location-key">WhatsApp</span>
              <p>0831-4292-7758</p>
            </article>
            <article className="location-item">
              <span className="location-key">Order online</span>
              <p>WhatsApp dan GoFood aktif. GrabFood menyusul.</p>
            </article>
          </div>

          <div className="location-actions">
            <a
              href={site.whatsappHref}
              className="btn-whatsapp-solid"
              target="_blank"
              rel="noreferrer"
            >
              Chat WhatsApp
            </a>
            <a
              href={site.mapsHref}
              className="btn-secondary btn-secondary-light"
              target="_blank"
              rel="noreferrer"
            >
              Buka Google Maps
            </a>
          </div>
        </div>

        <div className="map-card">
          <iframe
            title={`Peta ${site.name}`}
            src={site.embedMapsHref}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
