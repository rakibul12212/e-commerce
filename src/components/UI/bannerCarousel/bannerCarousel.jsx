"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const BannerCarousel = () => {
  const images = [
    "https://techlandbd.com/cache/images/uploads/sliders/image-walton-monitor-1753621560_cache_optimize-70.webp",
    "https://techlandbd.com/cache/images/uploads/sliders/image-amd-web-banner-1753339056_cache_optimize-70.webp",
    "https://techlandbd.com/cache/images/uploads/sliders/image-laptop-banani-1753623272_cache_optimize-70.webp",
  ];

  return (
    <div className="w-full max-w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 1,
            spaceBetween: 25,
          },

          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative h-[200px] md:h-[500px] rounded-md overflow-hidden"
          >
            <Image
              src={image}
              alt={`img ${index + 1}`}
              fill
              className="object-fit object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
