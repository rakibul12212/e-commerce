import { products } from "@/lib/data/data";
import Image from "next/image";
import React from "react";

const ProductCategory = () => {
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 py-4 ">
        {products.map((product, index) => (
          <div
            key={product.index}
            className="bg-gray-50 p-4 rounded-md shadow-md flex flex-col items-center space-y-2 hover:bg-gray-100 hover:shadow-lg transition duration-200 hover:scale-105 "
          >
            <Image
              src={product.categoryImg}
              alt={product.category}
              width={64}
              height={64}
            />
            <p className="text-xl font-semibold uppercase">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
