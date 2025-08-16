import ShoppingCart from "@/components/pages/home/container/shoppingCart/ShoppingCart";
import React from "react";

const page = ({ params }) => {
  const productId = params.id?.[0]; 

  return (
    <div>
      <ShoppingCart productId={productId} />
    </div>
  );
};

export default page;
