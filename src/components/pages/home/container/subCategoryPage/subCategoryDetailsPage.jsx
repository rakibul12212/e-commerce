"use client";
import ProductCard from "@/components/UI/card/productCard";
import { products } from "@/data/productData";

const SubCategoryDetailsPage = ({ params }) => {
  const { slug } = params || {};

  if (!slug) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products.filter(
    (product) => product.subCategory.toLowerCase() === slug.toLowerCase(),
  );

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4 uppercase">Category: {slug}</h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              
            >
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
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SubCategoryDetailsPage;
