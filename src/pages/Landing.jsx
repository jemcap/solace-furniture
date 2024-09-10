import React from "react";
import Hero from "../components/Hero";
import { fetchUrl } from "../utils/utils";
import { DiscoverProductHero, FeaturedProducts } from "../components";

const url = "/products?featured=true";
const allProductsUrl = "/products";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => fetchUrl(url),
};

const productsHeroQuery = {
  queryKey: ["productsHero"],
  queryFn: () => fetchUrl(allProductsUrl),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const featuredProducts = response.data.data;

  const allProductsRes = await queryClient.ensureQueryData(productsHeroQuery);
  const allProducts = allProductsRes.data.data;
  return { products: featuredProducts, allProducts };
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
