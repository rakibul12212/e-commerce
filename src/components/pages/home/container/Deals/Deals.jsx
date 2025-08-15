"use client";
import { useCard } from "@/hooks/usecard";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Deals = () => {
  const [categoriesWithDeals, setCategoriesWithDeals] = useState([]);
  const { allProducts } = useCard();
    const router = useRouter();

  useEffect(() => {
    const dealsCategories = allProducts.filter((category) => {
      return category.items.some((item) => item.isDeal === true);
    });
    setCategoriesWithDeals(dealsCategories);
  }, []);

  
  if (categoriesWithDeals.length === 0) {
    return <p className="text-lg">No deals available at the moment.</p>;
  }
  return (
    <div>
      <p className="text-2xl font-bold">Deals</p>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-4">
        {categoriesWithDeals.map((deal, id) => (
          <div key={id} className="">
            <p
              className="text-lg font-semibold bg-gray-50 p-4 rounded-md shadow-md text-center space-y-2 hover:text-[#6896AD] transform duration-300 ease-in-out uppercase cursor-pointer hover:scale-105"
              onClick={() =>
                router.push(
                  `/dealsdetails/${deal.category.toLowerCase().trim()}`,
                )
              }
            >
              {deal.category} Deals
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
