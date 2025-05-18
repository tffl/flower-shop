import { isValidForm } from "./registerValid";
import { ICustomer } from "./registerTypes";

export function registerSubmit(e: React.FormEvent<HTMLFormElement>) {
  console.log("submit");
  e.preventDefault();
  if (isValidForm()) {
    console.log("valid");
    // sendRegisterCommerce();
  }
}

export function registerSubmitButton(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
  console.log("submitButton", e);
  // e.preventDefault();
  if (isValidForm()) {
    console.log("*********valid");
    newCustomer();
  }
}

// const baseURLAPI = "https://api.europe-west1.gcp.commercetools.com";
// const baseURLAuth = "https://auth.europe-west1.gcp.commercetools.com";

// const project_key = "lower-shop2025";
// const client_id = "h1LEoc5g15JqUTUsqfw4ty74";

//.............................................................
// export async function newCustomer(oCustomer: ICustomer) {
export async function newCustomer() {
  console.log("newCustomer<<<");
  const oCustomer: ICustomer = {
    email: "johndoe@example.com",
    firstName: "John",
    lastName: "Doe",
    password: "secret123",
  };

  // const url1 = 'https://api.europe-west1.gcp.commercetools.com/flower-shop2025/in-store/key=flower-shop2025/customers'
  // https://api.{region}.commercetools.com/{projectKey}/customers -i \

  const url =
    "https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers -i";

  // curl https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers -i \
  // --header "Authorization: Bearer ${BEARER_TOKEN}" \
  // --header 'Content-Type: application/json' \
  // --data-binary @- << DATA
  // oCustomer
  // DATA

  // const BEARER_TOKEN = localStorage.getItem("token");
  // const BEARER_TOKEN = "";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer ${BEARER_TOKEN}",
    },
    body: JSON.stringify(oCustomer),
  });

  console.log("newCustomer>>>await", response);

  if (response.status === 201) {
    const oCustomer1: ICustomer = await response.json();
    console.log("!!!!!!!!!", oCustomer1);
  } else {
    console.log("newCustomer - error", response.status);
  }
}
