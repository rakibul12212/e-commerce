import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="border border-gray-300 shadow-md bg-gray-50 p-2 sm:p-3 md:p-4 rounded-lg grid gap-2 sm:gap-3 md:gap-4 w-full animate-pulse">
      <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] bg-gray-200 rounded"></div>

      <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded"></div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
        <div className="h-4 w-20 sm:w-24 bg-gray-300 rounded"></div>
        <div className="h-3 w-12 sm:w-16 bg-gray-200 rounded"></div>
      </div>

      <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-2">
        <div className="h-6 sm:h-8 w-full sm:flex-1 bg-gray-300 rounded"></div>
        <div className="h-6 sm:h-8 w-full sm:w-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
