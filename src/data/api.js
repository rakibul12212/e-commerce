// Get all products using async/await
export const getAllProducts = async () => {
  try {
    const response = await fetch("http://localhost/allProducts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Failed to fetch all products:", error);
    throw error;
  }
};
