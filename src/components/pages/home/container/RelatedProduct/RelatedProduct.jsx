"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCard } from "@/hooks/usecard";

const RelatedProductPage = () => {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const params = useParams(); // expects { id, category } from dynamic route
    const { allProducts } = useCard();
    const router = useRouter();

     const discountPrice = (price, discount) => {
       return (price - (price * discount) / 100).toFixed(2);
     };

  useEffect(() => {
    if (!params?.id || !params?.category || allProducts.length === 0) return;

    const productData = allProducts
      .filter((category) => category.category === params.category)
      .flatMap((category) => category.items)
      .filter((item) => item.id !== params.id);

    setRelatedProduct(productData);
  }, [allProducts, params.id, params.category]);

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-300 shadow-sm">
      <h2 className="text-2xl font-bold pb-4">Related Products</h2>
      <div className="space-y-3">
        {relatedProduct.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transform  duration-100  hover:scale-105 cursor-pointer bg-white"
          >
            <div className="flex-shrink-0">
              <img
                src={item.primaryImg}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-lg font-semibold line-clamp-2 leading-tight hover:text-[#6896AD] "
                onClick={() =>
                  router.push(`/productDetails/${item.category}/${item.id}`)
                }
              >
                {item.name} {item.shortDetails}
              </p>
              {item.isDiscount ? (
                <p>
                  <span className="text-[#6896AD] text-lg font-semibold">
                    ${discountPrice(item.price, item.discountPercent)}
                  </span>
                  <span className="line-through text-gray-400 text-md font-semibold  ml-4">
                    ${item.price}
                  </span>
                </p>
              ) : (
                <p className="text-lg font-semibold">${item.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductPage;
