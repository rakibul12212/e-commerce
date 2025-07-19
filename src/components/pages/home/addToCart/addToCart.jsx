"use client";
import { useState } from "react";
import { HiX } from "react-icons/hi";

const AddToCart = () => {
  const [closeCart, setCloseCart] = useState(false);

  if (closeCart) return null;

  return (
    <div className="fixed top-0 right-0 z-50 h-screen">
      <div className="bg-white shadow-lg w-md h-full border-l border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-3 ">
          <h2 className="text-lg font-semibold ">Shopping Cart</h2>
          <p>
                      <HiX
                          size={24}
              onClick={() => setCloseCart(true)}
              className="cursor-pointer hover:text-red-500"
            />
          </p>
        </div>
        <div className="text-gray-500 text-center ">Your cart is empty</div>
      </div>
    </div>
  );
};

export default AddToCart;
