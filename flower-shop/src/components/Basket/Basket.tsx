import "./basket.css";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button.tsx";

//................................................................
export const Main = () => {
  let goodsQuantityAll = 7;
  let goodsCostAll = 287.53;

  const aGoods = [1, 2, 3, 4, 5, 6, 7];
  // aGoods.length = goodsQuantityAll

  return (
    <div className="basket__main container">
      <div
        className="basket__content"
        style={{ backgroundImage: "url('img/bgroses23.png')" }}
      >
        <h2> Basket </h2>
        <div className="basket__total">
          {goodsQuantityAll < 1 ? (
            <>
              <p>Your cart is empty yet</p>
              You can begin shopping:{" "}
              <Link to="/catalog" className="register__link">
                Catalog
              </Link>
            </>
          ) : (
            <>
              <p>
                You have selected{" "}
                <span className="basket__txt-mark">{goodsQuantityAll}</span>{" "}
                items. Total cost:{" "}
                <span className="basket__txt-mark">${goodsCostAll}</span>
              </p>
              <p>
                {" "}
                You can continue shopping:{" "}
                <Link to="/catalog" className="register__link">
                  Catalog
                </Link>
              </p>
              <div className="basket__goods">
                {aGoods.map((s) => (
                  <div className="good-card">Item {s}</div>
                ))}
              </div>

              <Button className="profile__submit-btn" onClick={basketClear}>
                Clear Shopping Cart
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

function basketClear() {}
