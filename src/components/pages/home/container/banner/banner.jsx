import BannerCarousel from "@/components/UI/bannerCarousel/bannerCarousel";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-gray-200 h-[500px] rounded-md">
          <BannerCarousel />
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#FFE8A1] h-[240px] rounded-md">
            <div className=" py-5  text-center">
              <h2 className="text-xl font-bold text-gray-800">
                Compare Products
              </h2>
              <p className="text-gray-400">Choose Two Products to Compare</p>

              <div className="space-y-3 pt-4">
                <input
                  type="search"
                  placeholder="Search first product..."
                  className="w-[500px] px-4 py-1 rounded-md border border-gray-300 bg-white  outline-none transition"
                />
                <input
                  type="search"
                  placeholder="Search second product..."
                  className="w-[500px] px-4 py-1 rounded-md border border-gray-300 bg-white outline-none transition"
                />
                <button
                  className="w-[500px] px-4 py-1 rounded-md border bg-gray-900 hover:bg-black text-white outline-none transition"
                  type="button"
                >
                  Compare
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-[240px] rounded-md relative overflow-hidden">
            <Image
              src="https://www.startech.com.bd/image/catalog/home/job-career-2024.webp"
              alt="img"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
