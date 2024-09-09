import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import Navlinks from "./Navlinks";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const { numItemsInCart } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
    dispatch(clearCart());
  };

  return (
    <div className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <Navlinks />
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Solace</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end mr-5">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="indicator mr-5">
                <IoPersonOutline className="h-6 w-6" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Account</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <a>Logout</a>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="indicator mr-5">
                <NavLink to="/login">
                  <IoPersonOutline className="h-6 w-6" />
                </NavLink>
              </div>
            </div>
          )}

          <NavLink to="/cart">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
