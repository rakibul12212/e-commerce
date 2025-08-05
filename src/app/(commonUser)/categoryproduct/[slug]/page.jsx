import ProductCategoryDetail from '@/components/pages/home/container/category/ProductCategoryDetail';
import React from 'react';

const CategoryProductPage = async ({ params }) => {
    const Params = await params;
  return (
    <div>
      <ProductCategoryDetail params={Params} />
    </div>
  );
};

export default CategoryProductPage;


