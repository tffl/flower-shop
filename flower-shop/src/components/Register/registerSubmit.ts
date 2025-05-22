import { isValidForm } from "./registerValid";
import { ICustomer } from "./registerTypes";
import { addElement } from "../../app/utilities";

let BEARER_TOKEN = "";
// const rHost = "https://auth.europe-west1.commercetools.com";
// const rProjectKey = "flower-shop2025";

//....................................................
export function registerSubmit(e: React.FormEvent<HTMLFormElement>) {
  //console.log("submit");
  e.preventDefault();
  if (isValidForm(true)) {
    //console.log("submit - valid");
    // sendRegisterCommerce();
  }
}

//.....................................................
export async function registerSubmitButton(): Promise<boolean> {
  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //console.log("submitButton", e);
  // e.preventDefault();

  if (isValidForm(false)) {
    await takeToken();
    await newCustomer();
    return true;
  } else return false;
}

// const baseURLAPI = "https://api.europe-west1.gcp.commercetools.com";
// const baseURLAuth = "https://auth.europe-west1.gcp.commercetools.com";

// const project_key = "lower-shop2025";
// const client_id = "h1LEoc5g15JqUTUsqfw4ty74";

//....................................................
async function takeToken() {
  console.log("takeToken");

  const rClientId = "h1LEoc5g15JqUTUsqfw4ty74";
  const rClientSecret = "6iFII4Hsy3Jiy-8VAKFxohYIi10z_FKq";

  // const rScope= 'manage_my_quote_requests:flower-shop2025 manage_my_business_units:flower-shop2025 create_anonymous_token:flower-shop2025 manage_my_payments:flower-shop2025 manage_my_profile:flower-shop2025 manage_my_orders:flower-shop2025 view_categories:flower-shop2025 view_published_products:flower-shop2025 manage_my_quotes:flower-shop2025 manage_my_shopping_lists:flower-shop2025'
  //const urlAuth = `https://${ rClientId}:${rClientSecret}@auth.europe-west1.gcp.commercetools.com/oauth/token`
  //POST https://{clientID}:{clientSecret}@auth.{region}.commercetools.com/oauth/token
  // ?grant_type=client_credentials
  // &scope={scope}

  const urlAuth = `https://auth.europe-west1.gcp.commercetools.com/oauth/token`;

  const response = await fetch(urlAuth, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(rClientId + ":" + rClientSecret),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials&scope=manage_my_quote_requests:flower-shop2025"
  });

  console.log("newCustomer>>>await", response);

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    BEARER_TOKEN = data.access_token;
    localStorage.setItem("token", BEARER_TOKEN);
  }
}

//.............................................................
// export async function newCustomer(oCustomer: ICustomer) {
async function newCustomer() {
  let lsToken: string | null = "";
  // if ("token" in localStorage) {
  //   lsToken = localStorage.getItem("token");
  //   if (lsToken) BEARER_TOKEN = lsToken;
  // }

  console.log("newCustomer<<<", BEARER_TOKEN);

  const oCustomer: ICustomer = {
    email: "johndoe@example.com",
    firstName: "John",
    lastName: "Doe",
    password: "Secret123",
  };

  // const url1 = 'https://api.europe-west1.gcp.commercetools.com/flower-shop2025/in-store/key=flower-shop2025/customers'
  // https://api.{region}.commercetools.com/{projectKey}/customers -i \

  const urlApi =
    "https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers";

  // curl https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers -i \
  // --header "Authorization: Bearer ${BEARER_TOKEN}" \
  // --header 'Content-Type: application/json' \
  // --data-binary @- << DATA
  // oCustomer
  // DATA

  // const BEARER_TOKEN = localStorage.getItem("token");

  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
    body: JSON.stringify(oCustomer),
  });

  console.log("newCustomer>>>await", response);
  if (response.status === 201) {
    //if (true)
    const data = await response.json();
   // console.log(data);
    //const oCustomer1: ICustomer = await response.json();
    showResult("Your registration was successful");
    console.log("Your registration was successful", data);
  } else {
    console.log("newCustomer - error", response.status);
    showResult("Failed to create account");
  }
}
//.....................................................................
function showResult(sText: string) {
  const pModal = addElement(document.body, "div", "modal", "");
  const pModalWindow = addElement(pModal, "div", "modal__window", "");
  addElement(pModalWindow, "p", "modal__txt", sText);
  setTimeout(() => {
    pModal.remove();
  }, 3000);
}
