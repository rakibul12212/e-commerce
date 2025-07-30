"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../buttons/button";
import { FiZap } from "react-icons/fi";
import { useCard } from "@/hooks/useCard";

const FlashSaleProductCard = ({
  id,
  img,
  name,
  price,
  shortDescription,
  discountedPrice,
  stockQuantity,
  discount
}) => {
  const router = useRouter();
  const { addToCart, cartItems } = useCard();
  const [isAdding, setIsAdding] = useState(false);


  const isInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = async () => {
    if (stockQuantity <= 0) return;

    setIsAdding(true);

    const product = {
      id,
      title: name,
      name,
      price: parseFloat(price),
      image: img,
      shortDescription,
      stockQuantity,
     
      discountedPrice: parseFloat(discountedPrice),
      isFlashSale: true,
    };

    addToCart(product);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  return (
    <div className="border-none md:border border-gray-300 shadow-md rounded-md grid gap-3 p-0 md:p-3  md:max-w-lg transform transition-all duration-300 ease-in-out hover:shadow-xl  cursor-pointer bg-white">
      <div className="inline-flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-lg font-semibold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white px-2 sm:px-4 py-1 rounded-md shadow-md">
        <FiZap className="w-3 h-3 sm:w-5 sm:h-5" />
        <span className="text-xs sm:text-base">Flash Sale</span>
      </div>

      <div
        className="relative w-full h-[150px] sm:h-[180px] md:h-[200px] cursor-pointer"
        onClick={() => router.push(`/productDetails/${id}`)}
      >
        <Image src={img} alt={name} fill className="object-cover rounded-lg" />
        <div className="hidden md:block">
          <p className="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">
            Only {stockQuantity} left!
          </p>
        </div>
      </div>

      <div className="text-center space-y-2">
        <div className="hidden">
          <p className="text-xs sm:text-sm font-medium text-gray-600 line-clamp-2">
            {shortDescription}
          </p>
        </div>
        <h3 className="text-sm sm:text-lg font-bold text-gray-800 line-clamp-2">
          {name}
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-1 sm:gap-x-3 items-center">
          <p className="text-xl sm:text-2xl font-bold text-green-600">
            ${price}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm sm:text-lg font-medium text-gray-400 line-through">
              ${discountedPrice}
            </p>
            <span className="text-xs sm:text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">
              {discount}%
              OFF
            </span>
          </div>
        </div>
      </div>

      <Button
        variant="flashSaleButton"
        text={isAdding ? "Adding..." : isInCart ? "Buy Now" : "Buy Now"}
        onClick={handleAddToCart}
        className={`w-full text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all duration-200 ${
          stockQuantity <= 0 ? "opacity-50 cursor-not-allowed" : ""
        } ${isAdding ? "bg-green-500 hover:bg-green-600" : ""}`}
      />
    </div>
  );
};
export default FlashSaleProductCard;
