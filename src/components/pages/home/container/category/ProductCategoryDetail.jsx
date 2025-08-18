"use client";
import Loading from "@/app/loading";
import Button from "@/components/UI/buttons/button";
import Rating from "@/components/UI/rating/Rating";
import { useCard } from "@/hooks/usecard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import { PiPauseLight } from "react-icons/pi";

const ProductCategoryDetail = ({ params }) => {
  const [productCat, setProductCat] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceSort, setPriceSort] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { slug } = params || {};
  const router = useRouter();
  if (!slug) {
    return <Loading />;
  }
  const { allProducts, addToCart, wishlistItems, toggleWishlist } = useCard();

  const discountPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  useEffect(() => {
    if (allProducts.length > 0) {
      setIsLoading(true);
      const productByCategory = allProducts
        .flatMap((product) => product.items)
        .filter(
          (item) =>
            item.category?.toString().trim().toLowerCase() ===
            slug?.toString().trim().toLowerCase(),
        );

      setProductCat(productByCategory);
      setFilteredProducts(productByCategory);
      setIsLoading(false);
    }
  }, [allProducts, slug]);

  useEffect(() => {
    let filtered = [...productCat];

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
    }

    if (priceSort === "lowToHigh") {
      filtered.sort((a, b) => {
        const priceA = a.isDiscount
          ? parseFloat(discountPrice(a.price, a.discountPercent))
          : a.price;
        const priceB = b.isDiscount
          ? parseFloat(discountPrice(b.price, b.discountPercent))
          : b.price;
        return priceA - priceB;
      });
    } else if (priceSort === "highToLow") {
      filtered.sort((a, b) => {
        const priceA = a.isDiscount
          ? parseFloat(discountPrice(a.price, a.discountPercent))
          : a.price;
        const priceB = b.isDiscount
          ? parseFloat(discountPrice(b.price, b.discountPercent))
          : b.price;
        return priceB - priceA;
      });
    }

    setFilteredProducts(filtered);
  }, [selectedBrands, priceSort, productCat]);

  const handleBrandChange = (brand, isChecked) => {
    if (isChecked) {
      setSelectedBrands((prev) => [...prev, brand]);
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand));
    }
  };

  const handlePriceSortChange = (sortType) => {
    setPriceSort(sortType);
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setPriceSort("");
  };

  const clearBrandFilter = (brand) => {
    setSelectedBrands((prev) => prev.filter((b) => b !== brand));
  };

  const clearPriceFilter = () => {
    setPriceSort("");
  };

  const uniqueBrands = productCat
    .filter(
      (item, index, array) =>
        array.findIndex((product) => product.brand === item.brand) === index,
    )
    .sort((a, b) => a.brand.localeCompare(b.brand));

  const hasActiveFilters = selectedBrands.length > 0 || priceSort !== "";

  if (isLoading) {
    return <Loading />;
  }

  if (productCat.length === 0) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">No Products Found</h2>
        <p className="text-gray-600">No products available in this category.</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold uppercase">Category: {slug}</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {productCat.length} products
          </span>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors"
            >
              <FiX size={14} />
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mb-4 p-4 bg-gray-50 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Active Filters:
            </span>
            <button
              onClick={clearAllFilters}
              className="text-xs text-red-600 hover:text-red-800 underline"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedBrands.map((brand) => (
              <span
                key={brand}
                className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                Brand: {brand}
                <button
                  onClick={() => clearBrandFilter(brand)}
                  className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                >
                  <FiX size={12} />
                </button>
              </span>
            ))}

            {priceSort && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Price:{" "}
                {priceSort === "lowToHigh" ? "Low to High" : "High to Low"}
                <button
                  onClick={clearPriceFilter}
                  className="hover:bg-green-200 rounded-full p-0.5 transition-colors"
                >
                  <FiX size={12} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="col-span-1 h-fit p-4 border border-gray-200 rounded-md shadow-md sticky top-4">
          <div className="flex items-center justify-between pb-4 border-b border-gray-300">
            <p className="text-xl font-semibold">Filters</p>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-red-600 hover:text-red-800 underline"
              >
                Clear All
              </button>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between py-4">
              <h3 className="text-lg font-semibold">Brand</h3>
              {selectedBrands.length > 0 && (
                <button
                  onClick={() => setSelectedBrands([])}
                  className="text-xs text-red-600 hover:text-red-800 underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {uniqueBrands.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-50 hover:border-[#6896AD] transition-all duration-300 group"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(item.brand)}
                    onChange={(e) =>
                      handleBrandChange(item.brand, e.target.checked)
                    }
                    className="mr-3 text-[#6896AD] rounded w-4 h-4"
                  />
                  <span className="text-sm font-medium group-hover:text-[#6896AD] truncate">
                    {item.brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between py-4">
              <h3 className="text-lg font-semibold">Sort by Price</h3>
              {priceSort && (
                <button
                  onClick={clearPriceFilter}
                  className="text-xs text-red-600 hover:text-red-800 underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="space-y-3">
              <label className="flex items-center p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 hover:border-[#6896AD] transition-all duration-300">
                <input
                  type="radio"
                  name="priceSort"
                  value="lowToHigh"
                  checked={priceSort === "lowToHigh"}
                  onChange={(e) => handlePriceSortChange(e.target.value)}
                  className="mr-3 text-[#6896AD] focus:ring-[#6896AD]"
                />
                <span className="text-sm font-medium">Price: Low to High</span>
              </label>
              <label className="flex items-center p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 hover:border-[#6896AD] transition-all duration-300">
                <input
                  type="radio"
                  name="priceSort"
                  value="highToLow"
                  checked={priceSort === "highToLow"}
                  onChange={(e) => handlePriceSortChange(e.target.value)}
                  className="mr-3 text-[#6896AD] focus:ring-[#6896AD]"
                />
                <span className="text-sm font-medium">Price: High to Low</span>
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">
                No products match your filters.
              </p>
              <button
                onClick={clearAllFilters}
                className="mt-4 text-blue-600 hover:text-blue-800 underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white px-4 py-4 rounded-md border border-gray-200 shadow-sm hover:shadow-md transform duration-300 ease-in-out hover:scale-105"
                >
                  <div className="relative mb-3">
                    <div className="flex justify-center">
                      <Image
                        src={item.primaryImg}
                        alt={item.name}
                        width={200}
                        height={150}
                      />
                    </div>
                    {item.isDiscount && item.discountPercent > 0 && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        -{item.discountPercent}%
                      </div>
                    )}
                  </div>

                  <h3
                    className="text-lg hover:text-[#6896AD] transform duration-300 ease-in-out font-semibold pb-2 cursor-pointer truncate"
                    onClick={() =>
                      router.push(`/productDetails/${item.category}/${item.id}`)
                    }
                    title={item.name}
                  >
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <Rating value={item.rating} size="small" />
                    <p className="text-sm">
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

                  <div className="mb-3">
                    {item.isDiscount ? (
                      <div>
                        <span className="text-[#6896AD] text-xl font-bold">
                          ${discountPrice(item.price, item.discountPercent)}
                        </span>
                        <span className="line-through text-gray-400 text-lg font-semibold ml-2">
                          ${item.price}
                        </span>
                      </div>
                    ) : (
                      <p className="text-xl font-bold">${item.price}</p>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={() => toggleWishlist(item)}
                        className={`cursor-pointer bg-red-50 border border-red-200 rounded-md p-2 transition-colors ${
                          wishlistItems.find((i) => i.id === item.id)
                            ? "text-red-600 hover:bg-red-100"
                            : "text-red-300 hover:text-red-500 hover:bg-red-100"
                        }`}
                        title="Add to wishlist"
                      >
                        <FiHeart size={18} />
                      </button>

                      <button
                        className="cursor-pointer bg-blue-50 border border-blue-200 rounded-md p-2 text-blue-300 hover:text-blue-400 hover:bg-blue-100 transition-colors"
                        onClick={() => addToCart(item)}
                        disabled={item.stockQuantity === 0}
                        title="Add to cart"
                      >
                        <FiShoppingCart size={18} />
                      </button>

                      <button
                        className="cursor-pointer bg-gray-50 border border-gray-200 rounded-md p-2 text-gray-500 hover:text-gray-400 hover:bg-gray-100 transition-colors"
                        title="Compare"
                      >
                        <PiPauseLight size={18} />
                      </button>
                    </div>

                    <Button
                      variant="secondary"
                      text="Buy Now"
                      className="px-4 text-xs"
                      onClick={() => {
                        if (item.stockQuantity > 0) {
                          addToCart(item);
                          router.push("/cart");
                        }
                      }}
                      disabled={item.stockQuantity === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryDetail;
