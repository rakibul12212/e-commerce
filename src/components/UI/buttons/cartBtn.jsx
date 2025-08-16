"use client";
import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { useCard } from "@/hooks/usecard";

const CartBtn = () => {
  const router = useRouter();
  const { cartItems } = useCard(); 

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="bg-gray-200 p-2 md:p-4 rounded-full hover:bg-black hover:text-white duration-300 ease-in-out">
        <FiShoppingCart size={20} />
      </div>
      {cartItems.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
          {cartItems.length}
        </span>
      )}
    </div>
  );
};

export default CartBtn;
