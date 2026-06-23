'use client';

import { useState } from 'react';
import Image from 'next/image';
import OrderModal from './OrderModal';

export default function FeaturedMenu({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <section id="unggulan" className="section section-light">
      <div className="container">
        <div className="section-heading">
          <span className="sec-tag">Menu unggulan</span>
          <h2 className="sec-title">
            Pilihan yang paling sering <em>dicari pelanggan</em>
          </h2>
          <p className="sec-desc">
            Enam menu ini jadi titik masuk terbaik untuk mengenal rasa Saung
            Berkah Waras.
          </p>
        </div>

        <div className="featured-grid">
          {items.map((item) => (
            <article 
              key={item.title} 
              className="featured-card"
              onClick={() => setSelectedItem(item)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
            >
              <div className="featured-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="featured-body">
                <span className="featured-accent">{item.accent}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                
                {(item.priceNormal || item.priceGoFood) && (
                  <div className="menu-prices">
                    {item.priceNormal && (
                      <div className="price-item">
                        <span className="price-label">Normal</span>
                        <span className="price-value">
                          Rp {item.priceNormal.toLocaleString('id-ID')}
                        </span>
                      </div>
                    )}
                    {item.priceGoFood && (
                      <div className="price-item gofood-price">
                        <span className="price-label">GoFood</span>
                        <span className="price-value">
                          Rp {item.priceGoFood.toLocaleString('id-ID')}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <OrderModal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        item={selectedItem} 
      />
    </section>
  );
}
