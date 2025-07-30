"use client";
import { useCard } from "@/hooks/useCard";
import Button from "@/components/UI/buttons/button";
import { HiTrash, HiPlus, HiMinus } from "react-icons/hi";
import Image from "next/image";

const AddToCart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartItemsCount,
    getCartTotal,
  } = useCard();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-10">
        <h2 className="text-2xl font-semibold py-5">Shopping Cart (0 items)</h2>
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
          <Button
            variant="primary"
            text="Continue Shopping"
            onClick={() => (window.location.href = "/products")}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold py-5">
        Shopping Cart ({getCartItemsCount()} items)
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title || item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">
                          {item.title || item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          $
                          {typeof item.price === "number"
                            ? item.price
                            : "0.00"}
                        </p>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="iconButton"
                        Icon={HiTrash}
                        onClick={() => handleRemoveItem(item.id)}
                        className="bg-red-500 hover:bg-red-600 border-red-500 self-start"
                        ariaLabel="Remove item"
                      />
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-sm font-medium text-gray-700">
                        Quantity:
                      </span>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <HiMinus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 min-w-[50px] text-center border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <HiPlus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="ml-auto">
                        <span className="font-semibold text-lg">
                          ${(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal ({getCartItemsCount()} items):</span>
                <span>${getCartTotal()}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>${getCartTotal()}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button
                variant="flashSaleButton"
                text="Proceed to Checkout"
                className="w-full py-3 text-base"
                onClick={() => (window.location.href = "/checkout")}
              />
              <Button
                variant="primary"
                text="Continue Shopping"
                className="w-full py-3 text-base"
                onClick={() => (window.location.href = "/products")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
