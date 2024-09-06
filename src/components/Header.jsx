import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link text-xs sm:text-sm underline">
            Sign in
          </Link>
          <Link to="/register" className="link text-xs sm:text-sm underline">
            Create an account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
