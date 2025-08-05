"use client";
import Loading from "@/app/loading";
import { useCard } from "@/hooks/usecard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Specification = () => {
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
  
  const formatKey = (key) => {
    return (
      key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")
    );
  };

  return (
    <div>
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Specifications
        </h3>

        {product.specifications ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {Object.entries(product.specifications).map(
                  ([key, value]) =>
                    value && (
                      <tr
                        key={key}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <td className="py-3 px-4 text-gray-600 font-medium bg-gray-100 w-1/3">
                          {formatKey(key)}
                        </td>
                        <td className="py-3 px-4 text-gray-800">
                          {typeof value === "object"
                            ? JSON.stringify(value)
                            : value}
                        </td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 italic">No specifications available</p>
        )}
      </div>
    </div>
  );
};

export default Specification;
