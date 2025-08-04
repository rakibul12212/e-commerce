"use client";
import CardContext from "@/contexts/productCardContext";
import { useContext } from "react";

export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
};
