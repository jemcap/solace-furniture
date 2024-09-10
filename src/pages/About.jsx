import React from "react";

const About = () => {
  return (
    <section className="min-h-screen py-12">
      <div className="flex flex-col items-center justify-center gap-8 px-4 sm:px-8">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-center sm:text-6xl">
          About Solace Furnitures
        </h1>
        <div className="stats bg-primary shadow w-full max-w-4xl p-6 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-white">
            <div>
              <h2 className="text-2xl font-semibold">10+</h2>
              <p className="text-lg">Years in Business</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">1500+</h2>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">1000+</h2>
              <p className="text-lg">Unique Designs</p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto text-center">
          At Solace Furnitures, we believe that every piece of furniture tells a
          story. Established over a decade ago, our journey has been driven by a
          passion for creating beautiful, high-quality furniture that blends
          style, comfort, and durability. Our team of experienced craftsmen and
          designers works diligently to deliver unique pieces that complement
          every space, whether it’s a cozy home or a sophisticated office
          environment.
        </p>
        <p className="mt-4 text-lg leading-8 max-w-3xl mx-auto text-center">
          From our humble beginnings, we have grown into a trusted name in the
          furniture industry, recognized for our commitment to excellence and
          customer satisfaction. Each product is meticulously crafted using the
          finest materials, ensuring that it not only enhances your living space
          but also stands the test of time. At Solace Furnitures, our mission is
          to turn your vision into reality, one piece of furniture at a time.
        </p>
        <p className="mt-4 text-lg leading-8 max-w-3xl mx-auto text-center">
          We invite you to explore our diverse range of designs and experience
          the elegance and comfort that define Solace Furnitures. Let us help
          you create a space that reflects your unique style and personality.
        </p>
      </div>
    </section>
  );
};

export default About;
