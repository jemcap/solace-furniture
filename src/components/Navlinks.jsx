import { NavLink } from "react-router-dom";
import { links } from "../constants/constants";

const Navlinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink to={`${url}`}>{text}</NavLink>
          </li>
        );
      })}
    </>
  );
};

export default Navlinks;
