import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { fetchUrl } from "../utils/utils";
import { useLoaderData } from "react-router-dom";

const url = "/products";

export const loader = async () => {
  const response = await fetchUrl(url);
  const resData = response.data;
  console.log(resData);
  const { data, meta } = resData;
  return { products: data, meta };
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
