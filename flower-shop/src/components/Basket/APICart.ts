import { getToken } from "../../utils/token";
import { IProductImages } from "./basketTypes";


//............................................................
export async function createCart() {
  const oNewCart = {
    currency: "USD",
    country: "US",
  };

  const urlApi =
    "https://api.europe-west1.gcp.commercetools.com/flower-shop2025/me/carts";

  const tokenResponse = await getToken();
  const token = tokenResponse.access_token;

  console.log("create-------", token);

  localStorage.setItem("Token", token);

  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(oNewCart),
  });

  if (response.status === 201) {
    const dataCart = await response.json();
    const sCart = JSON.stringify(dataCart);
    localStorage.setItem("Cart", sCart);
  } else {
    console.log("newCart - error", response.status);

    return false;
  }
}

//.........................................................................
export async function addCart(
  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: string,
  image: string | null,
) {
  //console.log(e.target);

  let aImages: IProductImages[] = [];
  let sImages: string | null = "";

  sImages = localStorage.getItem("Images");
  if (sImages) aImages = JSON.parse(sImages);

  const oAddProductCart = {
    version: 1,
    actions: [
      {
        action: "addLineItem",
        productId: "",
        // "variantId" : 1,
        quantity: 1,
      },
    ],
  };

  let cartId = "";

  let sCart: string | null = "";
  sCart = localStorage.getItem("Cart");

  if (sCart === undefined || sCart === "undefined" || sCart === null) {
    await createCart();
    sCart = localStorage.getItem("Cart");
  }

  if (sCart) {
    const oCart = JSON.parse(sCart);
    oAddProductCart.version = oCart.version;
    cartId = oCart.id;
  }

  if (oAddProductCart.actions[0]) oAddProductCart.actions[0].productId = id;

  const urlApi = `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/me/carts/${cartId}`;

  const token = localStorage.getItem("Token");

  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(oAddProductCart),
  });

  if (response.status === 200) {
    const dataCart = await response.json();
    console.log(" addCart - 200", dataCart);

    const goodsQuantity = dataCart.lineItems.reduce(
      (sum: number, iItem: any) => sum + iItem.quantity,
      0,
    );

    const sCart = JSON.stringify(dataCart);
    localStorage.setItem("Cart", sCart);

    aImages[aImages.length] = { id: id, image: image };

    sImages = JSON.stringify(aImages);
    localStorage.setItem("Images", sImages);

    const pCartQuantity = document.querySelector(".quantity-goods");
    if (pCartQuantity) pCartQuantity.textContent = "" + goodsQuantity;
  } else {
    console.log("add Product to Cart - error", response.status);
  }
}

//........................................................................
export async function updateCartQuantity(Id: string, newQuantity: number) {
  const oAddProductCart = {
    version: 1,
    actions: [
      {
        action: "changeLineItemQuantity",
        lineItemId: Id,
        quantity: newQuantity,
      },
    ],
  };

  let cartId = "";

  let sCart: string | null = "";
  sCart = localStorage.getItem("Cart");

  if (sCart) {
    const oCart = JSON.parse(sCart);
    oAddProductCart.version = oCart.version;
    cartId = oCart.id;
  }

  const urlApi = `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/me/carts/${cartId}`;

  const token = localStorage.getItem("Token");

  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(oAddProductCart),
  });

  if (response.status === 200) {
    const dataCart = await response.json();
    console.log("upDateCart 200", dataCart);

    const sCart = JSON.stringify(dataCart);
    localStorage.setItem("Cart", sCart);

    const goodsQuantity = dataCart.lineItems.reduce(
      (sum: number, iItem: any) => sum + iItem.quantity,
      0,
    );

    const pCartQuantity = document.querySelector(".quantity-goods");
    if (pCartQuantity) pCartQuantity.textContent = goodsQuantity.toString();

    const pSum = document.querySelector(".basket__total-cost");
    if (pSum) pSum.textContent = `$${dataCart.totalPrice.centAmount / 100}`;

    const pQuant = document.querySelector(".basket__total-quantity");
    if (pQuant) pQuant.textContent = goodsQuantity.toString();
  } else {
    console.log("upDateCart -error", response);
  }
}

//........................................................................
export async function clearCart() {

  const oAddProductCart = {
    version: 1,
    actions: [{
      action: "changeLineItemQuantity",
      lineItemId: '',
      quantity: 0,
    }
    ],
  };

  let cartId = "";

  let sCart: string | null = "";
  sCart = localStorage.getItem("Cart");

  if (sCart) {
    const oCart = JSON.parse(sCart);
    oAddProductCart.version = oCart.version;
    cartId = oCart.id;

    let i = 0
    oCart.lineItems.map((item: any) => {
    oAddProductCart.actions[i++]=  {
        action: "changeLineItemQuantity",
        lineItemId: item.id,
        quantity: 0,
      }

    })
    console.log (oAddProductCart)

  }

  const urlApi = `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/me/carts/${cartId}`;

  const token = localStorage.getItem("Token");

  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(oAddProductCart),
  });

  if (response.status === 200) {
    const dataCart = await response.json();
    console.log("clearCart 200", dataCart);

    const sCart = JSON.stringify(dataCart);
    localStorage.setItem("Cart", sCart);

    const pCartQuantity = document.querySelector(".quantity-goods");
    if (pCartQuantity) pCartQuantity.textContent = '0'

    // const pSum = document.querySelector(".basket__total-cost");
    // if (pSum) pSum.textContent = `$${dataCart.totalPrice.centAmount / 100}`;

    // const pQuant = document.querySelector(".basket__total-quantity");
    // if (pQuant) pQuant.textContent = goodsQuantity.toString();
  } else {
    console.log("clearCart -error", response);
  }

}
