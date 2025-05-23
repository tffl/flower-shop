import { NavLink, useNavigate } from "react-router-dom";
import { MenuProps } from "../../../types/types";
import "./menu.css";

export const Menu = ({ textColor, className = "", onClick }: MenuProps) => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    if (url.startsWith("#")) return;

    e.preventDefault();

    if (onClick) onClick(false);

    setTimeout(() => {
      navigate(url);
    }, 300);
  };

  return (
    <ul
      className={className}
      style={
        className.includes("open")
          ? { backgroundColor: `var(--color-txt)` }
          : undefined
      }
    >
      <li className="menu__item">
        <NavLink
          to="/"
          style={{ color: textColor }}
          className={({ isActive }) =>
            isActive ? "menu__link active" : "menu__link"
          }
          onClick={(e) => handleLinkClick(e, "/")}
        >
          home
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink
          to="/catalog"
          style={{ color: textColor }}
          className={({ isActive }) =>
            isActive ? "menu__link active" : "menu__link"
          }
          onClick={(e) => handleLinkClick(e, "/catalog")}
        >
          catalog
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink
          to="/about"
          style={{ color: textColor }}
          className={({ isActive }) =>
            isActive ? "menu__link active" : "menu__link"
          }
          onClick={(e) => handleLinkClick(e, "/about")}
        >
          about us
        </NavLink>
      </li>
      <li className="menu__item">
        <a href="#footer" style={{ color: textColor }}>
          Contacts
        </a>
      </li>
    </ul>
  );
};
