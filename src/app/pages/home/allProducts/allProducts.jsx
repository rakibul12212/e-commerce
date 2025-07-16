'use client'
import ProductCard from "@/components/UI/card/productCard";
import { products } from "@/data/productData";
import ProductCardSkeleton from "@/components/UI/loading/ProductCardSkeletonLoading";
import { useEffect, useState } from "react";

export const AllProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-20 px-20">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="border border-gray-100 p-4 rounded-lg">
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-20 px-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-100 p-4 rounded-lg"
            >
              <ProductCard
                img={product.img}
                name={product.name}
                price={product.price}
                discount={product.discount}
                shortDescription={product.description}
                hasDiscount={product.hasDiscount}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
