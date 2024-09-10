import { FormInput, SubmitButton } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { fetchUrl } from "../utils/utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await fetchUrl.post("/auth/local", data);
      console.log(response.data);
      store.dispatch(loginUser(response.data));
      toast.success("User logged in successfully");
      return redirect("/");
    } catch (error) {
      console.log(error.response.data.error.message);
      const errorMessage =
        error?.response?.data?.error?.message || "Check your credentials";
      toast.warning(errorMessage);
      return null;
    }
  };

// Component
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDirectToHome = () => {
    navigate("/");
  };

  const loginAsGuestUser = async () => {
    try {
      const response = await fetchUrl.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("Logged in as Guest User");
      return navigate("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Guest user login error. Please try again later.";
      toast.error(errorMessage);
      return null;
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <div className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <button
          className="btn btn-sm btn-circle btn-outline"
          onClick={handleDirectToHome}
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
            login
          </h4>
          <FormInput type="email" label="email" name="identifier" />
          <FormInput type="password" label="password" name="password" />
          <div className="mt-10">
            <SubmitButton text="Login" />
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-block mt-2 capitalize"
            onClick={() => loginAsGuestUser()}
            aria-label="Sign in as guest user"
          >
            guest user
          </button>
          <p className="text-center mt-5">
            Not a member yet?
            <Link
              to="/register"
              className="ml-2 link link-hover link-primary capitalize"
            >
              Register
            </Link>
          </p>
        </Form>
      </div>
    </section>
  );
};

export default Login;
