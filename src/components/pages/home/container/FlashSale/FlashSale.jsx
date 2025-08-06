"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { useCard } from "@/hooks/usecard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { PiPauseLight } from "react-icons/pi";

import Rating from "@/components/UI/rating/Rating";
import Button from "@/components/UI/buttons/button";

const FlashSale = () => {
  const [flashSaleItems, setFlashSaleItems] = useState([]);
  const router = useRouter();
  const { allProducts } = useCard();

  const discountPrice = (price, discount) =>
    (price - (price * discount) / 100).toFixed(2);



  useEffect(() => {
    const filtered = allProducts.flatMap((category) =>
      Array.isArray(category.items)
        ? category.items.filter((item) => item.isFlashSale)
        : [],
    );
    setFlashSaleItems(filtered);
  }, [allProducts]);

  if (flashSaleItems.length === 0) {
    return <p className="text-lg">No deals available at the moment.</p>;
  }

  return (
    <div className="pt-5">
      <div>
        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Flash Sale
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            1280: { slidesPerView: 5, spaceBetween: 16 },
          }}
          autoplay={{ delay: 2500 }}
          loop
        >
          {flashSaleItems.map((item) => (
            <SwiperSlide key={item.id} className="p-2">
              <div className="bg-white  p-4 mt-4 rounded-md border border-gray-200 shadow-sm hover:shadow-md transform duration-300 ease-in-out hover:scale-105">
                <div className="relative h-56">
                  <Image
                    src={item.primaryImg}
                    alt={item.name}
                    fill
                    className="w-full h-auto object-cover rounded-md mb-2"
                  />
                  {item.isDiscount && (
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-red-600 text-white px-3 py-1 rounded-md text-xs font-bold shadow-lg">
                        {item.discountPercent}% OFF
                      </div>
                    </div>
                  )}
                </div>

                <h3
                  className="text-2xl text-start hover:text-[#6896AD] transform duration-300 ease-in-out font-semibold pt-3 pb-1 cursor-pointer truncate"
                  onClick={() =>
                    router.push(`/productDetails/${item.category}/${item.id}`)
                  }
                >
                  {item.name}
                </h3>
                <div className="flex items-center justify-between ">
                  <Rating value={item.rating} />
                  <p className="flex items-center space-x-2 text-lg">
                    {item.stockQuantity === 0 ? (
                      <span className="text-red-600 font-semibold">
                        Stock Out
                      </span>
                    ) : item.stockQuantity < 10 ? (
                      <span className="text-orange-500 font-semibold">
                        Low Stock
                      </span>
                    ) : (
                      <span className="text-green-600 font-semibold">
                        In Stock
                      </span>
                    )}
                  </p>
                </div>
                <div className="py-3">
                  {item.isDiscount ? (
                    <p className="text-start">
                      <span className="text-[#6896AD] text-2xl font-bold">
                        ${discountPrice(item.price, item.discountPercent)}
                      </span>
                      <span className="line-through text-gray-400 text-xl font-semibold ml-4">
                        ${item.price}
                      </span>
                    </p>
                  ) : (
                    <p className="text-2xl font-bold text-start text-[#6896AD]">
                      ${item.price}
                    </p>
                  )}
                </div>
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center gap-x-4">
                    <p className="cursor-pointer bg-red-50 border border-red-200 rounded-md p-1 text-red-300 hover:text-red-400 hover:bg-red-100 transition-colors">
                      <FiHeart size={24} />
                    </p>
                    <p className="cursor-pointer bg-blue-50 border border-blue-200 rounded-md p-1 text-blue-300 hover:text-blue-400 hover:bg-blue-100 transition-colors">
                      <FiShoppingCart size={24} />
                    </p>
                    <p className="cursor-pointer bg-gray-50 border border-gray-200 rounded-md p-1 text-gray-500 hover:text-gray-400 hover:bg-gray-100 transition-colors">
                      <PiPauseLight size={24} />
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="secondary"
                      text="Buy Now"
                      className="px-8"
                      disabled={item.stockQuantity === 0}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FlashSale;
