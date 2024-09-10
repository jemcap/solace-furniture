import React from "react";
import { heroImages } from "../constants/constants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-6">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight leading-tight sm:text-6xl">
            Feel at Solace
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
            Welcome to Solace Furnitures, where comfort meets elegance. Our
            mission is to transform your living space into a sanctuary of style
            and serenity, with meticulously crafted furniture pieces that are as
            unique as you are.
          </p>
          <p className="max-w-xl text-lg leading-8 text-gray-600">
            Discover our collection of premium furniture that seamlessly
            combines modern design with timeless craftsmanship. Let us help you
            create a space that speaks to your soul.
          </p>
          <div className="mt-8">
            <Link
              to="/products"
              className="btn btn-primary text-md font-medium rounded-md"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
        <div className="hidden lg:block columns-2 md:columns-3 gap-4 space-y-4">
          {heroImages.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Gallery Image ${i + 1}`}
              className="w-full mb-4 rounded-lg break-inside-avoid"
              aria-label="images of furnitures"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
