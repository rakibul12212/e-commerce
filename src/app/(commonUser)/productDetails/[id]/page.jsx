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
      <div className="p-20 grid grid-cols-1 md:grid-cols-2 justify-center gap-x-2 max-w-7xl mx-auto">
        <div className="">
          <div>
            <Image
              src={product.images.primary}
              alt={product.name}
              width={500}
              height={200}
              className="border border-gray-200"
            />
            <div className="flex gap-x-6 my-4">
              {product.images.detail.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${product.name} detail ${index + 1}`}
                  width={150}
                  height={50}
                  className="border border-gray-200"
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl text-gray-500 pb-2">{product.category}</p>
          <p className="text-3xl font-bold ">{product.name}</p>

          <div className="flex gap-x-2">
            <p className="text-3xl font-bold py-2">$ {product.price}</p>
            <div>
              {hasDiscount && (
                <p className="text-sm font-bold pt-2 text-red-500">
                  {product.discount}% OFF
                </p>
              )}
            </div>
          </div>
          <div className="">
            <p className="text-lg font-semibold pb-2">select size</p>
            <p className="flex gap-x-4">
              {product.variants.map((variant, id) => (
                <span
                  key={id}
                  className={`w-8 h-8 border rounded text-sm font-semibold flex items-center justify-center cursor-pointer transition-colors ${
                    size === variant.size
                      ? "border-black bg-black text-white"
                      : "border-gray-500 hover:bg-gray-100"
                  }`}
                  onClick={() => setSize(variant.size)}
                >
                  {variant.size}
                </span>
              ))}
            </p>
          </div>
          <div className="flex  items-center mt-6 gap-x-4 pb-2">
            <Button variant="primary" text="Wishlist" />
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
              className={`${
                isAdding
                  ? "bg-green-500 hover:bg-green-600 border-green-500 text-green-500"
                  : ""
              } ${
                isInCart ? "bg-green-500 text-green-700 border-green-300" : ""
              } ${
                product.stockQuantity <= 0
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed hover:bg-gray-400"
                  : ""
              }`}
            />
          </div>
          <div className="py-2">
            <p className="text-lg font-semibold pb-2 ">Product description</p>
            <p className="text-gray-500">{product.longDescription}</p>
          </div>
          <div>
            <p className="text-lg font-semibold pb-2 ">materials</p>
            <ul>
              {product.materials.map((material, id) => (
                <li key={id} className="text-sm text-gray-500">
                  - {material}
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
