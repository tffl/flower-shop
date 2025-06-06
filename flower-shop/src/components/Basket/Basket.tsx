import "./basket.css";
import { Link } from "react-router-dom";

export const Main = () => {
  let goodsQuantityAll = 0;
  let goodsCostAll = 287.53;
  return (
    <div className="basket__main">
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
                {" "}
                You have selected{" "}
                <span className="basket__txt-mark">
                  {goodsQuantityAll}
                </span>{" "}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};
