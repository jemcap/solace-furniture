import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const { status } = useRouteError();
  console.log(status);
  if (status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7 ">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link to="/" className="btn btn-primary mt-10">
            Go back home
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <div className="text-center">
        <p className="text-9xl font-semibold text-primary">Uh oh...</p>
        <p className="mt-4 text-lg font-bold tracking-tight sm:text-5xl">
          Something went wrong
        </p>
        <Link to="/" className="btn btn-primary mt-10">
          Go back home
        </Link>
      </div>
    </main>
  );
};

export default Error;
