import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const Products = () => {
  const products = productsData.map(product => {
    return (
      <div className="container" key={product.id}>
        <div className="row">
          <div className="col-sm-2">
            <Link to={`/products/${product.id}`}>
              {product.name}
              <img src={product.imgUrl} className="image" width="200px" height="200px" />
            </Link>
            <p>Price: ${product.price}</p>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
};

export default Products;
