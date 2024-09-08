import { useState } from "react";
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
  console.log(product);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(0);

  return (
    <section className="min-h-screen">
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to={`/products/${product.id}`} className="capitalize">
              {title}
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          aria-label={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{formatPrice(price)}</p>

          <p className="mt-6 leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
