

"use client";

import { products } from "@/lib/data/data";
import { useEffect, useState, createContext } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🛒 Cart State
  const [cartItems, setCartItems] = useState([]);

  // Load products (simulation)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setAllProducts(products || []);
      setLoading(false);
    }, 100);
  }, []);

  // ➕ Add to Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // If already in cart, increase qty
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      } else {
        // Add new item
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // ➖ Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔼 Increase Qty
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // 🔽 Decrease Qty
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  // 🧹 Clear Cart
  const clearCart = () => setCartItems([]);

  return (
    <CardContext.Provider
      value={{
        allProducts,
        loading,
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;

