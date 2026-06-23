'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calculate totals
  const cartTotalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addToCart = (item, quantity, price) => {
    setCartItems((prev) => {
      const itemName = item.title || item.name;
      const existingItem = prev.find((i) => (i.item.title || i.item.name) === itemName);
      
      if (existingItem) {
        return prev.map((i) =>
          (i.item.title || i.item.name) === itemName
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      
      return [...prev, { item, quantity, price }];
    });
  };

  const updateQuantity = (itemName, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemName);
      return;
    }
    
    setCartItems((prev) =>
      prev.map((i) =>
        (i.item.title || i.item.name) === itemName
          ? { ...i, quantity: newQuantity }
          : i
      )
    );
  };

  const removeFromCart = (itemName) => {
    setCartItems((prev) => prev.filter((i) => (i.item.title || i.item.name) !== itemName));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        cartTotalItems,
        cartTotalPrice,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
