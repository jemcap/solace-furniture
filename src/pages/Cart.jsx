import { useSelector } from "react-redux";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  let user = JSON.parse(localStorage.getItem("user")) ?? null;
  const { numItemsInCart } = useSelector((store) => store.cart);
  if (numItemsInCart === 0) {
    return (
      <div className="min-h-screen">
        <SectionTitle text="Your cart is empty." />
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8  lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block mt-8 capitalize"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 capitalize"
            >
              please log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
