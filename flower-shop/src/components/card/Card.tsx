import { CardProps } from "../../types/types";
import { Button } from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import "./card.css";
export const Card = ({
  id,
  image,
  name,
  price,
  discountedPrice,
  shortDescription,
}: CardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/catalog?productId=${id}`);
  };

  return (
    <div className="card">
      <div className="card__imgWrapper ">
        <img
          className="card__img"
          src={image || "img/fallback.jpg"}
          alt="plant"
        />
      </div>
      <h3 className="card__name">{name["en-US"]}</h3>
      <div className="card__price">
        {discountedPrice ? (
          <>
            <span style={{ textDecoration: "line-through" }}>{price} USD</span>
            <span style={{ color: "red", marginLeft: "8px" }}>
              {discountedPrice} USD
            </span>
          </>
        ) : (
          <span>{price} USD</span>
        )}
      </div>
      <div className="card__description">{shortDescription}</div>
      <Button className="card__btn" onClick={handleClick}>
        more details...
      </Button>
    </div>
  );
};
