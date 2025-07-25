"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { products } from "@/data/productData";
import FlashSaleProductCard from "@/components/UI/card/flashSaleProductCard";
import FlashSaleProductLoader from "@/components/UI/loading/flashSaleProductLoader";

const FlashSaleProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const flashSale = products.filter((product) => product.flashSale === true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-5">
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="border border-gray-100 p-4 rounded-lg">
              <FlashSaleProductLoader />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 2500 }}
          loop={true}
          className="!pb-8"
        >
          {flashSale.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="border border-gray-100 p-4 rounded-lg h-full">
                <FlashSaleProductCard
                  id={product.id}
                  img={product.images.primary}
                  name={product.name}
                  price={product.price}
                  shortDescription={product.description}
                  discountedPrice={product.discountedPrice}
                  stockQuantity={product.stockQuantity}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FlashSaleProduct;
