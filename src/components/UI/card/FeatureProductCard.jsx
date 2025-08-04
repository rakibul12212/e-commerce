"use client";

import { products } from "@/lib/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";

const FeatureProductCard = () => {
  const [featureProduct, setFeatureProduct] = useState([]);

  useEffect(() => {
    const featureProductCategories = products.filter((category) => {
      return category.items.some((item) => item.isFeature === true);
    });
    setFeatureProduct(featureProductCategories);
  }, []);

  console.log("featureProduct", featureProduct);
  if (featureProduct.length === 0) {
    return <p className="text-lg">No deals available at the moment.</p>;
  }
  return (
    <div>
      <div >
        {featureProduct.map((product, id) =>
          product.items.map(
            (item, index) =>
              item.isFeature && (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 shadow-md rounded-md mb-4"
                >
                  <div>
                    <Image
                      src={item.primaryImg}
                      alt={item.name}
                      width={150}
                      height={150}
                      className="object-cover rounded-md mb-2"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ),
          ),
        )}
      </div>
    </div>
  );
};

export default FeatureProductCard;
