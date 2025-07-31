// Get all products using async/await
export const getAllProducts = async () => {
  try {
    const response = await fetch(
      "https://e-commerce-server-swart.vercel.app/api/products/allProducts",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    return products.data || products;
  } catch (error) {
    console.error("Failed to fetch all products:", error);
    throw error;
  }
};
