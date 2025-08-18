"use client";
import { useCard } from "@/hooks/usecard";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

const SearchInputs = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();
  const { allProducts } = useCard();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const flattenProducts = (items) => {
    if (!Array.isArray(items)) return [];

    return items.flatMap((item) => {
      if (item?.products && Array.isArray(item.products)) {
        return flattenProducts(item.products);
      }
      if (item?.items && Array.isArray(item.items)) {
        return flattenProducts(item.items);
      }
      if (item?.subcategories && Array.isArray(item.subcategories)) {
        return flattenProducts(item.subcategories);
      }
      if (item?.name || item?.title || item?.productName) {
        return item;
      }
      return [];
    });
  };

  
  const discountPrice = (price, discount) =>
    (price - (price * discount) / 100).toFixed(2);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchProducts([]);
      setIsOpen(false);
      return;
    }

    if (!allProducts?.length) {
      setSearchProducts([]);
      setIsOpen(false);
      return;
    }

    const flattenedProducts = flattenProducts(allProducts);

    const filtered = flattenedProducts.filter((product) => {
      const searchFields = [
        product?.name,
        product?.title,
        product?.productName,
        product?.description,
        product?.category,
      ];

      return searchFields.some((field) =>
        field?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    });

    setSearchProducts(filtered.slice(0, 10));
    setIsOpen(true);
  }, [searchQuery, allProducts]);

  const handleProductSelect = (product) => {
    
    router.push(`/productDetails/${product.category}/${product.id}`);
    setSearchQuery("");
    setSearchProducts([]);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setSearchProducts([]);
      setIsOpen(false);
    }
  };

  const getTotalProductsCount = () => {
    if (!allProducts?.length) return 0;
    return flattenProducts(allProducts).length;
  };

  
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchProducts.length > 0) {
      handleProductSelect(searchProducts[0]);
    } else if (e.key === "Escape") {
      setSearchQuery("");
      setSearchProducts([]);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative ">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="min-w-xl max-w-5xl border border-gray-300 rounded-lg px-4 py-1 outline-none"
      />

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50"
        >
          <div className="px-4 py-2 border-b border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center text-sm">
              <span className="text-red-600 font-medium">
                Showing {searchProducts.length} out of {getTotalProductsCount()}{" "}
                results for "{searchQuery}"
              </span>
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => {
                  router.push("/products");
                  setSearchQuery("");
                  setSearchProducts([]);
                  setIsOpen(false);
                }}
              >
                View All
              </span>
            </div>
          </div>

          {searchProducts.length > 0 ? (
            searchProducts.map((product, index) => (
              <div
                key={product?.id || product?._id || product?.name || index}
                className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                onClick={() => handleProductSelect(product)}
              >
                <div className="w-12 h-12 mr-3 flex-shrink-0">
                  <img
                    src={product?.primaryImg}
                    alt={product?.name}
                    className="w-full h-full object-cover rounded border border-gray-300"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 hover:text-[#6896AD] cursor-pointer truncate">
                    {product?.name}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center space-x-2">
                      {product.isDiscount ? (
                        <p className="text-start">
                          <span className="text-[#6896AD] text-md font-bold">
                            ${discountPrice(product.price, product.discountPercent)}
                          </span>
                          <span className="line-through text-gray-400 text-sm font-semibold ml-4">
                            ${product.price}
                          </span>
                        </p>
                      ) : (
                        <p className="text-2xl font-bold text-start text-[#6896AD]">
                          ${product.price}
                        </p>
                      )}
                    </div>

                    <span className="flex items-center space-x-2 text-lg">
                      {product.stockQuantity === 0 ? (
                        <span className="text-red-600 font-semibold">
                          Stock Out
                        </span>
                      ) : product.stockQuantity < 10 ? (
                        <span className="text-orange-500 font-semibold">
                          Low Stock
                        </span>
                      ) : (
                        <span className="text-green-600 font-semibold">
                          In Stock
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-8 text-center">
              <p className="text-gray-500">No products found</p>
              <p className="text-xs text-gray-400 mt-2">
                Total products available: {getTotalProductsCount()}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInputs;
