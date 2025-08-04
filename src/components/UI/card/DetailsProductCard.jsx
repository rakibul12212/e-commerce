"use client";
import Loading from "@/app/loading";
import { useCard } from "@/hooks/usecard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailsProductCard = () => {
  const params = useParams();
  const { allProducts } = useCard();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productData = allProducts
      .flatMap((category) => category.items)
      .find((item) => item.id === params.id);
    setProduct(productData);
  }, [allProducts, params.id]);

  if (!product) return <Loading />;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.shortDetails}</p>
      <p>{product.longDetails}</p>
    </div>
  );
};

export default DetailsProductCard;
