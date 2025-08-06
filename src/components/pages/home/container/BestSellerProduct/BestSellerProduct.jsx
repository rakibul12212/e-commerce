import BestSellerProductCard from "@/components/UI/card/BestSellerProductCard";
import React from "react";

const BestSellerProduct = () => {
  return (
    <div className="space-y-4 bg-gray-50 p-6 rounded-md shadow-md">
      <p className="text-2xl font-bold">Best Seller Product</p>
      <div>
        <BestSellerProductCard />
      </div>
    </div>
  );
};

export default BestSellerProduct;
