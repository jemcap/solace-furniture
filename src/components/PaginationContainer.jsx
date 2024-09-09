import React, { useEffect, useMemo } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = useMemo(
    () => Array.from({ length: pageCount }, (_, i) => i + 1),
    [pageCount]
  );

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNum) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNum);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
          aria-label="Previous Page"
        >
          prev
        </button>
        {pages.map((pageNum) => {
          return (
            <button
              onClick={() => handlePageChange(pageNum)}
              key={pageNum}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                page === pageNum ? "bg-base-300 border-base-300" : ""
              }`}
              aria-label={`Page ${pageNum}`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
