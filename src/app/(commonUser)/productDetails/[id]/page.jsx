"use client";
import Loading from "@/app/loading";
import Button from "@/components/UI/buttons/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCard } from "@/hooks/useCard";

const page = ({ params }) => {
  const [size, setSize] = useState("");
  const { allProducts } = useCard();
  const [isAdding, setIsAdding] = useState(false);
  // const router = useRouter();
  const { addToCart, cartItems } = useCard();
  const product = allProducts.find((item) => item.id == parseInt(params.id));
  const isInCart = cartItems.some((item) => item.id === product?.id);
  const handleAddToCart = async () => {
    if (!product || isAdding || product.stockQuantity <= 0) return;

    setIsAdding(true);

    const productToAdd = {
      id: product.id,
      title: product.name,
      name: product.name,
      price: parseFloat(product.price),
      image: product.images.primary,
      shortDescription: product.shortDescription,
      longDescription: product.longDescription,
      category: product.category,
      selectedSize:
        size || (product.variants.length > 0 ? product.variants[0].size : null),
      stockQuantity: product.stockQuantity || 0,
    };

    addToCart(productToAdd);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  const hasDiscount = product.hasDiscount;
  return (
    <>
      <div className="p-4  md:p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 justify-center gap-x-8 gap-y-6 lg:gap-y-0 max-w-7xl mx-auto">
        <div className="">
          <div>
            <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-auto overflow-hidden rounded-lg border border-gray-200">
              <Image
                src={product.images.primary}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 my-4">
              {product.images.detail.map((img, index) => (
                <div
                  key={index}
                  className="w-full aspect-square border border-gray-200 rounded-md overflow-hidden hover:border-gray-400 transition-colors cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${product.name} detail ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-2 sm:px-4 md:px-6 lg:px-0">
          <p className="text-base sm:text-lg md:text-xl text-gray-500 pb-2">
            {product.category}
          </p>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold leading-tight">
            {product.name}
          </p>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold py-2">
              $ {product.price}
            </p>
            <div>
              {hasDiscount && (
                <p className="text-sm font-bold pt-2 text-red-500">
                  {product.discount}% OFF
                </p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-semibold pb-2">
              select size
            </p>
            <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-3 lg:gap-x-4 flex-wrap">
              {product.variants.map((variant, id) => (
                <span
                  key={id}
                  className={`w-12 h-12 sm:w-10 sm:h-10 md:w-9 md:h-9 lg:w-8 lg:h-8 border rounded text-xs sm:text-sm font-semibold flex items-center justify-center cursor-pointer transition-all duration-200 ${
                    size === variant.size
                      ? "border-black bg-black text-white transform scale-105"
                      : "border-gray-500 hover:bg-gray-100 hover:border-gray-700"
                  }`}
                  onClick={() => setSize(variant.size)}
                >
                  {variant.size}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center mt-6 gap-3 sm:gap-4 lg:gap-x-4 pb-2">
            <Button
              variant="primary"
              text="Wishlist"
              className="w-full sm:w-auto order-2 sm:order-1 py-3 sm:py-2"
            />
            <Button
              variant={
                isAdding
                  ? "flashSaleButton"
                  : isInCart
                  ? "secondary"
                  : "secondary"
              }
              text={
                product.stockQuantity <= 0
                  ? "Out of Stock"
                  : isAdding
                  ? "Adding..."
                  : isInCart
                  ? "Added to Cart"
                  : "Add to Cart"
              }
              onClick={handleAddToCart}
              disabled={isAdding || product.stockQuantity <= 0}
              className={`w-full sm:w-auto order-1 sm:order-2 py-3 sm:py-2 font-medium ${
                isAdding
                  ? "bg-green-500 hover:bg-green-600 border-green-500 text-white"
                  : ""
              } ${isInCart ? "bg-green-500 text-white border-green-500" : ""} ${
                product.stockQuantity <= 0
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed hover:bg-gray-400"
                  : ""
              }`}
            />
          </div>
          <div className="py-4 border-t border-gray-100 mt-4">
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-semibold pb-3">
              Product description
            </p>
            <p className="text-gray-500 text-sm sm:text-sm md:text-base leading-relaxed">
              {product.longDescription}
            </p>
          </div>
          <div className="py-2">
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-semibold pb-3">
              materials
            </p>
            <ul className="space-y-1">
              {product.materials.map((material, id) => (
                <li
                  key={id}
                  className="text-xs sm:text-sm text-gray-500 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
