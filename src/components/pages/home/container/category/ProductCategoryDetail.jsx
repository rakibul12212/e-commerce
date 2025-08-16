"use client";
import Loading from "@/app/loading";
import Button from "@/components/UI/buttons/button";
import Rating from "@/components/UI/rating/Rating";
import { useCard } from "@/hooks/usecard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { PiPauseLight } from "react-icons/pi";

const ProductCategoryDetail = ({ params }) => {
  const [productCat, setProductCat] = useState([]);

  const { slug } = params || {};
  const router = useRouter();
  if (!slug) {
    return <Loading />;
  }
  const { allProducts, addToCart } = useCard(); 

  const discountPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  useEffect(() => {
    const productByCategory = allProducts
      .flatMap((product) => product.items)
      .filter(
        (item) =>
          item.category?.toString().trim().toLowerCase() ===
          slug?.toString().trim().toLowerCase(),
      );

    setProductCat(productByCategory);
  }, [allProducts, slug]);

  if (productCat.length === 0) {
    return <Loading />;
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4 uppercase">Category: {slug}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5  gap-6">
        <div className="col-span-1 h-screen p-4 border border-gray-200 rounded-md shadow-md">
          <p className="text-xl font-semibold pb-4 border-b border-gray-300">
            Filter
          </p>
          <div>
            <h3 className="text-2xl font-semibold py-4">Brand</h3>
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {productCat
                .filter(
                  (item, index, array) =>
                    array.findIndex(
                      (product) => product.brand === item.brand,
                    ) === index,
                )
                .map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center p-2  cursor-pointer hover:bg-gray-50 hover:border-[#6896AD] transition-all duration-300 group"
                  >
                    <input
                      type="checkbox"
                      className="mr-3 text-[#6896AD]  rounded w-5 h-5"
                    />
                    <span className="text-lg font-medium group-hover:text-[#6896AD] truncate">
                      {item.brand}
                    </span>
                  </label>
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold py-4">Price</h3>
            <div className="space-y-3">
              <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 hover:border-[#6896AD] transition-all duration-300">
                <input
                  type="radio"
                  name="priceSort"
                  value="lowToHigh"
                  className="mr-3 text-[#6896AD] focus:ring-[#6896AD]"
                />
                <span className="text-lg font-medium">Price: Low to High</span>
              </label>
              <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 hover:border-[#6896AD] transition-all duration-300">
                <input
                  type="radio"
                  name="priceSort"
                  value="highToLow"
                  className="mr-3 text-[#6896AD] focus:ring-[#6896AD]"
                />
                <span className="text-lg font-medium">Price: High to Low</span>
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {productCat.map((item) => (
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
                    className="w-full h-auto object-cover rounded-md mb-2"
                  />
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
                      onClick={() => {
                        addToCart(item); 
                      
                      }}
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
                        router.push(
                          `/productDetails/${item.category}/${item.id}`,
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryDetail;
