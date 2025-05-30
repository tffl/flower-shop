//import { isValidForm } from "../Register/registerValid";
import { ICustomerApi} from "../Register/registerTypes";
//import { addElement } from "../../app/utilities";
import { takeToken } from "../Register/registerSubmit.ts";
import { showResult } from "../Register/registerSubmit.ts";
import {IUpDate} from "./profileTypes.ts"

//let BEARER_TOKEN = "";
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
export async function profileSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  // if (isValidProfile) {
    if (await upDateCustomer()) return true;
    else return false;
  // } else return false;
}

//.............................................................
async function upDateCustomer(): Promise<boolean> {
  const oCustomer: ICustomerApi = {
    id: "",
    version: 1,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    dateOfBirth: "",
    addresses: [],
  };

  const sLSCustomer = localStorage.getItem("customer");

  if (sLSCustomer) {
    const oLSCustomer = JSON.parse(sLSCustomer);
    console.log(" oLSCustomer!!!!!!!!!!!", oLSCustomer);

  oCustomer.id = oLSCustomer.id
  oCustomer.version = oLSCustomer.version
 

  let pInput = document.querySelector(
    `.profile input[name="name"]`,
  ) as HTMLInputElement;
  oCustomer.firstName = pInput.value;

  pInput = document.querySelector(
    `.profile input[name="surname"]`,
  ) as HTMLInputElement;
  oCustomer.lastName = pInput.value;

  pInput = document.querySelector(
    `.profile input[name="date"]`,
  ) as HTMLInputElement;
  oCustomer.dateOfBirth = pInput.value;

  pInput = document.querySelector(
    `.profile input[name="email"]`,
  ) as HTMLInputElement;
  oCustomer.email = pInput.value;

  pInput = document.querySelector(
    `.profile input[name="password"]`,
  ) as HTMLInputElement;
  oCustomer.password = pInput.value;

  console.log(oCustomer);
  }

// {
//   "version" : 3,
//   "actions" : [

// {
//   "action": "changeEmail",
//   "email": "email@example.com"
// },
// {
//   "action": "setFirstName",
//   "firstName": "John"
// }

// {
//   "action": "setLastName",
//   "lastName": "Person"
// }

// {
//   "action": "setDateOfBirth",
//   "dateOfBirth": "2015-10-21"
// }


//{
//     "action" : "addAddress",
//     "address" : {
//       "streetName" : "Any Street",
//       "streetNumber" : "1337",
//       "postalCode" : "11111",
//       "city" : "Any City",
//       "country" : "US"
//     }
//   } ]
// }

const oUpDate: IUpDate = {
  version: 3,
  actions: [
    {
   "action": "setDateOfBirth",
   "dateOfBirth": "2015-10-21"
 }
  ]
}

 oUpDate.version = oCustomer.version
//...................................................................

  const urlApi =
    `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers/${oCustomer.id}`;
  const token = await takeToken();


  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(oUpDate),
  });

  console.log("newCustomer>>>await", response);
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);

    showResult(
      `Your registration was successful. Welcome ${data.customer.firstName}.`,
      true,
    );
    console.log("Your profile updated successful", data);
    return true;
  } else {
    console.log("upDateCustomer - error", response.status);
    showResult("Failed to update profile. Try again.", false);
     return false;
   }
}

//.......................................................
// function isValidProfile(): boolean{
//   return true
// }


// {
//   "action": "changeAddress",
//   "addressId": "{{addressId}}",
//   "address": {
//     "key": "exampleKey",
//     "title": "My Address",
//     "salutation": "Mr.",
//     "firstName": "Example",
//     "lastName": "Person",
//     "streetName": "Example Street",
//     "streetNumber": "4711",
//     "additionalStreetInfo": "Backhouse",
//     "postalCode": "80933",
//     "city": "Exemplary City",
//     "region": "Exemplary Region",
//     "state": "Exemplary State",
//     "country": "DE",
//     "company": "My Company Name",
//     "department": "Sales",
//     "building": "Hightower 1",
//     "apartment": "247",
//     "pOBox": "2471",
//     "phone": "+49 89 12345678",
//     "mobile": "+49 171 2345678",
//     "email": "email@example.com",
//     "fax": "+49 89 12345679",
//     "additionalAddressInfo": "no additional Info",
//     "externalId": "Information not needed"
//   }
// }

// {
//   "action": "removeAddress",
//   "addressId": "{{addressId}}"
// }

// {
//   "action": "setDefaultShippingAddress",
//   "addressId": "{{addressId}}"
// }