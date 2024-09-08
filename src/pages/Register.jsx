import React from "react";
import { FormInput, SubmitButton } from "../components";
import { Form, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };
  return (
    <section className="h-screen grid place-items-center">
      <div className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <button
          className="btn btn-sm btn-circle btn-outline"
          onClick={handleNavigateToHome}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <Form method="post">
          <h4 className="text-center text-3xl font-bold capitalize mb-5">
            Register
          </h4>
          <FormInput type="text" label="username" name="username" />
          <FormInput type="email" label="email" name="email" />
          <FormInput type="password" label="password" name="password" />
          <div className="mt-4">
            <SubmitButton text="Register" />
          </div>
          <p className="text-center mt-5">
            Already a member?
            <Link
              to="/login"
              className="ml-2
            link
            link-hover
            link-primary
            capitalize"
            >
              Login
            </Link>
          </p>
        </Form>
      </div>
    </section>
  );
};

export default Register;
