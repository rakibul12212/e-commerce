"use client";
import { getAllProducts } from "@/lib/data/api";
import { useEffect, useState } from "react";
import { createContext } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await getAllProducts();
        console.log("Fetched Products:", products);
        setAllProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log("All Products:", allProducts);

  return (
    <CardContext.Provider value={{ allProducts, loading }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
