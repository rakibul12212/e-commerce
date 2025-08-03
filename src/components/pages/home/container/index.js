import React from "react";
import Banner from "./banner/banner";
import { AllProductsPage } from "./allProducts/allProducts";
import SubCategoryPage from "./subCategoryPage/subCategoryPage";
import CartBtn from "@/components/UI/buttons/cartBtn";
import FlashSaleProduct from "./flashSaleProduct/flashSaleProduct";
import About from "./about/about";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <Banner />
        <SubCategoryPage />
        <FlashSaleProduct />
        {/* <AllProductsPage /> */}
        <About />
      </div>
      <div className="fixed z-20 bottom-10 right-4">
        <CartBtn />
      </div>
    </div>
  );
};

export default HomePage;
