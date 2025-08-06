import LatestProductCard from "@/components/UI/card/LatestProductCard";
import React from "react";

const LatestProduct = () => {
  return (
    <div className="space-y-4 bg-gray-50 p-6 rounded-md shadow-md">
      <p className="text-2xl font-bold">Latest Product</p>
      <div>
        <LatestProductCard />
      </div>
    </div>
  );
};

export default LatestProduct;
