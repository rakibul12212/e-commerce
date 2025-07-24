"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BannerCarousel = () => {
  const images = [
    "https://www.startech.com.bd/image/cache/catalog/home/banner/2025/bkash-offer-web-banner-982x500.webp",
    "https://www.startech.com.bd/image/cache/catalog/home/banner/2025/star-link-home-banner-july-982x500.webp",
  ];

  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`img ${index + 1}`} className="rounded-md" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
