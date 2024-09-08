import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/utils";

const ProductsGrid = () => {
  const { featuredProducts } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {featuredProducts.map((product) => {
        const { title, price, image } = product.attributes;
        const { id } = product;
        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-72 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{formatPrice(price)}</span>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
