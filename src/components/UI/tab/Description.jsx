"use client";
import Loading from "@/app/loading";
import { useCard } from "@/hooks/usecard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Description = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const { allProducts } = useCard();
  useEffect(() => {
    const productData = allProducts
      .flatMap((category) => category.items)
      .find((item) => item.id === params.id);
    setProduct(productData);
  }, [allProducts, params.id]);

  if (!product) return <Loading />;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <h2 className="text-xl font-bold">{product.shortDetails}</h2>
      <h2 className="max-w-3xl text-lg text-gray-700">{product.longDetails}</h2>
    </div>
  );
};

export default Description;
