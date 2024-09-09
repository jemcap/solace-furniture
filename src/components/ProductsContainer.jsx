import { useMemo, useState } from "react";
import { ProductsGrid, ProductsList } from "./index";
import { useLoaderData } from "react-router-dom";
import { BsGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta?.pagination?.total;
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = useMemo(
    () => (orientation) =>
      `text-xl btn btn-circle btn-sm ${
        orientation === layout
          ? "btn-primary text-primary-content"
          : "btn-ghost text-base-content"
      }`,
    [layout]
  );

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h1 className="font-medium text-md">
          {totalProducts} {totalProducts !== 1 ? "products" : "product"}
        </h1>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
            aria-label="Grid View"
          >
            <BsGridFill />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
            aria-label="List View"
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">No products match your search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
