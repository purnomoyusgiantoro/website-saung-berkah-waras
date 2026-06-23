'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import OrderModal from './OrderModal';

export default function Menu({ items, categories }) {
  const [filter, setFilter] = useState('semua');
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setFilteredItems(
      filter === 'semua'
        ? items
        : items.filter((item) => item.category === filter)
    );
  }, [filter, items]);

  return (
    <section id="menu" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <span className="sec-tag">Menu lengkap</span>
          <h2 className="sec-title sec-title-light">
            Tinggal pilih kategori, lalu <em>pesan yang kamu mau</em>
          </h2>
          <p className="sec-desc sec-desc-light">
            Susunan menu dibuat sederhana supaya pelanggan cepat menemukan apa
            yang sedang dicari.
          </p>
        </div>

        <div className="menu-tabs" role="tablist" aria-label="Filter menu">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`tab-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article 
              key={`${item.category}-${item.name}`} 
              className="menu-card"
              onClick={() => setSelectedItem(item)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
            >
              <div className="menu-card-img">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="menu-card-body">
                <div className="menu-cat">
                  {categories.find((category) => category.id === item.category)?.label}
                </div>
                <div className="menu-name">{item.name}</div>
                <div className="menu-note">{item.description}</div>
                
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
