import React from "react";
import Banner from "./container/banner/banner";
import { AllProductsPage } from "./container/allProducts/allProducts";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AllProductsPage />
    </div>
  );
};

export default HomePage;
