"use client";
import Loading from "@/app/loading";
import Button from "@/components/UI/buttons/button";
import Rating from "@/components/UI/rating/Rating";
import { useCard } from "@/hooks/usecard";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { PiPauseLight } from "react-icons/pi";

const DealsDetails = () => {
  const [dealsProduct, setDealsProduct] = useState([]);
  const params = useParams();
  const { slug } = params || {};
  const router = useRouter();
  if (!slug) {
    return <Loading />;
  }
  const { allProducts } = useCard();

  const discountPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  useEffect(() => {
    const dProduct = allProducts
      .flatMap((product) => product.items)
      .filter(
        (item) =>
          item.category?.toString().trim().toLowerCase() ===
            slug?.toString().trim().toLowerCase() && item.isDeal === true,
      );

    setDealsProduct(dProduct);
  }, [allProducts, slug]);

  if (dealsProduct.length === 0) {
    return <Loading />;
  }
  return (
    <div className="py-10">
      <div className="col-span-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {dealsProduct.map((item) => (
            <div
              key={item.id}
              className="bg-white  px-4  rounded-md border border-gray-200 shadow-sm hover:shadow-md transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={item.primaryImg}
                  alt={item.name}
                  width={200}
                  height={100}
                  className="w-full  object-cover rounded-md mb-2"
                />
                {item.isDiscount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md">
                    Save {item.discountPercent}%
                  </div>
                )}
              </div>
              <h3
                className="text-2xl hover:text-[#6896AD] transform duration-300 ease-in-out font-semibold pb-1 cursor-pointer truncate"
                onClick={() =>
                  router.push(`/productDetails/${item.category}/${item.id}`)
                }
              >
                {item.name}
              </h3>
              <div className="flex items-center justify-between">
                <Rating value={item.rating} />
                <p className="flex items-center space-x-2  text-lg ">
                  {item.stockQuantity === 0 ? (
                    <span className="text-red-600 font-semibold">
                      Stock Out
                    </span>
                  ) : item.stockQuantity < 10 ? (
                    <span className="text-orange-500 font-semibold">
                      Low Stock
                    </span>
                  ) : (
                    <span className="text-green-600 font-semibold">
                      In Stock
                    </span>
                  )}
                </p>
              </div>
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
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-x-4 ">
                  <p className="cursor-pointer bg-red-50 border border-red-200 rounded-md p-1 text-red-300 hover:text-red-400 hover:bg-red-100 transition-colors">
                    <FiHeart size={24} />
                  </p>
                  <p
                    className="cursor-pointer bg-blue-50 border border-blue-200 rounded-md p-1 text-blue-300 hover:text-blue-400 hover:bg-blue-100 transition-colors"
                    onClick={() => router.push(`/cart/${item.id}`)}
                  >
                    <FiShoppingCart size={24} />
                  </p>
                  <p className="cursor-pointer bg-gray-50 border border-gray-200 rounded-md p-1 text-gray-500 hover:text-gray-400 hover:bg-gray-100 transition-colors">
                    <PiPauseLight size={24} />
                  </p>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    text="Buy Now"
                    className="px-8"
                    onClick={() =>
                      router.push(`/productDetails/${item.category}/${item.id}`)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsDetails;
