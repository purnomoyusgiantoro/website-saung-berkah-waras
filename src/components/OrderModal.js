'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { siteData } from '@/data/site';
import { useCart } from '@/context/CartContext';

export default function OrderModal({ isOpen, onClose, item }) {
  const { addToCart, setIsCartOpen } = useCart();

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const itemName = item.name || item.title;
  // Use GoFood price if Normal is missing (fallback)
  const itemPrice = item.priceNormal || item.priceGoFood || 0;

  // Direct WA message
  const whatsappMessage = encodeURIComponent(
    `Halo Saung Berkah Waras, saya mau pesan ${itemName}.`
  );
  const waHref = `https://wa.me/${siteData.whatsappNumber}?text=${whatsappMessage}`;

  const handleAddToCart = () => {
    addToCart(item, 1, itemPrice);
    onClose();
    setIsCartOpen(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          &times;
        </button>
        
        <div className="modal-header">
          <h3>Pesan {itemName}</h3>
          <p>Pilih jalur pemesanan yang paling pas buat kamu.</p>
        </div>

        <div className="modal-options">
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="modal-btn modal-btn-addcart"
          >
            <span className="modal-btn-icon" style={{ background: '#fef3c7', fontSize: '1.5rem' }}>
              🛒
            </span>
            <div className="modal-btn-text">
              <strong>Masukkan ke Keranjang</strong>
              <span>Pesan banyak menu sekaligus</span>
            </div>
          </button>

          {/* Direct WA Button */}
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="modal-btn modal-btn-wa"
          >
            <span className="modal-btn-icon">
              <Image 
                src="/images/brands/whatsapp.png" 
                alt="WhatsApp" 
                fill 
                sizes="40px"
                style={{ objectFit: 'contain' }}
              />
            </span>
            <div className="modal-btn-text">
              <strong>Pesan WhatsApp (Langsung)</strong>
              <span>Kirim pesan pesanan ini ke WA</span>
            </div>
          </a>

          {/* GoFood */}
          <a
            href={siteData.gofoodHref}
            target="_blank"
            rel="noreferrer"
            className="modal-btn modal-btn-gofood"
          >
            <span className="modal-btn-icon">
              <Image 
                src="/images/brands/gofood.png" 
                alt="GoFood" 
                fill 
                sizes="40px"
                style={{ objectFit: 'contain' }}
              />
            </span>
            <div className="modal-btn-text">
              <strong>Pesan Langsung GoFood</strong>
              <span>Lewat Aplikasi Gojek</span>
            </div>
          </a>

          {/* GrabFood (Disabled) */}
          <div className="modal-btn modal-btn-grabfood modal-btn-disabled">
            <span className="modal-btn-icon grabfood-icon">
              <Image 
                src="/images/brands/grabfood.svg" 
                alt="GrabFood" 
                fill 
                sizes="40px"
                style={{ objectFit: 'contain' }}
              />
            </span>
            <div className="modal-btn-text">
              <strong>GrabFood</strong>
              <span>Segera Hadir</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
