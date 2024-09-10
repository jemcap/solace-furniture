import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { fetchUrl, formatPrice } from "../utils/utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const { name, address } = data;
    const { user } = store.getState().user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await fetchUrl.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("Order placed successfully.");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitButton text="Place Your Order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
