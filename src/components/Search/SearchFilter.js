import React, { useState } from 'react';
import './Search.css'; // Ensure correct path to CSS file
import Search from './Search'; // Assuming correct import path for Search component
import Product from './Product'; // Assuming correct import path for Product component
import productsSchema from './Cars'; // Assuming correct import path for products data

const SearchFilter = () => {
  const [productsFilter, setProductsFilter] = useState("");

  // Filter products based on productsFilter state
  const filteredProducts = productsFilter
    ? productsSchema.filter((p) => {
        const searchValue = productsFilter.toLowerCase();
        return (
          p.model.toLowerCase().includes(searchValue) ||
          p.year.toString().includes(searchValue) ||
          p.about.toLowerCase().includes(searchValue)
        );
      })
    : [];

  return (
    <>
      <Search onChange={(e) => setProductsFilter(e.target.value)} />
      <br />
      {filteredProducts.length > 0 &&
        filteredProducts.map((p) => (
          <Product key={p.id} model={p.model} photo={p.photo} id={p.id} />
        ))}
    </>
  );
};

export default SearchFilter;
