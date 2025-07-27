import BannerCarousel from "@/components/UI/bannerCarousel/bannerCarousel";
import Image from "next/image";

const Banner = () => {
  return (
    <div >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
        <div className="md:col-span-2 bg-gray-200  md:h-[500px] rounded-md">
          <BannerCarousel />
        </div>
        <div className="hidden md:flex flex-col gap-4 ">
          <div className="bg-gray-200 h-[240px] rounded-md relative overflow-hidden">
            <Image
              src="https://techlandbd.com/cache/images/uploads/banners/banner-1_cache_optimize-70.webp"
              alt="img"
              fill
              style={{ objectFit: "fit" }}
            />
          </div>
          <div className="bg-gray-200 h-[240px] rounded-md relative overflow-hidden">
            <Image
              src="https://techlandbd.com/cache/images/uploads/banners/banner-2_cache_optimize-70.webp"
              alt="img"
              fill
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
