import React from "react";

const ProductCardSkeleton = () => {
  return (
    
    <div className="border border-gray-300 shadow-md bg-gray-50 p-4 rounded-lg grid gap-4 w-full max-w-lg animate-pulse">
      <div className="relative w-full h-[200px] bg-gray-300 rounded"></div>

      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-5 bg-gray-400 rounded w-1/2"></div>

      <div className="flex justify-start items-center gap-x-2">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </div>

      <div className="flex justify-start items-center gap-x-3">
        <div className="h-8 bg-gray-300 rounded w-24"></div>
        <div className="h-8 bg-gray-400 rounded w-24"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
