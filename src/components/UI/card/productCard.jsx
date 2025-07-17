import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

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
        <button
          onClick={() => router.push(`/productDetails/${id}`)}
          className="bg-white border border-black px-4 py-1 rounded text-black hover:bg-black hover:text-white transition ease-in-out"
        >
          View Details
        </button>
        <button className="bg-gray-700 border border-gray-700 px-4 py-1 rounded text-white hover:bg-black hover:text-white hover:border-gray-500 transition ease-in-out">
          Add to Cart
        </button>
      </div>
      <div>
       
      
      </div>
    </div>
  );
};

export default ProductCard;
