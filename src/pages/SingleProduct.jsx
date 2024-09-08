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

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const maxAmt = 10;
  const options = Array.from({ length: maxAmt }, (_, i) => {
    const amount = i + 1;
    return amount;
  });

  console.log(options);

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
          className="w-9/12 h-9/12 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{formatPrice(price)}</p>

          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`badge w-6 h-6 mr-2 ${
                    color === productColor && "border-2 border-secondary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              ))}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-10">
            <button className="btn btn-secondary btn-md">Add to bag</button>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow mt-10 rounded-none border-b border-gray-300"
          >
            <div className="collapse-title p-2 flex items-center justify-between">
              <p className="text-md font-medium">Delivery</p>
            </div>
            <div className="collapse-content p-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, fuga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
