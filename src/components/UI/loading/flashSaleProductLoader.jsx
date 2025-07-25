"use client";

const FlashSaleProductLoader = () => {
  return (
    <div className="border border-gray-300 shadow-md bg-gray-50 p-4 rounded-lg grid gap-4 w-full max-w-lg animate-pulse">
      <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-400 via-orange-300 to-yellow-300 text-white px-4 py-1 rounded shadow-md w-32 h-6" />
      <div className="relative w-full h-[200px] bg-gray-200 rounded" />
      <div className="text-center space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
        <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto" />
        <div className="flex justify-center gap-2 items-center">
          <div className="h-6 bg-gray-300 rounded w-24" />
          <div className="h-5 bg-gray-200 rounded w-16" />
        </div>
      </div>
      <div className="h-10 bg-gray-300 rounded w-full" />
    </div>
  );
};

export default FlashSaleProductLoader;
