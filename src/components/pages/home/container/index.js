import React from "react";
import Banner from "./banner/banner";
import { AllProductsPage } from "./allProducts/allProducts";
import SubCategoryPage from "./subCategoryPage/subCategoryPage";


const HomePage = () => {
  return (
    <div className="space-y-20">
      <Banner />
      <SubCategoryPage />
      <AllProductsPage />
    </div>
  );
};

export default HomePage;
