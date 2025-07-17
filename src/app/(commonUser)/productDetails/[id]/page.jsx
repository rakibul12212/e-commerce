
import { products } from "@/data/productData";
import React from "react";

const page = ({ params }) => {
  const product = products.find((item) => item.id == params.id);
  if (!product) {
    return (
      <p className="py-10 text-2xl font-semibold flex justify-center items-center h-screen">
        Product not found
      </p>
    );
  }
  return (
    <>
          <p>{product.name }</p>
    </>
  );
};

export default page;
