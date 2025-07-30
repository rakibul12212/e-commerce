"use client";
import Loading from "@/app/loading";
import ProductCard from "@/components/UI/card/productCard";
import { getAllProducts } from "@/lib/data/api";
import { useEffect, useState } from "react";

const SubCategoryDetailsPage = ({ params }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { slug } = params || {};
  if (!slug) {
    return <Loading />;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setAllProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return <Loading />;
  }

  const filteredProducts = allProducts.filter(
    (product) => product.subCategory.toLowerCase() === slug.toLowerCase(),
  );

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4 uppercase">Category: {slug}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                img={product.images.primary}
                name={product.name}
                price={product.price}
                discount={product.discount}
                shortDescription={product.description}
                hasDiscount={product.hasDiscount}
              />
            </div>
          ))
        ) : (
          <div className="col-span-2 md:col-span-4 2xl:col-span-5 text-center py-20">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategoryDetailsPage;
