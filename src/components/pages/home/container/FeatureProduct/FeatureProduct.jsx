import FeatureProductCard from "@/components/UI/card/FeatureProductCard";
import React from "react";

const FeatureProduct = () => {
  return (
    <div className="space-y-4 bg-gray-50 p-6 rounded-md shadow-md">
      <p className="text-2xl font-bold">Feature Product</p>
      <div>
        <FeatureProductCard />
      </div>
    </div>
  );
};

export default FeatureProduct;
