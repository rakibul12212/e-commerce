"use client";
import Loading from "@/app/loading";
import { useCard } from "@/hooks/usecard";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Rating from "../rating/Rating";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import Tab from "../tab/Tab";
import { FiHeart } from "react-icons/fi";

const DetailsProductCard = () => {
  const params = useParams();
  const { allProducts, addToCart, wishlistItems, toggleWishlist } = useCard();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const discountPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  useEffect(() => {
    const productData = allProducts
      .flatMap((category) => category.items)
      .find((item) => item.id === params.id);
    setProduct(productData);
  }, [allProducts, params.id]);

  if (!product) return <Loading />;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white">
        <div className="space-y-4">
          <div className=" rounded-lg p-4 bg-white shadow-sm">
            <Image
              src={product.primaryImg}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.detailsImg &&
              product.detailsImg.map((item, index) => (
                <div
                  className="border border-gray-100 rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  key={index}
                >
                  <Image
                    src={item}
                    alt={`${product.name} view ${index + 1}`}
                    width={120}
                    height={150}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="flex items-center space-x-2 border border-gray-300 rounded px-3 py-1 text-lg ">
              <span className="text-lg font-medium text-gray-700">Stock:</span>
              {product.stockQuantity === 0 ? (
                <span className="text-red-600 font-semibold">Stock Out</span>
              ) : product.stockQuantity < 10 ? (
                <span className="text-orange-500 font-semibold">Low Stock</span>
              ) : (
                <span className="text-green-600 font-semibold">In Stock</span>
              )}
            </p>
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2 overflow-x-hidden">
              <span className="text-lg font-medium text-gray-700">PID:</span>
              <span className="truncate">{product.PID}</span>
            </p>
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2 overflow-x-hidden">
              <span className="text-lg font-medium text-gray-700">SKU:</span>
              <span className="truncate">{product.SKU}</span>
            </p>
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2 overflow-x-hidden">
              <span className="text-lg font-medium text-gray-700">Brand:</span>
              <span className="truncate">{product.brand}</span>
            </p>
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2 overflow-x-hidden">
              <span className="text-lg font-medium text-gray-700 ">Model:</span>
              <span className="truncate">{product.model}</span>
            </p>
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2 overflow-x-hidden">
              <span className="text-lg font-medium text-gray-700">
                Warranty:
              </span>
              <span className="truncate">{product.warranty}</span>
            </p>
          </div>
          <Rating
            value={product.rating}
            showValue
            showCount
            reviewCount={product.reviewCount}
            size="medium"
          />
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Specifications
            </h3>
            <ul className="space-y-2">
              {product.specifications.display && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">Display:</span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.display}
                  </span>
                </li>
              )}
              {product.specifications.memory && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">Memory:</span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.memory}
                  </span>
                </li>
              )}
              {product.specifications.processor && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">
                    Processor:
                  </span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.processor}
                  </span>
                </li>
              )}
              {product.specifications.storage && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">Storage:</span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.storage}
                  </span>
                </li>
              )}
              {product.specifications.camera && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">Camera:</span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.camera}
                  </span>
                </li>
              )}
              {product.specifications.battery && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">Battery:</span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.battery}
                  </span>
                </li>
              )}
              {product.specifications.os && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">OS:</span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.os}
                  </span>
                </li>
              )}
              {product.specifications.connectivity && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">
                    Connectivity:
                  </span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.connectivity}
                  </span>
                </li>
              )}
              {product.specifications.weight && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">Weight:</span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.weight}
                  </span>
                </li>
              )}
              {product.specifications.dimensions && (
                <li className="flex ">
                  <span className="text-gray-600 min-w-[100px]">
                    Dimensions:
                  </span>
                  <span className="font-medium text-gray-800 text-right">
                    {product.specifications.dimensions}
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {product.isDiscount ? "Discounted Price" : "Price"}
            </h3>
            {product.isDiscount ? (
              <div className="space-y-2">
                <span className="text-[#6896AD] text-3xl font-bold">
                  ${discountPrice(product.price, product.discountPercent)}
                </span>
                <span className="line-through text-gray-400 text-xl font-semibold ml-4">
                  ${product.price}
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
            )}
            <u className="text-md text-gray-500 mt-4 flex items-center space-x-2">
              <span>
                <FaPlus size={14} />
              </span>
              <span>Available Payment Method</span>
            </u>
          </div>
          <div className="bg-white  rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  className="py-3 px-6"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  <FaMinus />
                </button>
                <span className="py-2 px-6 min-w-[60px] text-center text-xl font-semibold">
                  {quantity}
                </span>
                <button
                  className="py-3 px-6"
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stockQuantity, q + 1))
                  }
                  disabled={quantity >= product.stockQuantity}
                >
                  <FaPlus />
                </button>
              </div>

              <button
                className="flex-1 bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                onClick={() => {
                  addToCart({ ...product, quantity });
                }}
              >
                Add to Cart
              </button>
              <button
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                onClick={() => {
                  addToCart({ ...product, quantity });
                  router.push("/cart");
                }}
              >
                Buy Now
              </button>
              <button className="p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
                <p
                  onClick={() => toggleWishlist(product)}
                  className={`cursor-pointer bg-red-50  transition-colors ${
                    wishlistItems.find((i) => i.id === product.id)
                      ? "text-red-600 hover:bg-red-100"
                      : "text-red-300 hover:text-red-500 hover:bg-red-100"
                  }`}
                >
                  <FiHeart size={24} />
                </p>
              </button>
              <button className="p-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <p className="flex items-center space-x-1">
                <span>
                  <RiErrorWarningLine />
                </span>
                <span>Product Disclaimer</span>
              </p>
              <p>
                <RiArrowRightSLine size={20} />
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <p className="flex items-center space-x-1">
                <span>
                  <FaRegCircleCheck />
                </span>
                <span>Any Suggestion?</span>
              </p>
              <p>
                <RiArrowRightSLine size={20} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Tab />
      </div>
    </div>
  );
};

export default DetailsProductCard;
