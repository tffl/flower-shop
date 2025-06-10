import { getToken } from "../../utils/token";
import { IProductImages} from "./basketTypes";

export async function createCart() {
  // : Promise<boolean>

  //console.log('createCart <<<<<<<<<<<<<<<')

  const oNewCart = {
    currency: "USD",
    country: "US",
  };

  const urlApi =
    "https://api.europe-west1.gcp.commercetools.com/flower-shop2025/me/carts";

  // const BEARER_TOKEN = localStorage.getItem("token");
  const tokenResponse = await getToken();
  const token = tokenResponse.access_token;

  localStorage.setItem("Token", token);

  // console.log('create token~~~~~', token);

  //const token = await takeToken();

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
    // console.log('createCart >>>>>>>>>>>>>>>>', dataCart);

    const sCart = JSON.stringify(dataCart);
    localStorage.setItem("Cart", sCart);
  } else {
    console.log("newCart - error", response.status);

    return false;
  }
}

//.........................................................................
export async function addCart(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: string,
  image: string | null,
)

{

  console.log(e.target);
  console.log('add<<<', id, image)
  let aImages: IProductImages[] = []
  let sImages: string | null = ''

  sImages = localStorage.getItem('Images')
 //console.log(sImages)
 if (sImages) aImages = JSON.parse(sImages);
 console.log('mImages <<', aImages )

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


  // let sCart: string | null = "";
  // sCart = localStorage.getItem("Cart");

  // if (sCart === undefined || sCart === "undefined") {
  //   createCart();
  //   sCart = localStorage.getItem("Cart");
  // }


  const sCart = localStorage.getItem("Cart");

  if (sCart) {
    const oCart = JSON.parse(sCart);
    oAddProductCart.version = oCart.version;
    cartId = oCart.id;
  }

  if (oAddProductCart.actions[0]) oAddProductCart.actions[0].productId = id;
  console.log ('productId<<<', id)
  const urlApi = `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/me/carts/${cartId}`;

  //  const tokenResponse = await getToken();
  //   const token = tokenResponse.access_token

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
    console.log ('dataCart', dataCart)

    const sCart = JSON.stringify(dataCart);
    localStorage.setItem("Cart", sCart);

    //mImages.set(id, image)
    aImages[aImages.length] = {id: id, image: image}

    console.log ('aImages>>>', id, image, aImages )
    sImages = JSON.stringify(aImages);
    localStorage.setItem('Images', sImages)

  } else {
    console.log("addCart - error", response.status);
  }
}
