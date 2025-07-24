import React from "react";
import Banner from "./banner";
import { AllProductsPage } from "../allProducts/allProducts";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AllProductsPage />
    </div>
  );
};

export default HomePage;
