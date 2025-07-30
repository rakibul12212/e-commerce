import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../buttons/button";
import { BsCart3, BsCheck } from "react-icons/bs";
import { useCard } from "@/hooks/useCard";

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
  const { addToCart, cartItems } = useCard();
  const [isAdding, setIsAdding] = useState(false);

  // Check if product is already in cart
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
    };

    addToCart(product);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  return (
    <div className="border border-gray-300 shadow-md bg-gray-50 p-2 sm:p-3 md:p-4 rounded-lg grid gap-2 sm:gap-3 md:gap-4 w-full transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]">
        <Image src={img} alt={name} fill className="object-cover rounded" />

        {hasDiscount && (
          <p className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-red-500 text-white text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
            {discount}% OFF
          </p>
        )}
      </div>

      <p className="text-xs sm:text-sm font-semibold text-gray-600 line-clamp-2">
        {shortDescription}
      </p>
      <p className="text-sm sm:text-lg md:text-xl font-semibold text-[#6896AD] line-clamp-2">
        {name}
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
        <p className="text-sm sm:text-md font-semibold text-[#6896AD]">
          Price: ${price}
        </p>
        <p
          className={`text-xs sm:text-sm ${
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

      <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-2">
        <Button
          variant="primary"
          text="View Details"
          onClick={() => router.push(`/productDetails/${id}`)}
          className="flex-1 text-xs sm:text-sm py-2 sm:py-2.5"
        />
        <Button
          variant={
            isAdding ? "flashSaleButton" : isInCart ? "secondary" : "iconButton"
          }
          Icon={isAdding ? BsCheck : BsCart3}
          onClick={handleAddToCart}
          ariaLabel={
            stockQuantity <= 0
              ? "Out of stock"
              : isInCart
              ? "Already in cart"
              : "Add to cart"
          }
          className={`${
            stockQuantity <= 0 ? "opacity-50 cursor-not-allowed" : ""
          } ${
            isAdding ? "bg-green-500 hover:bg-green-600 border-green-500" : ""
          } sm:w-auto w-full py-2 sm:py-2.5`}
        />
      </div>
    </div>
  );
};

export default ProductCard;
