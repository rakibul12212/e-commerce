import DetailsProductCard from "@/components/UI/card/DetailsProductCard";
import React from "react";
import RelatedProduct from "../RelatedProduct/RelatedProduct";


const DetailsProductPage = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-4">
        <div className="md:col-span-1">
          <RelatedProduct />
        </div>
        <div className="md:col-span-3 2xl:col-span-4">
          <DetailsProductCard />
        </div>
      </div>
    </div>
  );
};

export default DetailsProductPage;
