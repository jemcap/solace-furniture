import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { fetchUrl } from "../utils/utils";
import { useLoaderData } from "react-router-dom";

const url = "/products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  const response = await fetchUrl(url, { params });
  const resData = response.data;
  console.log(resData);
  const { data, meta } = resData;
  return { products: data, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
