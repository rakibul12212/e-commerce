import React from "react";
import Banner from "./banner/banner";
import CartBtn from "@/components/UI/buttons/cartBtn";
import About from "./about/about";
import ProductCategory from "./category/ProductCategory";
import Deals from "./Deals/Deals";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import LatestProduct from "./LatestProduct/LatestProduct";
import BestSellerProduct from "./BestSellerProduct/BestSellerProduct";


const HomePage = () => {
  return (
    <div>
      <div className="space-y-20">
        <Banner />
        <ProductCategory />
        <Deals />
        <div className="flex justify-between items-start space-x-4">
          <FeatureProduct />
          <LatestProduct />
          <BestSellerProduct />
        </div>
       
        <About />
      </div>
      <div className="fixed z-20 bottom-10 right-4">
        <CartBtn />
      </div>
    </div>
  );
};

export default HomePage;
