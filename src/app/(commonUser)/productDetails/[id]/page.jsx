import Button from "@/components/UI/buttons/button";
import { products } from "@/data/productData";
import Image from "next/image";
import React from "react";

const page = ({ params }) => {
  const product = products.find((item) => item.id == parseInt(params.id));
  const hasDiscount = product.hasDiscount;
  if (!product) {
    return (
      <p className="py-10 text-2xl font-semibold flex justify-center items-center h-screen">
        Product not found
      </p>
    );
  }
  return (
    <>
      <div className="p-20 grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <div className="">
          <div>
            <Image
              src={product.images.primary}
              alt={product.name}
              width={500}
              height={200}
              className="border border-gray-500"
            />
            <div className="flex gap-x-6 my-4">
              {product.images.detail.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${product.name} detail ${index + 1}`}
                  width={150}
                  height={50}
                  className="border border-gray-500"
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl text-gray-500 pb-2">{product.category}</p>
          <p className="text-4xl font-bold ">{product.name}</p>
          <div>
            {hasDiscount && (
              <p className="text-xl font-semibold pt-2 text-red-500">
                {product.discount}% OFF
              </p>
            )}
          </div>
          <p className="text-4xl font-bold pb-2">${product.price}</p>
          <div className="py-2">
            <p className="text-lg font-semibold pb-2">select size</p>
            <p className="flex gap-x-4">
              {product.variants.map((variant) => (
                <span
                  key={`${variant.size}-${variant.color}`}
                  className="w-10 h-10 border border-gray-500 rounded text-lg font-semibold flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  {variant.size}
                </span>
              ))}
            </p>
          </div>
          <div className="flex  items-center mt-6 gap-x-4 pb-2">
            <Button variant="primary" text="Wishlist" />
            <Button variant="secondary" text="Add to Cart" />
          </div>
          <div className="py-2">
            <p className="text-lg font-semibold pb-2 ">Product description</p>
            <p className="text-gray-500">{product.longDescription}</p>
          </div>
          <div>
            <p className="text-lg font-semibold pb-2 ">materials</p>
            <ul>
              {product.materials.map((material, id) => (
                <li key={id}>- {material}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
