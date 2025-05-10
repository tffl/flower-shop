import { Link } from "react-router-dom";
import { Submenu } from "../UI/Submenu/Submenu";
import { Menu } from "../UI/Menu/Menu";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Link className="header__logo" to="/">
          Blossom Bay
        </Link>
        <Menu />
        <Submenu />
      </div>
    </header>
  );
};
