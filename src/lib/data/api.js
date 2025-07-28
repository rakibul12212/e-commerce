// Get all products using async/await
export const getAllProducts = async () => {
  try {
    const response = await fetch(
      "https://web-ecommerce-server.vercel.app/allProducts",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
     console.log({products});
    return products;
  } catch (error) {
    console.error("Failed to fetch all products:", error);
    throw error;
  }
 
};
