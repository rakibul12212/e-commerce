import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="border border-gray-300 shadow-md bg-gray-50 p-4 rounded-lg grid gap-4 w-full max-w-lg animate-pulse">
      <div className="relative w-full h-[200px] bg-gray-200 rounded"></div>

      <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded"></div>

      <div className="flex justify-between items-center">
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
        <div className="h-3 w-16 bg-gray-200 rounded"></div>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <div className="h-8 w-4/5 bg-gray-300 rounded"></div>
        <div className="h-8 w-1/5 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
