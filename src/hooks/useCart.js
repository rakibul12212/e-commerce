"use client"
import { useContext } from "react";
import CartContext from "../components/context/contextCart";

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
