"use client";
import Loading from "@/app/loading";
import { useCard } from "@/hooks/usecard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Review = () => {
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
  return <div>{product.stockQuantity}</div>;
};

export default Review;
