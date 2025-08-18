import BannerCarousel from "@/components/UI/bannerCarousel/bannerCarousel";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const images = [
    {
      url: "https://techlandbd.com/cache/images/uploads/banners/banner-1_cache_optimize-70.webp",
      route: "/categoryproduct/motherboard",
    },
    {
      url: "https://techlandbd.com/cache/images/uploads/banners/banner-2_cache_optimize-70.webp",
      route: "/products",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
        <div className="md:col-span-2 bg-gray-200  md:h-[500px] rounded-md">
          <BannerCarousel />
        </div>
        <div className="hidden md:flex flex-col gap-4 ">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="bg-gray-200 h-[240px] rounded-md relative overflow-hidden"
            >
              <Link href={image.route}>
                <Image
                  src={image.url}
                  alt={`Banner ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }} 
                  sizes="(max-width: 768px) 100vw, 240px"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
