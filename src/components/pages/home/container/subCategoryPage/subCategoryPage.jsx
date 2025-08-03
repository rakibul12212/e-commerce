"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllProducts } from "@/lib/data/api";



const SubCategoryPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const router = useRouter();

   useEffect(() => {
      const fetchProducts = async () => {
        try {
          const products = await getAllProducts();
          setAllProducts(products);
        } catch (error) {
          console.error("Error fetching products:", error);
          setAllProducts([]);
        } 
      };
  
      fetchProducts();
    }, []);

  const subCategories = Array.from(
    new Set(allProducts.map((product) => product.subCategory)),
  );

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
            className="w-full px-3 md:px-3 py-3 md:py-2 border border-gray-300 text-sm md:text-xl font-semibold mb-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors uppercase text-center"
          >
            {subCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
