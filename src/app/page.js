import ProductCard from "@/components/card/productCard";
import { products } from "../../data/productData";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-20 px-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-100 p-4 rounded-lg"
          >
            <ProductCard
              
              img={product.img}
              name={product.name}
              price={product.price}
              discount={product.discount}
              shortDescription={product.description}
              hasDiscount={product.hasDiscount}
            />
          </div>
        ))}
      </div>
    </>
  );
}
