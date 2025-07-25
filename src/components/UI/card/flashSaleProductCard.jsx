"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../buttons/button";
import { BsCart3 } from "react-icons/bs";
import { FiZap } from "react-icons/fi";

const FlashSaleProductCard = ({
  id,
  img,
  name,
  price,
  shortDescription,
  discountedPrice,
  stockQuantity,
}) => {
  const router = useRouter();
  return (
    <div className="border border-gray-300 shadow-md bg-gray-50 p-4 rounded-lg grid gap-4 w-full max-w-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="inline-flex items-center justify-center gap-2 text-lg font-semibold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white px-4 py-1 rounded shadow-md">
        <FiZap className="w-5 h-5" />
        Flash Sale
      </div>
      <div className="relative w-full h-[200px]">
        <Image src={img} alt={name} fill className="object-cover rounded " />

        <p className="absolute bottom-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
          only {stockQuantity} left
        </p>
      </div>

      <p className="text-sm font-semibold text-gray-600">{shortDescription}</p>
      <p className="text-xl font-semibold text-black">{name}</p>
      <div className="flex gap-x-2 items-center">
        <p className="text-xl font-bold text-red-500">Price: ${price}</p>
        <p className="text-lg font-semibold text-gray-400 line-through">
          ${discountedPrice}
        </p>
      </div>

      <Button
        variant="flashSaleButton"
        text="Buy Now"
        onClick={() => router.push(`/cart`)}
        className="w-full  font-semibold"
      />
    </div>
  );
};
export default FlashSaleProductCard;
