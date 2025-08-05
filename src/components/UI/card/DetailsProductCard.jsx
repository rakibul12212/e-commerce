"use client";
import Loading from "@/app/loading";
import { useCard } from "@/hooks/usecard";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Rating from "../rating/Rating";
import { RiErrorWarningLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa";

const DetailsProductCard = () => {
  const params = useParams();
  const { allProducts } = useCard();
  const [product, setProduct] = useState(null);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto p-4">
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <Image
              src={product.primaryImg}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.detailsImg &&
              product.detailsImg.map((item, index) => (
                <div
                  className="border rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-shadow"
                  key={index}
                >
                  <Image
                    src={item}
                    alt={`${product.name} view ${index + 1}`}
                    width={120}
                    height={120}
                    className="w-full h-24 object-cover rounded-sm"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2">
              <span className="text-lg font-medium text-gray-700">PID:</span>
              <span>{product.PID}</span>
            </p>
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2">
              <span className="text-lg font-medium text-gray-700">SKU:</span>
              <span>{product.SKU}</span>
            </p>
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2">
              <span className="text-lg font-medium text-gray-700">Brand:</span>
              <span>{product.brand}</span>
            </p>
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2">
              <span className="text-lg font-medium text-gray-700">Model:</span>
              <span>{product.model}</span>
            </p>
            <p className="border border-gray-300 rounded px-3 py-1 text-lg space-x-2">
              <span className="text-lg font-medium text-gray-700">
                Warranty:
              </span>
              <span>{product.warranty}</span>
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
                  <span className="text-gray-600">Display:</span>
                  <span className="font-medium text-gray-800">
                    {product.specifications.display}
                  </span>
                </li>
              )}
              {product.specifications.memory && (
                <li className="flex ">
                  <span className="text-gray-600">Memory:</span>
                  <span className="font-medium text-gray-800">
                    {product.specifications.memory}
                  </span>
                </li>
              )}
              {product.specifications.processor && (
                <li className="flex ">
                  <span className="text-gray-600">Processor:</span>
                  <span className="font-medium text-gray-800">
                    {product.specifications.processor}
                  </span>
                </li>
              )}
              {product.specifications.storage && (
                <li className="flex ">
                  <span className="text-gray-600">Storage:</span>
                  <span className="font-medium text-gray-800">
                    {product.specifications.storage}
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
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
          </div>
          <div className="bg-white  rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="py-3 px-6 ">
                  <FaMinus />
                </button>
                <span className="py-2 px-6 min-w-[60px] text-center text-xl font-semibold">
                  1
                </span>
                <button className="py-3 px-6 ">
                  <FaPlus />
                </button>
              </div>

              <button className="flex-1 bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Buy Now
              </button>
              <button className="p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
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
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="flex items-center space-x-1">
              <span>
                <RiErrorWarningLine />
              </span>
              <span>Product Disclaimer</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProductCard;
