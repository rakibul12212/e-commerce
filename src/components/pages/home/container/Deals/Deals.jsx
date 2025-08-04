"use client";
import { products } from "@/lib/data/data";
import React, { useState, useEffect } from "react";

const Deals = () => {
  const [categoriesWithDeals, setCategoriesWithDeals] = useState([]);

  useEffect(() => {
    const dealsCategories = products.filter((category) => {
      return category.items.some((item) => item.isDeal === true);
    });
    setCategoriesWithDeals(dealsCategories);
  }, []);

  console.log("Deals",categoriesWithDeals);
  if (categoriesWithDeals.length === 0) {
    return <p className="text-lg">No deals available at the moment.</p>;
  }
  return (
    <div>
      <p className="text-2xl font-bold">Deals</p>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-4">
        {categoriesWithDeals.map((deal, id) => (
          <div key={id} className="">
            <p className="text-lg font-semibold bg-gray-50 p-4 rounded-md shadow-md text-center space-y-2 hover:bg-gray-100 hover:shadow-lg transition duration-200 uppercase">
              {deal.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
