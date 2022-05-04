import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  /* Usando AXIOS para hacer el llamdo  */
  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  /* Usando metodo tradicional */
  /*   const fetchProducts = async () => {
    const response = await fetch(API);
    const product = await response.json();
    setProducts(product);
  };

  useEffect(() => {
    fetchProducts();
  }, []); */

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem />
        ))}
        <ProductItem />
      </div>
    </section>
  );
};

export default ProductList;
