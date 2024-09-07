import React from "react";
import { heroImages } from "../constants/constants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tacking-tight sm:text-6xl">
            Feel at Solace
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            odio delectus aliquid repellendus deleniti perferendis laborum
            ratione iste officia harum?
          </p>
          <div className="mt-10">
            <Link to="/products" className="btn btn-primary">
              Our Products
            </Link>
          </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
          {heroImages.map((image) => (
            <img src={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
