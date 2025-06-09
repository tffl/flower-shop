import { getToken } from "../../utils/token";

export async function createCart() {
  // : Promise<boolean>

 //console.log('createCart <<<<<<<<<<<<<<<')

  const oNewCart = {
    currency: "USD",
    country: "US"
  };

  const urlApi =
    "https://api.europe-west1.gcp.commercetools.com/flower-shop2025/me/carts";

  // const BEARER_TOKEN = localStorage.getItem("token");
  const tokenResponse = await getToken();
  const token = tokenResponse.access_token

   localStorage.setItem("Token", token)

  console.log('create token~~~~~', token);

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
    localStorage.setItem("Cart", sCart)

  } else {
    console.log("newCart - error", response.status);

    return false;
  }
}


export async function addCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id:string) {

    console.log(e.target)
const oAddProductCart=
{
  "version" : 1,
  "actions" : [ {
    "action" : "addLineItem",
    "productId" : "9f10dcfb-5cc9-4a18-843a-c07f7e22d01f",
    // "variantId" : 1,
    "quantity" : 1
  }
  ]
}

let cartId = ''

const sCart =  localStorage.getItem("Cart")

if (sCart) {
    const oCart = JSON.parse(sCart);
    oAddProductCart.version = oCart.version
    cartId = oCart.id
}

if (oAddProductCart.actions[0])
oAddProductCart.actions[0].productId = id

const urlApi =
    `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/me/carts/${cartId}`;


//  const tokenResponse = await getToken();
//   const token = tokenResponse.access_token

   const token =  localStorage.getItem("Token")
   console.log('addCart!!!!!!!!!!!!', token);

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
    console.log('createCart >>>>>>>>>>>>>>>>', dataCart);

   // const sCart = JSON.stringify(dataCart);
   // localStorage.setItem("Cart", sCart)

  } else {
    console.log("addCart - error", response.status);

    return false;
  }


}