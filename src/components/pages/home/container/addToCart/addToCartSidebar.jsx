import React from "react";

const AddToCartSidebar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-white z-50 shadow-lg p-5 overflow-scroll">
        <p className="text-lg font-semibold py-5">Shopping Cart</p>
      </div>
      <div className="text-gray-500 text-center">Your cart is empty</div>
    </div>
  );
};

export default AddToCartSidebar;
