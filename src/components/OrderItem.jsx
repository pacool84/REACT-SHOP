import React from "react";
import "@styles/OrderItem.scss";
const imageItem =
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const OrderItem = ({ product }) => {
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src="./icons/icon_close.png" alt="close" />
    </div>
  );
};

export default OrderItem;
