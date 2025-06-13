import "./basket.css";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button.tsx";
import { BasketCard } from "./basketProduct";
import { IBasketProduct, IProductImages } from "./basketTypes.ts";
import {clearCart} from "./APICart.ts"


let goodsQuantityAll = 0;
let goodsCostAll = 0;

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

    for (let i = 0; i < oCart.lineItems.length; i++) {
      aProducts[i] = {
        id: oCart.lineItems[i].id,
        productId: oCart.lineItems[i].productId,
        name: oCart.lineItems[i].name["en-US"],
        price: oCart.lineItems[i].price.value.centAmount / 100,
        quantity: oCart.lineItems[i].quantity,
        image: "img/flowers/image2.png",
      };

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
                  Total cost:{" "}
                  <span className="basket__total-cost basket__txt-mark">
                    ${goodsCostAll}
                  </span>
                </p>
                <p>
                  You have selected{" "}
                  <span className="basket__total-quantity basket__txt-mark">
                    {goodsQuantityAll}
                  </span>{" "}
                  goods
                </p>
                <p>
                  {" "}
                  You can continue shopping:{" "}
                  <Link to="/catalog" className="register__link">
                    Catalog
                  </Link>
                </p>

                <Button
                  className="profile__submit-btn"
                  onClick={basketPromocode}
                >
                  Promo Code
                </Button>

                <div className="basket__goods">
                  {aProducts.map((iProduct: IBasketProduct) => (
                    // <div className="good-card" key={s.id}> Item {s.name}</div>
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
    clearCart()
    document.querySelector(".basket__content")?.remove();
  }

//..............................................
function basketPromocode() {}

//..............................................
 export function getQuantity() : number{

  let goodsQuantity = 0

  let sCart: string | null = "";
  sCart = localStorage.getItem("Cart");

  if (sCart) {
    const oCart = JSON.parse(sCart);
    goodsQuantity = oCart.lineItems.reduce(
      (sum: number, iItem: any) => sum + iItem.quantity,
      0,
    )};

 return goodsQuantity
 }




 // async function basketClear() {

//   clearCart()
//   navigate("/basket");
//   let sCart: string | null = "";
//   sCart = localStorage.getItem("Cart");

//   if (sCart) {
//     const oCart = JSON.parse(sCart);
//     oCart.lineItems.map(async (item: any) => { await updateCartQuantity(item.id, 0);})
//   }


 // document.querySelector(".basket__content")?.remove();

//   const pCartQuantity = document.querySelector(".quantity-goods");
//   if (pCartQuantity) pCartQuantity.textContent = '';
  // goodsQuantityAll = 0;
//}//
