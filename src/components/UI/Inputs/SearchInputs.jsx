import { useCard } from '@/hooks/usecard';
import React from 'react';

const SearchInputs = () => {
  const [searchProducts, setSearchProducts] = React.useState([]);
  const { allProducts } = useCard();

  useEffect(() => {
   
  let filteredProduct = allProducts;
  if (selectedCategory !== "all") {
    filteredProduct = filteredProduct.filter(
      (product) => product.category === selectedCategory,
    );
  }
}, [allProducts]);

 

  if (searchProducts.length === 0) {
    return <p className="text-lg">No deals available at the moment.</p>;
  }
  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search products..."
        className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none w-3xl"
      />
    </div>
  );
};

export default SearchInputs;