import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { fetchUrl } from "../utils/utils";

const url = "/products";

const allProductsQuery = (params) => {
  const { search, company, category, sort, price, shipping, page } = params;
  return {
    queryKey: [
      "products",
      search ?? "",
      company ?? "all",
      category ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      fetchUrl(url, {
        params: params,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(params);
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
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
