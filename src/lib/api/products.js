const getAllProducts = async () => {
  const response = await fetch(
    "https://e-commerce-server-swart.vercel.app/products",
  );

  const data = await response.json();
  return data;
};

export const getProducts = getAllProducts;

