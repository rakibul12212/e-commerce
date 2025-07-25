import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../buttons/button";
import { BsCart3 } from "react-icons/bs";

const ProductCard = ({
  id,
  img,
  name,
  price,
  discount,
  shortDescription,
  hasDiscount,
  stockQuantity,
}) => {
  const router = useRouter();
  return (
    <div className="border border-gray-300 shadow-md bg-gray-50 p-4 rounded-lg grid gap-4 w-full max-w-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="relative w-full h-[200px]">
        <Image src={img} alt={name} fill className="object-cover rounded " />

        {hasDiscount && (
          <p className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </p>
        )}
      </div>

      <p className="text-sm font-semibold text-gray-600">{shortDescription}</p>
      <p className="text-xl font-semibold text-[#6896AD]">{name}</p>
      <div className="flex justify-between items-center">
        <p className="text-md font-semibold text-[#6896AD]">Price: ${price}</p>
        <p
          className={`text-sm  ${
            stockQuantity <= 0
              ? "text-red-600"
              : stockQuantity < 5
              ? "text-yellow-500"
              : "text-green-600"
          }`}
        >
          {stockQuantity <= 0
            ? "Stock Out"
            : stockQuantity < 5
            ? "Low Stock"
            : "In Stock"}
        </p>
      </div>

      <div className="flex justify-start items-center gap-x-2 ">
        <Button
          variant="primary"
          text="View Details"
          onClick={() => router.push(`/productDetails/${id}`)}
          className="flex-4"
        />
        <Button
          variant="iconButton"
          Icon={BsCart3}
          onClick={() => router.push(`/cart`)}
          ariaLabel="Add to cart"
        />
      </div>
    </div>
  );
};

export default ProductCard;
