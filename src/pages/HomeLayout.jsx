import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Loading } from "../components";

const HomeLayout = () => {
  const { state } = useNavigation();
  console.log(state);
  const isLoading = state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}

      <Footer />
    </>
  );
};

export default HomeLayout;
