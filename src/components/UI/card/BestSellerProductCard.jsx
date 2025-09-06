"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Rating from "../rating/Rating";
import { useRouter } from "next/navigation";
import { useCard } from "@/hooks/usecard";

const BestSellerProductCard = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const router = useRouter();
  const { allProducts } = useCard();

  const discountPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  useEffect(() => {
    const bestSellerProductCategories = allProducts.filter((category) => {
      return category.items.some((item) => item.isBestSeller === true);
    });
    setBestSellerProducts(bestSellerProductCategories);
  }, [allProducts]);
  
  return (
    <div>
      <div>
        {bestSellerProducts.map((product) =>
          product.items.map(
            (item) =>
              item.isBestSeller && (
                <div
                  key={item.id}
                  className="bg-white flex justify-between gap-x-6 items-center px-8 mt-4 rounded-md border border-gray-200 shadow-sm hover:shadow-md transform duration-300 ease-in-out hover:scale-105 w-full"
                >
                  <div className="relative">
                    <Image
                      src={item.primaryImg}
                      alt={item.name}
                      width={200}
                      height={80}
                      className="object-cover rounded-md "
                    />
                    {item.discountPercent > 0 && (
                      <div className="absolute top-4 left-2 bg-[#B91C1C] text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md hidden 2xl:block">
                        -{item.discountPercent}%
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-start flex-1 py-2">
                    <Rating
                      value={item.rating}
                      showValue
                      showCount
                      reviewCount={item.reviewCount}
                      size="medium"
                      className="pb-4"
                    />
                    <h3
                      className="text-xl md:max-w-[200px] 2xl:max-w-[300px] truncate hover:text-[#6896AD] transform duration-300 ease-in-out font-semibold cursor-pointer"
                      onClick={() =>
                        router.push(
                          `/productDetails/${item.category}/${item.id}`,
                        )
                      }
                    >
                      {item.name}
                    </h3>
                    {item.isDiscount ? (
                      <p>
                        <span className="text-[#6896AD] text-xl font-bold">
                          ${discountPrice(item.price, item.discountPercent)}
                        </span>
                        <span className="line-through text-gray-400 text-lg font-semibold ml-4">
                          ${item.price}
                        </span>
                      </p>
                    ) : (
                      <p className="text-2xl font-bold">${item.price}</p>
                    )}
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ),
          ),
        )}
      </div>
    </div>
  );
};

export default BestSellerProductCard;
