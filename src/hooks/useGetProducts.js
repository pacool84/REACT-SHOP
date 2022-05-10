import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);
  return products;
};
/* Usando metodo tradicional */
/*   const fetchProducts = async () => {
    const response = await fetch(API);
    const product = await response.json();
    setProducts(product);
  };

  useEffect(() => {
    fetchProducts();
  }, []); */
export default useGetProducts;
