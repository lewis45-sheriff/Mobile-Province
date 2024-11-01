import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/product/");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Adjust 'product.name' as per your API response
  );

  return (
    <ProductContext.Provider value={{ products: filteredProducts, searchTerm, setSearchTerm }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
