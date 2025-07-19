import ProductCardSkeleton from "@/components/UI/loading/ProductCardSkeletonLoading";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-20 px-20">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="border border-gray-100 p-4 rounded-lg">
          <ProductCardSkeleton />
        </div>
      ))}
    </div>
  );
};

export default loading;
