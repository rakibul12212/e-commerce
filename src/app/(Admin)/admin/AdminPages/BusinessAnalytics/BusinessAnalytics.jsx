import React from "react";
import MostVisitedPage from "./MostVisitedPage/MostVisitedPage";
import MostVisitedProducts from "./MostVisitedProducts/MostVisitedProducts";
import TopVisitedCustomerLocation from "./TopVisitedCustomerLocation/TopVisitedCustomerLocation";
import MostSoldProducts from "./MostSoldProducts/MostSoldProducts";

const BusinessAnalytics = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Business Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        <MostVisitedPage />
        <MostVisitedProducts />
        <TopVisitedCustomerLocation />
        <MostSoldProducts />
      </div>
    </div>
  );
};

export default BusinessAnalytics;
