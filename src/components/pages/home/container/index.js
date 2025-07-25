import React from "react";
import Banner from "./banner/banner";
import { AllProductsPage } from "./allProducts/allProducts";
import SubCategoryPage from "./subCategoryPage/subCategoryPage";
import CartBtn from "@/components/UI/buttons/cartBtn";

const HomePage = () => {
  return (
    <div>
      <div className="space-y-20">
        <Banner />
        <SubCategoryPage />
        <AllProductsPage />
      </div>
      <div className="fixed bottom-10 right-4">
        <CartBtn />
      </div>
    </div>
  );
};

export default HomePage;
