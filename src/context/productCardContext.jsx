"use client";

import { products } from "@/lib/data/data";
import { useEffect, useState } from "react";
import { createContext } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate async loading
    setTimeout(() => {
      setAllProducts(products || []);
      setLoading(false);
    }, 100);
  }, []);

  return (
    <CardContext.Provider
      value={{
        allProducts,
        loading,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
