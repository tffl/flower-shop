import { getToken } from "../../utils/token";
import { IProductImages } from "./basketTypes";

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

  //  const sCart = localStorage.getItem("Cart");

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
    //console.log ('dataCart', dataCart)

    const sCart = JSON.stringify(dataCart);
    localStorage.setItem("Cart", sCart);

    aImages[aImages.length] = { id: id, image: image };

    sImages = JSON.stringify(aImages);
    localStorage.setItem("Images", sImages);

    const pCartQuantity = document.querySelector(".quantity-goods");
    if (pCartQuantity) {
      let goodQuantity = Number(pCartQuantity.textContent) + 1;
      pCartQuantity.textContent = "" + goodQuantity;
    }
  } else {
    console.log("add Product to Cart - error", response.status);
  }
}
