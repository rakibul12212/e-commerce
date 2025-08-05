import DetailsProductCard from "@/components/UI/card/DetailsProductCard";
import React from "react";
import FeatureProduct from "../FeatureProduct/FeatureProduct";

const DetailsProductPage = () => {
  return (
    <div className=" py-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-1">
          <FeatureProduct />
        </div>
        <div className="md:col-span-4">
          <DetailsProductCard />
        </div>
      </div>
    </div>
  );
};

export default DetailsProductPage;
