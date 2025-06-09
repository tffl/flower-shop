import "./basket.css";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button.tsx";
import { BasketCard } from "./basketProduct";
import { IBasketProduct } from "./basketTypes.ts";
import {createCart} from "./APICart.ts"

let goodsQuantityAll = 0;
let goodsCostAll = 0;
let cartId = '';

//................................................................
export const Main = () => {

  goodsQuantityAll = 0;
  goodsCostAll = 0;

  let sCart: string | null = ''
  sCart =  localStorage.getItem("Cart")

  console.log('sCart <<<<< LS ', sCart)

  if (sCart === undefined || sCart === 'undefined') {
    createCart();
   sCart =  localStorage.getItem("Cart")
  }

  if(sCart){

    //console.log('sCart+++', sCart)
    const oCart = JSON.parse(sCart);

    console.log ('oCart++++++++++++',oCart)

    cartId = oCart.id

    console.log ('cartId', cartId)
    goodsQuantityAll =  oCart.lineItems.reduce((sum: number, iItem: number) => (sum + iItem.quantity), 0)  //calculateTotalQuantity(oCart.lineItems);
    goodsCostAll =  oCart.totalPrice.centAmount //calculateTotalCost();

  }

  console.log ('Q:', goodsQuantityAll, goodsCostAll)

  const aProducts: IBasketProduct[] = [
    {
      id: 1,
      name: "product-1",
      image: "img/flowers/image1.png",
      price: 22.3,
      quantity: 1,
    },
    {
      id: 2,
      name: "product-2",
      image: "img/flowers/image2.png",
      price: 24.1,
      quantity: 2,
    },
    {
      id: 3,
      name: "product-3",
      image: "img/flowers/image3.png",
      price: 25.3,
      quantity: 1,
    },
    {
      id: 4,
      name: "product-4",
      image: "img/flowers/image2.png",
      price: 18.6,
      quantity: 4,
    },
    {
      id: 5,
      name: "product-5",
      image: "img/flowers/image3.png",
      price: 21.7,
      quantity: 5,
    },
    {
      id: 6,
      name: "product-6",
      image: "img/flowers/image1.png",
      price: 22.5,
      quantity: 2,
    },
    {
      id: 7,
      name: "product-7",
      image: "img/flowers/image2.png",
      price: 24.1,
      quantity: 1,
    },
  ];

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
                <p className="basket__total-cost">
                  {" "}
                  Total cost:{" "}
                  <span className="basket__txt-mark">${goodsCostAll}</span>
                </p>
                <p>
                  You have selected{" "}
                  <span className="basket__txt-mark">{goodsQuantityAll}</span>{" "}
                  goods
                  {/* (<span className="basket__txt-mark">{goodsQuantityAll}</span>{" "} items). */}
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
// function calculateTotalCost() {
//   return 247.53;
// }

//..............................................
// function calculateTotalQuantity(aItems: ILineItems[]) {
//   return 7;
// }

//..............................................
function basketPromocode() {}

//..............................................
function basketClear() {
  document.querySelector(".basket__content")?.remove();
  goodsQuantityAll = 0;
}
