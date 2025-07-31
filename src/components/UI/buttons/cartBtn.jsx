"use client"
import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

const CartBtn = () => {
  const router = useRouter();
  return (
    <div
      className="bg-gray-200 p-2 mdp-4 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300 ease-in-out"
      onClick={() => router.push("/cart")}
    >
      <FiShoppingCart size={20} />
    </div>
  );
};

export default CartBtn;
