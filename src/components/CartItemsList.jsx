import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./index";

const CartItemsList = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.cartId} cartItem={item} />
      ))}
    </div>
  );
};

export default CartItemsList;
