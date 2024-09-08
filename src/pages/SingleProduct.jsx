import { useLoaderData } from "react-router-dom";
import { formatPrice, fetchUrl } from "../utils/utils";
import { Link } from "react-router-dom";

export const loader = async ({ params }) => {
  const response = await fetchUrl(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  return <div>SingleProduct</div>;
};

export default SingleProduct;
