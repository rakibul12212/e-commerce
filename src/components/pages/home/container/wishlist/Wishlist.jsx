"use client";
import React from "react";
import { useCard } from "@/hooks/usecard";
import Image from "next/image";
import { FiX, FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCard();
  const router = useRouter();

  if (wishlistItems.length === 0)
    return (
      <div className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        <p className="text-gray-600">Your wishlist is empty!</p>
      </div>
    );

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6">
        Wishlist ({wishlistItems.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="py-3 px-4 text-left">IMAGE</th>
              <th className="py-3 px-4 text-left">PRODUCT</th>
              <th className="py-3 px-4 text-center">STATUS</th>
              <th className="py-3 px-4 text-center">PRICE</th>
              <th className="py-3 px-4 text-center">ACTION</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {wishlistItems.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-4 w-24">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.primaryImg}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </td>

                <td className="py-4 px-4">
                  <h3
                    className="text-xl hover:text-[#6896AD] transform duration-300 ease-in-out font-semibold pb-3 cursor-pointer"
                    onClick={() =>
                      router.push(`/productDetails/${item.category}/${item.id}`)
                    }
                  >
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm ">
                    Brand: {item.brand || "N/A"}, Model: {item.model || "N/A"}
                  </p>
                </td>

                <td className="py-4 px-4 text-center ">
                  <p className="flex justify-center items-center space-x-2  text-sm ">
                    {item.stockQuantity === 0 ? (
                      <span className="text-red-600 font-semibold bg-red-50 px-6 py-1 rounded-xl">
                        Stock Out
                      </span>
                    ) : item.stockQuantity > 0 && item.stockQuantity < 10 ? (
                      <span className="text-orange-500 font-semibold bg-orange-50 px-6 py-1 rounded-xl">
                        Low Stock
                      </span>
                    ) : (
                      <span className="text-green-600 font-semibold bg-green-50 px-6 py-1 rounded-xl">
                        In Stock
                      </span>
                    )}
                  </p>
                </td>

                <td className="py-4 px-4 text-center  font-semibold text-xl">
                  ৳ {item.price.toLocaleString()}
                </td>

                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-gray-900 text-white px-3 py-3 rounded hover:bg-gray-800 text-sm md:text-base"
                    >
                      <FiShoppingCart size={20} />
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="bg-red-500 text-white px-3 py-3 rounded hover:bg-red-600 text-sm md:text-base"
                    >
                      <FiX size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
