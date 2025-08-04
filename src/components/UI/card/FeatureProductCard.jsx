"use client";

import { products } from "@/lib/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import Rating from "../rating/Rating";
import { useRouter } from "next/navigation";

const FeatureProductCard = () => {
  const router = useRouter();
  const [featureProduct, setFeatureProduct] = useState([]);
  const discountPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  useEffect(() => {
    const featureProductCategories = products.filter((category) => {
      return category.items.some((item) => item.isFeature === true);
    });
    setFeatureProduct(featureProductCategories);
  }, []);

  console.log("featureProduct", featureProduct);
  if (featureProduct.length === 0) {
    return <p className="text-lg">No deals available at the moment.</p>;
  }
  return (
    <div>
      <div>
        {featureProduct.map((product, id) =>
          product.items.map(
            (item, index) =>
              item.isFeature && (
                <div
                  key={index}
                  className="bg-white flex justify-between gap-x-6 items-center px-4 mt-4 rounded-md  border border-gray-200 shadow-sm hover:shadow-md transform  duration-300 ease-in-out hover:scale-105"
                >
                  <div className="relative">
                    <Image
                      src={item.primaryImg}
                      alt={item.name}
                      width={200}
                      height={100}
                      className="object-cover rounded-md mb-2"
                    />
                    {item.discountPercent > 0 && (
                      <div className="absolute top-4 left-2 bg-[#B91C1C] text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                        -{item.discountPercent}%
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-start flex-1 ">
                    <Rating
                      value={item.rating}
                      showValue
                      showCount
                      reviewCount={item.reviewCount}
                      size="medium"
                    />
                    <h3
                      className="text-2xl hover:text-[#6896AD] transform duration-300 ease-in-out font-semibold pb-3"
                      onClick={() => router.push(`/productDetails/${id}`)}
                    >
                      {item.name}
                    </h3>
                    {item.isDiscount ? (
                      <p>
                        <span className="text-[#6896AD] text-2xl font-bold">
                          ${discountPrice(item.price, item.discountPercent)}
                        </span>
                        <span className="line-through text-gray-400 text-xl font-semibold  ml-4">
                          ${item.price}
                        </span>
                      </p>
                    ) : (
                      <p className="text-2xl font-bold">${item.price}</p>
                    )}
                    <p className="text-sm text-gray-500 ">{item.description}</p>
                  </div>
                </div>
              ),
          ),
        )}
      </div>
    </div>
  );
};

export default FeatureProductCard;
