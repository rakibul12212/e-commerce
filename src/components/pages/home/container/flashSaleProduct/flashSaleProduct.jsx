"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/UI/card/productCard";

import { products } from "@/data/productData";
import ProductCardSkeleton from "@/components/UI/loading/ProductCardSkeletonLoading";
import FlashSaleProductCard from "@/components/UI/card/flashSaleProductCard";

const FlashSaleProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const flashSale = products.filter((product) => product.flashSale == true);
  console.log({ flashSale });
  // loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="pt-5">
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="border border-gray-100 p-4 rounded-lg">
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {flashSale.map((product) => (
            <div
              key={product.id}
              className="border border-gray-100 p-4 rounded-lg"
            >
              <FlashSaleProductCard
                id={product.id}
                img={product.images.primary}
                name={product.name}
                price={product.price}
                shortDescription={product.description}
                discountedPrice={product.discountedPrice}
                stockQuantity={product.stockQuantity}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlashSaleProduct;
