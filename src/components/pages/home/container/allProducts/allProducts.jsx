"use client";
import ProductCard from "@/components/UI/card/productCard";
import ProductCardSkeleton from "@/components/UI/loading/ProductCardSkeletonLoading";
import { useEffect, useState } from "react";
import Button from "@/components/UI/buttons/button";
import { useCard } from "@/hooks/useCard";

export const AllProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { allProducts } = useCard();
  const [search, setSearch] = useState("");

  // loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // category filter
    let filteredProduct = allProducts;
    if (selectedCategory !== "all") {
      filteredProduct = filteredProduct.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // search input
    if (search.trim()) {
      filteredProduct = filteredProduct.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase()) ||
          product.shortDescription
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          product.price.toString().includes(search),
      );
    }

    setFilteredProducts(filteredProduct);
  }, [selectedCategory, search, allProducts]);

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold pb-6 md:pb-10 text-start">
        Products
      </h2>

      {/* Mobile-first responsive layout */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 md:pb-8">
        {/* Filter buttons - stack on mobile, horizontal on larger screens */}
        <div className="flex flex-col-3 sm:flex-row justify-start items-stretch sm:items-center gap-2 sm:gap-x-4">
          <Button
            text="All Products"
            variant={selectedCategory === "all" ? "secondary" : "primary"}
            onClick={() => setSelectedCategory("all")}
          />
          <Button
            text="Mens Fashion"
            variant={
              selectedCategory === "mens fashion" ? "secondary" : "primary"
            }
            onClick={() => setSelectedCategory("mens fashion")}
          />
          <Button
            text="Womens Fashion"
            variant={
              selectedCategory === "womens fashion" ? "secondary" : "primary"
            }
            onClick={() => setSelectedCategory("womens fashion")}
          />
        </div>

        {/* Search input */}
        <input
          type="search"
          name="search"
          id="search"
          suggestions="off"
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full lg:max-w-md px-3 py-2 border border-gray-300 rounded-lg text-sm md:text-base"
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-100 p-3 md:p-4 rounded-lg"
            >
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 md:py-20 px-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-2 md:mb-4">
                No products found
              </h2>
              <p className="text-sm md:text-base text-gray-500">
                {search
                  ? `No products match "${search}"`
                  : "Try adjusting your search or filter criteria"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-100 p-3 md:p-4 rounded-lg"
                >
                  <ProductCard
                    id={product.id}
                    img={product.images.primary}
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                    shortDescription={product.description}
                    hasDiscount={product.hasDiscount}
                    stockQuantity={product.stockQuantity}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
