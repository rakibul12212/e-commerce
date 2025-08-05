"use client";
import CommonProductCard from "@/components/UI/card/CommonProductCard";
import { useCard } from "@/hooks/usecard";
import React, { useEffect } from "react";

const ProductCategoryDetail = ({ params }) => {
  const [productCat, setProductCat] = React.useState([]);
  const { slug } = params || {};
  const { allProducts } = useCard();

  useEffect(() => {
  
    const ProductCategories = allProducts.filter((category) => {
      return (
        category.category?.toLowerCase() === slug?.toLowerCase() ||
        category.name?.toLowerCase().includes(slug?.toLowerCase())
      );
    });
    setProductCat(ProductCategories);
  }, [allProducts, slug]);

  console.log("productCat", productCat);

  if (productCat.length === 0) {
    return <p className="text-lg">No products found in this category.</p>;
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4 uppercase">Category: {slug}</h1>

     
      <div >
        {productCat.map((product) => (
          <div key={product.id}>
            <CommonProductCard
              id={product.id}
              primaryImg={product.primaryImg}
              name={product.name}
              price={product.price}
              rating={product.rating}
              stockQuantity={product.stockQuantity}
              isDiscount={product.isDiscount}
              discountPercent={product.discountPercent}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryDetail;
