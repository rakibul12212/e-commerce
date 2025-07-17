import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../buttons/button";

const ProductCard = ({
  id,
  img,
  name,
  price,
  discount,
  shortDescription,
  hasDiscount,
}) => {
  const router = useRouter();
  return (
    <div className="border border-gray-300 shadow-md bg-gray-50 p-4 rounded-lg grid gap-4 w-full max-w-lg">
      <div className="relative w-full h-[200px]">
        <Image src={img} alt={name} fill className="object-cover rounded " />

        {hasDiscount && (
          <p className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
            {discount}% OFF
          </p>
        )}
      </div>

      <p className="text-sm text-gray-600">{shortDescription}</p>
      <p className="text-lg font-semibold">{name}</p>

      <div className="flex justify-start items-center gap-x-2">
        <p className="text-lg font-semibold text-black">Price: ${price}</p>
      </div>

      <div className="flex justify-start items-center gap-x-3">
        <Button
          variant="primary"
          text="View Details"
          onClick={() => router.push(`/productDetails/${id}`)}
        />
        <Button variant="secondary" text="Add to Cart" />
        
      </div>
      
    </div>
  );
};

export default ProductCard;
