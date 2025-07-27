"use client";
import { products } from "@/data/productData";
import React from "react";
import { useRouter } from "next/navigation"; 

const subCategories = Array.from(
  new Set(products.map((product) => product.subCategory)),
);

const SubCategoryPage = () => {
  const router = useRouter();

  const handleClick = (subCategory) => {
    router.push(`/subcategory/${subCategory.toLowerCase()}`);
  };

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
        {subCategories.map((subCategory) => (
          <button
            key={subCategory}
            onClick={() => handleClick(subCategory)}
            className="w-full px-3 md:px-6 py-3 md:py-5 border border-gray-300 text-sm md:text-xl font-semibold mb-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors uppercase text-center"
          >
            {subCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
