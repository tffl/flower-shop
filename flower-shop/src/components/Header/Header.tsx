import { Link, useLocation } from "react-router-dom";
import { Submenu } from "../UI/Submenu/Submenu";
import { Menu } from "../UI/Menu/Menu";
import "./header.css";
import { HeaderProps } from "../../types/types";
import { useState } from "react";
import { Burger } from "../UI/Burger/Burger";

export const Header = ({
  textColor = "var(--color-txt)",
  position = "fixed",
  backColor = "#ffffff",
}: HeaderProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const headerElementsColor =
    isHomePage && menuVisible
      ? `var(--color-footer-back)`
      : isHomePage
        ? `var(--color-txt)`
        : textColor;

  const handleToggle = (isViible: boolean) => {
    const body = document.body.classList;
    setMenuVisible(isViible);
    isViible ? body.add("bodyNoScroll") : body.remove("bodyNoScroll");
  };

  return (
    <header
      className="header"
      style={{ position: position, backgroundColor: backColor }}
    >
      <div className="header__wrapper container">
        <Link
          style={{ color: headerElementsColor }}
          className="header__logo"
          to="/"
        >
          Blossom Bay
        </Link>
        {!menuVisible ? (
          <Menu textColor={textColor} className="menu" onClick={handleToggle} />
        ) : (
          <Menu
            textColor={isHomePage ? `var(--color-footer-back)` : textColor}
            className="menu open"
            onClick={() => handleToggle(false)}
          />
        )}
        <Submenu
          textColor={headerElementsColor}
          iconColor={headerElementsColor}
        />

        <Burger
          className="burger"
          onClick={handleToggle}
          iconColor={headerElementsColor}
        />
      </div>
    </header>
  );
};
