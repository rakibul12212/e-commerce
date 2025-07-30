"use client";

const FlashSaleProductLoader = () => {
  return (
    <div className="border-none md:border border-gray-300 shadow-md rounded-md grid gap-3 p-0 md:p-3 md:max-w-lg transform transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer bg-white animate-pulse">
      <div className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 px-2 sm:px-4 py-1 rounded-md shadow-md">
        <div className="w-3 h-3 sm:w-5 sm:h-5 bg-gray-400 rounded" />
        <div className="h-3 sm:h-4 bg-gray-400 rounded w-16 sm:w-20" />
      </div>

      <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px] bg-gray-200 rounded-lg">
        <div className="hidden md:block absolute bottom-2 right-2 bg-gray-300 text-xs px-2 py-1 rounded-full h-6 w-20" />
      </div>

      <div className="text-center space-y-2">
        <div className="h-4 sm:h-5 bg-gray-300 rounded w-3/4 mx-auto" />
        <div className="h-4 sm:h-5 bg-gray-300 rounded w-1/2 mx-auto" />

        <div className="flex flex-col sm:flex-row justify-center gap-1 sm:gap-x-3 items-center">
          <div className="h-6 sm:h-8 bg-gray-300 rounded w-16 sm:w-20" />

          <div className="flex items-center gap-2">
            <div className="h-4 sm:h-5 bg-gray-300 rounded w-12 sm:w-16" />
            <div className="h-5 sm:h-6 bg-gray-300 rounded-full w-12 sm:w-16" />
          </div>
        </div>
      </div>

      <div className="h-10 sm:h-12 bg-gray-300 rounded w-full" />
    </div>
  );
};

export default FlashSaleProductLoader;
