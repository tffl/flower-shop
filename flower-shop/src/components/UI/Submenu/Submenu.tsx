import { Link } from "react-router-dom";
import "./submenu.css";

export const Submenu = () => {
  return (
    <ul className="submenu">
      <li className="submenu__item">
        <Link className="submenu__basket" to="/">
          <img src="svg/basket.svg" alt="logo" />
        </Link>
      </li>
      <li className="submenu__item">
        <Link to="/login">Login</Link>
      </li>
      <li className="submenu__item">
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
};
