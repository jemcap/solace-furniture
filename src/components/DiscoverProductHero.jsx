import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

const DiscoverProductHero = () => {
  const { allProducts } = useLoaderData();

  const getRandomProduct = () => {
    if (!allProducts || allProducts.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * allProducts.length);
    return allProducts[randomIndex];
  };

  const randomProduct = getRandomProduct();
  const { id } = randomProduct;
  const { company, image } = randomProduct.attributes;

  return (
    <div
      className="hero rounded-xl mt-20 justify-end"
      style={{
        backgroundImage: `url(${image})`,
      }}
      role="banner"
      aria-label={`Discover ${company}`}
    >
      <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
      <div className="hero-content text-neutral-content text-end">
        <div className="max-w-md">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">{`Discover ${company}`}</h1>

          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <Link
            to={`/products?company=${encodeURIComponent(company)}`}
            className="btn btn-primary"
            aria-label={`View more details about ${company}`}
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProductHero;
