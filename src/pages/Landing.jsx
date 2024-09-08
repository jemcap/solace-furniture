import React from "react";
import Hero from "../components/Hero";
import { fetchUrl } from "../utils/utils";
import { DiscoverProductHero, FeaturedProducts } from "../components";

const url = "/products?featured=true";
const allProductsUrl = "/products";

export const loader = async () => {
  const response = await fetchUrl(url);
  const featuredProducts = response.data.data;

  const allProductsRes = await fetchUrl(allProductsUrl);
  const allProducts = allProductsRes.data.data;
  return { featuredProducts, allProducts };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <DiscoverProductHero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
