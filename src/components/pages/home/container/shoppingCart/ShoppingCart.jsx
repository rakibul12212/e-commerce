"use client";

import React, { useState } from "react";
import { useCard } from "@/hooks/usecard";
import Image from "next/image";
import { FiX, FiMinus, FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCard(); 
  const [couponCode, setCouponCode] = useState("");
  const [rewardPoints, setRewardPoints] = useState("");
const router = useRouter();
 
  const calculateDiscount = (price, discountPercent) => {
    return (price * discountPercent) / 100;
  };

  
  const calculateItemTotal = (item) => {
    const basePrice = item.price * item.qty;
    const discount = item.isDiscount
      ? calculateDiscount(basePrice, item.discountPercent)
      : 0;
    return basePrice - discount;
  };

 
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0,
    );
  };

  const total = calculateTotal();
  const grandTotal = total;

  if (cartItems.length === 0) {
    return (
      <div className="py-10">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
        
        <div className="grid grid-cols-8 gap-4 p-4 bg-gray-50 border-b border-gray-300 font-semibold text-gray-700">
          <div className="text-xl">Image</div>
          <div className="col-span-2 text-xl">Product</div>
          <div className="text-center text-xl">Quantity</div>
          <div className="text-center text-xl">Price</div>
          <div className="text-center text-xl">Discount</div>
          <div className="text-center text-xl">Amount</div>
          <div className="text-center text-xl">Action</div>
        </div>

       
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-8 gap-4 p-4 border-b border-gray-300 items-center"
          >
            
            <div className="relative w-20 h-20 border border-gray-300 rounded-md">
              <Image
                src={item.primaryImg}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>

           
            <div className="col-span-2">
              <h3 className="text-xl font-medium text-gray-900">{item.name}</h3>
              <p className="text-lg text-gray-500">
                Model: {item.model || "N/A"}
              </p>
            </div>

            
            <div className="flex items-center justify-center">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="p-1 hover:bg-gray-100"
                >
                  <FiMinus size={16} />
                </button>
                <input
                  type="number"
                  value={item.qty}
                  readOnly
                  className="w-12 text-xl text-center border-0 outline-none"
                  min="1"
                />
                <button
                  onClick={() => increaseQty(item.id)}
                  className="p-1 hover:bg-gray-100"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>

            
            <div className="text-xl text-center font-medium">
              ${item.price.toFixed(2)}
            </div>

            
            <div className="text-xl text-center">
              {item.isDiscount ? (
                <span className="text-red-600">
                  $
                  {calculateDiscount(
                    item.price * item.qty,
                    item.discountPercent,
                  ).toFixed(2)}
                </span>
              ) : (
                <span>-</span>
              )}
            </div>

            
            <div className="text-center text-xl font-semibold">
              ${calculateItemTotal(item).toFixed(2)}
            </div>

            
            <div className="text-xl text-center">
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

    
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      
        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Apply coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Coupon
            </button>
          </div>

          <div className="text-sm text-green-600 mb-2">Available Point: 0</div>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="0"
              value={rewardPoints}
              onChange={(e) => setRewardPoints(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Use Reward
            </button>
          </div>
        </div>

       
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Total</span>
            <span className="text-lg font-semibold">${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center mb-6 text-xl font-bold">
            <span>Grand Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors" onClick={() => router.push("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
