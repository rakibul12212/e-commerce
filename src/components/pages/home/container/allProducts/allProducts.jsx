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
      <h2
        className="text-3xl font-bold pb-10 text-center
      "
      >
        Products
      </h2>
      <div className="flex flex-row items-center justify-between  pb-8">
        <div className="flex justify-start items-center gap-x-4 ">
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
        <input
          type="search"
          name="search"
          id="search"
          suggestions="off"
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md px-2 py-1 border border-gray-300 rounded-lg mt-4 "
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index}>
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                No products found
              </h2>
              <p className="text-gray-500">
                {search
                  ? `No products match "${search}"`
                  : "Try adjusting your search or filter criteria"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id}>
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
