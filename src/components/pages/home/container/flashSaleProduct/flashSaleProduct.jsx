"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import FlashSaleProductCard from "@/components/UI/card/flashSaleProductCard";
import FlashSaleProductLoader from "@/components/UI/loading/flashSaleProductLoader";
import { getAllProducts } from "@/lib/data/api";

const FlashSaleProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setAllProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setAllProducts([]);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const flashSale = allProducts.filter((product) => product.flashSale === true);

  return (
    <div className="pt-5">
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-100 p-2 sm:p-3 md:p-4 rounded-lg"
            >
              <FlashSaleProductLoader />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={8}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            1280: { slidesPerView: 5, spaceBetween: 16 },
          }}
          autoplay={{ delay: 2500 }}
          loop={true}
        >
          {flashSale.map((product) => (
            <SwiperSlide key={product.id}>
              <FlashSaleProductCard
                id={product.id}
                img={product.images.primary}
                name={product.name}
                price={product.price}
                discount={product.discount}
                shortDescription={product.description}
                discountedPrice={product.discountedPrice}
                stockQuantity={product.stockQuantity}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FlashSaleProduct;
