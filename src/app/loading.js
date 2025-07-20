import ProductCardSkeleton from "@/components/UI/loading/ProductCardSkeletonLoading";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="loader"></span>
    </div>
  );
};

export default loading;
