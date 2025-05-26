import { isValidForm } from "./registerValid";
import { ICustomer } from "./registerTypes";
import { addElement } from "../../app/utilities";

let BEARER_TOKEN = "";
// const rHost = "https://auth.europe-west1.commercetools.com";
// const rProjectKey = "flower-shop2025";

//....................................................
export function registerSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (isValidForm(true)) {
  }
}

//.....................................................
export async function registerSubmitButton(): Promise<boolean> {
  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //console.log("submitButton", e);
  // e.preventDefault();

  if (isValidForm(false)) {
    await takeToken();
    if (await newCustomer()) return true;
    else return false;
  } else return false;
}

// const baseURLAPI = "https://api.europe-west1.gcp.commercetools.com";
// const baseURLAuth = "https://auth.europe-west1.gcp.commercetools.com";

// const project_key = "lower-shop2025";
// const client_id = "h1LEoc5g15JqUTUsqfw4ty74";

//....................................................
export async function takeToken(): Promise<string | null> {
  //console.log("takeToken");

  // const rClientId = "h1LEoc5g15JqUTUsqfw4ty74";
  const rClientId = "dKXLsfhgcZ3OQCrSpp1thax1";

  // const rClientSecret = "6iFII4Hsy3Jiy-8VAKFxohYIi10z_FKq";
  const rClientSecret = "th8GWbXtwDcLXs4kNJ9oMV1C-9RkuCv1";

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
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&scope=manage_customers:flower-shop2025",
  });

  console.log("newCustomer>>>await", response);

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    BEARER_TOKEN = data.access_token;
    localStorage.setItem("token", BEARER_TOKEN);
    return BEARER_TOKEN;
  } else return null;
}

//.............................................................
// export async function newCustomer(oCustomer: ICustomer) {
async function newCustomer(): Promise<boolean> {
  //let lsToken: string | null = "";
  // if ("token" in localStorage) {
  //   lsToken = localStorage.getItem("token");
  //   if (lsToken) BEARER_TOKEN = lsToken;
  // }

  //console.log("newCustomer<<<", BEARER_TOKEN);

  const oCustomer: ICustomer = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  let pInput = document.querySelector(
    `.register input[name="name"]`,
  ) as HTMLInputElement;
  oCustomer.firstName = pInput.value;

  pInput = document.querySelector(
    `.register input[name="surname"]`,
  ) as HTMLInputElement;
  oCustomer.lastName = pInput.value;

  pInput = document.querySelector(
    `.register input[name="email"]`,
  ) as HTMLInputElement;
  oCustomer.email = pInput.value;

  pInput = document.querySelector(
    `.register input[name="password"]`,
  ) as HTMLInputElement;
  oCustomer.password = pInput.value;

  console.log(oCustomer);

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
    console.log(data);
    //const oCustomer1: ICustomer = await response.json();

    showResult("Your registration was successful. Welcome.", true);
    console.log("Your registration was successful", data);
    return true;
  } else {
    console.log("newCustomer - error", response.status);
    showResult("Failed to create account", false);
    return false;
  }
}
//.....................................................................
export function showResult(sText: string, isSuccess: boolean) {
  const wWidth = 380;
  const wHeight = 300;
  const pModalWindow = addElement(
    document.body,
    "div",
    "modal__window",
    "",
  ) as HTMLDivElement;
  pModalWindow.style.width = `${wWidth}px`;
  pModalWindow.style.height = `${wHeight}px`;

  console.log(document.body.clientHeight - wHeight, window.pageYOffset);

  pModalWindow.style.top = `500px`;
  pModalWindow.style.left = `${Math.floor((document.body.clientWidth - wWidth) / 2)}px`;

  if (!isSuccess) {
    pModalWindow.classList.add("error");
    pModalWindow.style.top = `${Math.floor(document.body.clientHeight - 3 * wHeight)}px`;
  }

  addElement(pModalWindow, "p", "modal__txt", sText);

  setTimeout(() => {
    pModalWindow.remove();
  }, 3000);
}
