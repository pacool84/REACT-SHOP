import React, { useState } from "react";
import "@styles/ProductItem.scss";
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState("");

  const handleCart = () => {
    cart.length == 0 ? setCart("Item Added") : setCart("");
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleCart}>
          <img src={addToCart} alt="" />
          {cart}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
