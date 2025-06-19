import "./basket.css";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button.tsx";
import { BasketCard } from "./basketProduct";
import { IBasketProduct, IProductImages } from "./basketTypes.ts";
import { clearCart, addPromocode } from "./APICart.ts";

let goodsQuantityAll = 0;
let goodsCostAll = 0;
//let goodsOldCostAll = 0;

//................................................................
export const Main = () => {
  let aImages: IProductImages[] = [];
  let sImages: string | null = "";

  sImages = localStorage.getItem("Images");
  if (sImages) aImages = JSON.parse(sImages);

  goodsQuantityAll = 0;
  goodsCostAll = 0;
  const aProducts: IBasketProduct[] = [];

  let sCart: string | null = "";
  sCart = localStorage.getItem("Cart");

  if (sCart) {
    const oCart = JSON.parse(sCart);

    goodsQuantityAll = oCart.lineItems.reduce(
      (sum: number, iItem: any) => sum + iItem.quantity,
      0,
    );

    const pCartQuantity = document.querySelector(".quantity-goods");
    if (pCartQuantity) pCartQuantity.textContent = goodsQuantityAll.toString();

    goodsCostAll = oCart.totalPrice.centAmount / 100;
    // goodsOldCostAll = goodsCostAll;

    for (let i = 0; i < oCart.lineItems.length; i++) {
      aProducts[i] = {
        id: oCart.lineItems[i].id,
        productId: oCart.lineItems[i].productId,
        name: oCart.lineItems[i].name["en-US"],
        price: oCart.lineItems[i].price.value.centAmount / 100,
        oldprice: oCart.lineItems[i].price.value.centAmount / 100,
        quantity: oCart.lineItems[i].quantity,
        image: "img/flowers/image2.png",
      };

      if (oCart.lineItems[i].price.discounted)
        aProducts[i]!.price =
          oCart.lineItems[i].price.discounted.value.centAmount / 100;

      aImages.forEach((val) => {
        if (
          aProducts[i] &&
          val &&
          val.image &&
          val.id === aProducts[i]!.productId
        )
          aProducts[i]!.image = val.image;
      });
    }
  }

  //.................................................................
  return (
    <div
      className="basket__main"
      style={{ backgroundImage: "url('img/bgroses53b.png')" }}
    >
      <div className="container">
        <div className="basket__content">
          <h2> Cart </h2>
          <p className="basket__clear"></p>

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
                  Total cost: <span className="basket__total-old-cost"></span>
                  <span className="basket__total-cost basket__txt-mark">
                    {" "}
                    ${goodsCostAll}{" "}
                  </span>
                </p>
                <p></p>
                <p>
                  You have selected{" "}
                  <span className="basket__total-quantity basket__txt-mark">
                    {goodsQuantityAll}
                  </span>{" "}
                  goods
                </p>

                <form className="promo" onSubmit={(e) => promoHandler(e)}>
                  <p className="cart__promo">
                    You can use a promo code to get a discount :
                    <input type="text" placeholder="flower20"></input>
                  </p>

                  <p className="cart__promo-message"></p>
                </form>

                <p>
                  {" "}
                  You can continue shopping:{" "}
                  <Link to="/catalog" className="register__link">
                    Catalog
                  </Link>
                </p>

                <div className="basket__goods">
                  {aProducts.map((iProduct: IBasketProduct) => (
                    <BasketCard product={iProduct} key={iProduct.id} />
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
    </div>
  );
};

//..............................................
async function basketClear() {
  await clearCart();
  document.querySelector(".basket__total")?.remove();
  const pMess = document.querySelector(".basket__clear");
  if (pMess) pMess.textContent = "Your cart is empty yet";
}

//..............................................
function promoHandler(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const pInput = document.querySelector(
    ".cart__promo input",
  ) as HTMLInputElement;
  const promoCode = pInput.value.trim();

  addPromocode(promoCode);
}

//..............................................
export function getQuantity(): number {
  let goodsQuantity = 0;

  let sCart: string | null = "";
  sCart = localStorage.getItem("Cart");

  if (sCart) {
    const oCart = JSON.parse(sCart);
    goodsQuantity = oCart.lineItems.reduce(
      (sum: number, iItem: any) => sum + iItem.quantity,
      0,
    );
  }

  return goodsQuantity;
}
