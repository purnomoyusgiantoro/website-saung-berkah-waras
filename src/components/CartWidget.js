'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { siteData } from '@/data/site';
import { menuData } from '@/data/menu';
import Image from 'next/image';

export default function CartWidget() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    cartTotalItems,
    cartTotalPrice,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [selectedNewItemName, setSelectedNewItemName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  const handleCheckout = () => {
    let message = 'Halo Saung Berkah Waras, saya mau pesan:\n\n';
    
    cartItems.forEach((cartItem, index) => {
      const name = cartItem.item.title || cartItem.item.name;
      const subtotal = cartItem.price * cartItem.quantity;
      message += `${index + 1}. ${cartItem.quantity}x ${name} - Rp ${subtotal.toLocaleString('id-ID')}\n`;
    });

    message += `\n*Total Harga: Rp ${cartTotalPrice.toLocaleString('id-ID')}*\n`;
    
    if (orderNotes.trim()) {
      message += `\n*Catatan:* ${orderNotes.trim()}`;
    }
    if (customerAddress.trim()) {
      message += `\n*Alamat:* ${customerAddress.trim()}`;
    }

    message += '\n\nTerima kasih.';

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
  };

  const handleAddNewItem = () => {
    if (!selectedNewItemName) return;
    const itemToAdd = menuData.find(m => m.name === selectedNewItemName);
    if (itemToAdd) {
      const itemPrice = itemToAdd.priceNormal || itemToAdd.priceGoFood || 0;
      addToCart(itemToAdd, 1, itemPrice);
      setSelectedNewItemName('');
    }
  };

  return (
    <>
      {/* Floating Cart Button (Desktop Only) */}
      <div className="desktop-only">
        <button 
          className="cart-float" 
          onClick={() => setIsCartOpen(true)}
          aria-label="Buka Keranjang Pesanan"
        >
          <span className="cart-float-icon">🛒</span>
          {cartTotalItems > 0 && (
            <span className="cart-float-badge">{cartTotalItems}</span>
          )}
        </button>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="modal-content cart-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsCartOpen(false)} aria-label="Tutup">
              &times;
            </button>
            
            <div className="modal-header">
              <h3>Pesananmu</h3>
              <p>Periksa kembali pesanan Anda sebelum dikirim via WA.</p>
            </div>

            {cartItems.length > 0 ? (
              <div className="cart-items-list">
                {cartItems.map((cartItem) => {
                  const name = cartItem.item.title || cartItem.item.name;
                  return (
                    <div key={name} className="cart-item">
                      <div className="cart-item-info">
                        <strong>{name}</strong>
                        <span>Rp {cartItem.price.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="quantity-controls cart-item-qty">
                        <button 
                          className="qty-btn small-qty-btn" 
                          onClick={() => updateQuantity(name, cartItem.quantity - 1)}
                        >-</button>
                        <span className="qty-value">{cartItem.quantity}</span>
                        <button 
                          className="qty-btn small-qty-btn" 
                          onClick={() => updateQuantity(name, cartItem.quantity + 1)}
                        >+</button>
                      </div>
                      <div className="cart-item-subtotal">
                        Rp {(cartItem.price * cartItem.quantity).toLocaleString('id-ID')}
                      </div>
                      <button 
                        className="cart-item-remove"
                        onClick={() => removeFromCart(name)}
                        aria-label="Hapus Item"
                      >
                        &times;
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--text-soft)' }}>
                Keranjang masih kosong.
              </p>
            )}

            {/* Quick Add Menu */}
            <div className="cart-add-menu">
              <select 
                value={selectedNewItemName}
                onChange={(e) => setSelectedNewItemName(e.target.value)}
                className="cart-select"
              >
                <option value="">+ Tambah Menu Lain...</option>
                {menuData.map((m) => {
                  const displayName = m.name.length > 20 ? m.name.substring(0, 20) + '...' : m.name;
                  return (
                    <option key={m.name} value={m.name}>
                      {displayName} - Rp {(m.priceNormal || m.priceGoFood || 0).toLocaleString('id-ID')}
                    </option>
                  );
                })}
              </select>
              <button 
                onClick={handleAddNewItem}
                disabled={!selectedNewItemName}
                className="cart-add-btn"
              >
                Tambah
              </button>
            </div>

            {/* Customer Details Form */}
            {cartItems.length > 0 && (
              <div className="cart-customer-form">
                <textarea
                  className="cart-textarea"
                  placeholder="Catatan pesanan (misal: pedas, tambah es, dll)"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  rows="2"
                />
                <textarea
                  className="cart-textarea"
                  placeholder="Alamat Pengiriman (jika diantar)"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  rows="3"
                />
              </div>
            )}

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total Harga</span>
                <strong>Rp {cartTotalPrice.toLocaleString('id-ID')}</strong>
              </div>
              <button 
                className="cart-checkout-btn" 
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                style={{ opacity: cartItems.length === 0 ? 0.5 : 1, cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer' }}
              >
                <Image 
                  src="/images/brands/whatsapp.png" 
                  alt="WA" 
                  width={24} 
                  height={24} 
                  style={{ borderRadius: '50%' }}
                />
                Kirim Pesanan via WhatsApp
              </button>

              <a 
                href={siteData.gofoodHref}
                target="_blank"
                rel="noopener noreferrer"
                className="cart-checkout-btn gofood-btn"
                style={{ 
                  marginTop: '12px', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '8px', 
                  textDecoration: 'none' 
                }}
              >
                <Image 
                  src="/images/brands/gofood.png" 
                  alt="GoFood" 
                  width={60} 
                  height={18} 
                  style={{ objectFit: 'contain' }}
                />
                Pesan lewat GoFood
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
