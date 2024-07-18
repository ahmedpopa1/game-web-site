import React, { useState } from "react";
import productsSchema from "../Search/Cars"; // Assuming productsSchema is imported correctly
import "./ItemsList.css";
import * as ROUTES from "./../constants/routes";
import { Link } from "react-router-dom";
import Navbar from "../nav/Navbar";

export default function ItemList() {
  const isAdmin = true; // Assuming isAdmin is used for admin check
  const [products, setProducts] = useState(productsSchema);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const renderProductCard = (product) => (
    <div className="card" key={product.id}>
      <div className="card-header">
        <h3>{product.model}</h3>
      </div>
      <div className="card-body" style={{ backgroundImage: `url(${product.photo})` }}>
      
        <Link to={`${ROUTES.SINGLE_ITEM}/${product.id}`}>
          <button className="btn-list">
            <span>More Details</span>
          </button>
        </Link>
        {isAdmin && (
          <button onClick={() => handleDelete(product.id)} className="btn-list">
            <span>Delete</span>
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="row">
        {isAdmin
          ? products.map((product) => renderProductCard(product))
          : productsSchema.map((product) => renderProductCard(product))}
      </div>
    </>
  );
}
