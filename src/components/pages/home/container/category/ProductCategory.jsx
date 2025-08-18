"use client";
import Loading from "@/app/loading";
import { useCard } from "@/hooks/usecard";
// import { products } from "@/lib/data/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCategory = () => {
    const { allProducts } = useCard();
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 py-4 ">
        {allProducts.map((product, index) => (
          <div
            key={product.index}
            className="bg-gray-50 p-4 rounded-md shadow-md flex flex-col items-center space-y-2 hover:bg-gray-100 hover:shadow-lg transform  duration-300 ease-in-out hover:scale-105 "
          >
            <Image
              src={product.categoryImg}
              alt={product.category}
              width={56}
              height={48}
            />
            <p
              className="md:lg  font-semibold hover:text-[#6896AD] transform duration-300 ease-in-out uppercase cursor-pointer truncate"
              onClick={() =>
                router.push(
                  `/categoryproduct/${product.category.toLowerCase()}`,
                )
              }
            >
              {product.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
