import { BurgerProps } from "../../../types/types";
import "./burger.css";

export const Burger = ({ onClick, className, iconColor }: BurgerProps) => {
  const handleToggle = (event: React.MouseEvent<HTMLDivElement>) => {
    const menuVisible = event.currentTarget.classList.toggle("active");
    onClick(menuVisible);
  };
  return (
    <div className={className} onClick={handleToggle}>
      <div
        className="burger__line"
        style={{ backgroundColor: iconColor }}
      ></div>
      <div
        className="burger__line"
        style={{ backgroundColor: iconColor }}
      ></div>
      <div
        className="burger__line"
        style={{ backgroundColor: iconColor }}
      ></div>
    </div>
  );
};
