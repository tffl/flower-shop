import { isValidForm } from "./registerValid";
//import { ICustomerApi, IAddress } from "./registerTypes";
import { ICustomerApi } from "./registerTypes";
import { addElement } from "../../app/utilities";

let BEARER_TOKEN = "";
// const rHost = "https://auth.europe-west1.commercetools.com";
// const baseURLAPI = "https://api.europe-west1.gcp.commercetools.com";
// const baseURLAuth = "https://auth.europe-west1.gcp.commercetools.com";
// const project_key = "lower-shop2025";
// const client_id = "h1LEoc5g15JqUTUsqfw4ty74";
// const rScope= 'manage_my_quote_requests:flower-shop2025 manage_my_business_units:flower-shop2025 create_anonymous_token:flower-shop2025 manage_my_payments:flower-shop2025 manage_my_profile:flower-shop2025 manage_my_orders:flower-shop2025 view_categories:flower-shop2025 view_published_products:flower-shop2025 manage_my_quotes:flower-shop2025 manage_my_shopping_lists:flower-shop2025'
//const urlAuth = `https://${ rClientId}:${rClientSecret}@auth.europe-west1.gcp.commercetools.com/oauth/token`
//POST https://{clientID}:{clientSecret}@auth.{region}.commercetools.com/oauth/token
// ?grant_type=client_credentials
// &scope={scope}

//....................................................
export function registerSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (isValidForm(true)) {
  }
}

//.....................................................
export async function registerSubmitButton(): Promise<boolean> {
  if (isValidForm(false)) {
    await takeToken();
    if (await newCustomer()) return true;
    else return false;
  } else return false;
}

//....................................................
export async function takeToken(): Promise<string | null> {
  // const rClientId = "h1LEoc5g15JqUTUsqfw4ty74";
  const rClientId = "dKXLsfhgcZ3OQCrSpp1thax1";
  // const rClientSecret = "6iFII4Hsy3Jiy-8VAKFxohYIi10z_FKq";
  const rClientSecret = "th8GWbXtwDcLXs4kNJ9oMV1C-9RkuCv1";

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
  const oCustomer: ICustomerApi = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    dateOfBirth: "2000-01-01", //new Date('2000-01-01'),
    addresses: [],
    //     addresses: [{
    //   streetName : '',
    //   postalCode : '',
    //   city : '',
    //   country : ''
    // }]
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
    `.register input[name="date"]`,
  ) as HTMLInputElement;
  oCustomer.dateOfBirth = pInput.value;

  pInput = document.querySelector(
    `.register input[name="email"]`,
  ) as HTMLInputElement;
  oCustomer.email = pInput.value;

  pInput = document.querySelector(
    `.register input[name="password"]`,
  ) as HTMLInputElement;
  oCustomer.password = pInput.value;

  // pInput = document.querySelector(
  //   `.register input[name="country"]`,
  // ) as HTMLInputElement;
  // if(oCustomer.addresses[0])
  // oCustomer.addresses[0].country = pInput.value;

  // pInput = document.querySelector(
  //   `.register input[name="city"]`,
  // ) as HTMLInputElement;
  // if(oCustomer.addresses[0])
  // oCustomer.addresses[0].city = pInput.value;

  // pInput = document.querySelector(
  //   `.register input[name="street"]`,
  // ) as HTMLInputElement;
  // if(oCustomer.addresses[0])
  // oCustomer.addresses[0].streetName = pInput.value;

  // pInput = document.querySelector(
  //   `.register input[name="postcode"]`,
  // ) as HTMLInputElement;
  // if(oCustomer.addresses[0])
  // oCustomer.addresses[0].postalCode = pInput.value;

  console.log(oCustomer);

  // const url1 = 'https://api.europe-west1.gcp.commercetools.com/flower-shop2025/in-store/key=flower-shop2025/customers'
  // https://api.{region}.commercetools.com/{projectKey}/customers -i \

  const urlApi =
    "https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers";

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
    const dataCustomer = await response.json();
    console.log(dataCustomer);

    const sCustomer = JSON.stringify(dataCustomer.customer);

    console.log(sCustomer);
    localStorage.setItem("customer", sCustomer);

    showResult(
      `Your registration was successful. Welcome ${dataCustomer.customer.firstName}.`,
      true,
    );
    console.log("Your registration was successful", dataCustomer);
    return true;
  } else {
    console.log("newCustomer - error", response.status);
    showResult(
      "Failed to create account. A customer with this email already exists. Try again.",
      false,
    );
    //There is already an existing customer with the provided email.
    return false;
  }
}

//.....................................................................
export function showResult(sText: string, isSuccess: boolean) {
  const wWidth = 380;
  //const wHeight = 300;
  const pModalWindow = addElement(
    document.body,
    "div",
    "modal__window",
    "",
  ) as HTMLDivElement;

  addElement(pModalWindow, "p", "modal__txt", sText);

  // pModalWindow.style.height = `${wWidth}px`;
  // pModalWindow.style.height = `${wHeight}px`;

  console.log("*******", pModalWindow.style.height, pModalWindow.style.width);

  //const wWidth: number = parseInt(pModalWindow.style.width);
  const wHeight: number = parseInt(pModalWindow.style.height);

  console.log((document.body.clientHeight - wHeight) / 2, window.pageYOffset);

  pModalWindow.style.top = `500px`;
  pModalWindow.style.left = `${Math.floor((document.body.clientWidth - wWidth) / 2)}px`;

  if (!isSuccess) {
    pModalWindow.classList.add("error");
    pModalWindow.style.top = `${Math.floor(document.body.clientHeight - 800)}px`;
  }

  setTimeout(() => {
    pModalWindow.remove();
  }, 3000);
}

// //.....................................................................
// export function showResult(sText: string, isSuccess: boolean) {
//   const pModal = addElement(document.body, "div", "modal", "");
//   const pModalWindow = addElement(pModal, "div", "modal__window", "");

//   if (!isSuccess) {
//     pModalWindow.classList.add("error");
//   }

//   addElement(pModalWindow, "p", "modal__txt", sText);

//   setTimeout(() => {
//     pModal.remove();
//   }, 2000);
// }
