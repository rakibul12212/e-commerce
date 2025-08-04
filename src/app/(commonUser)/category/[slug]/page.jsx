import ProductCategory from "@/components/pages/home/container/category/ProductCategory";
import React from "react";

const CategoryPage = async ({ params }) => {
  const Params = await params;
  return (
    <div>
      <ProductCategory params={Params} />
    </div>
  );
};

export default CategoryPage;
