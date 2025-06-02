import { ICustomerApiUpDate } from "./profileTypes";
import { takeToken } from "../Register/registerSubmit.ts";
import { showResult } from "../Register/registerSubmit.ts";
import { IUpDate } from "./profileTypes.ts";
import { IRegisterSection } from "../Register/registerTypes.ts";
import { validField } from "../Register/registerValid";
import {
  aSections,
  aProfilePassSections,
} from "./profileData.ts";

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

const sNoChange = "Yor data has not changed";

//const sLSCustomer = localStorage.getItem("customer");
let oCustomer: ICustomerApiUpDate = {
  id: "",
  version: 1,
  email: "",
  firstName: "",
  lastName: "",
  currentPassword: "",
  newPassword: "",
  dateOfBirth: "",
  addresses: [],
};

//....................................................
export async function profileSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  document.querySelector(".profile__message")!.textContent = "";
  oCustomer = getCustomer();
  if (isValidForm(aSections) && isCustomerChange()) await upDateCustomer();
}

//....................................................
export async function profilePassSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  document.querySelector(".profile__message-password")!.textContent = "";
  oCustomer = getCustomer();
  if (isValidForm(aProfilePassSections) && isPasswordChange())
    await upDatePassword();
}

//....................................................
export async function profileAddrSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  document.querySelector(".profile__message-addres")!.textContent = "";
  oCustomer = getCustomer();
  if (isAddressChange())
    await upDateAddress();
}

//....................................................................
function getCustomer() {
  const oCustomer: ICustomerApiUpDate = {
    id: "",
    version: 1,
    email: "",
    firstName: "",
    lastName: "",
    currentPassword: "",
    newPassword: "",
    dateOfBirth: "",
    addresses: [],
  };

  const sLSCustomer = localStorage.getItem("customer");

  if (sLSCustomer) {
    const oLSCustomer = JSON.parse(sLSCustomer);

    oCustomer.id = oLSCustomer.id;
    oCustomer.version = oLSCustomer.version;

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
      `.profile input[name="currentPassword"]`,
    ) as HTMLInputElement;
    oCustomer.currentPassword = pInput.value;

    pInput = document.querySelector(
      `.profile input[name="newPassword"]`,
    ) as HTMLInputElement;
    oCustomer.newPassword = pInput.value;

    //  console.log(oCustomer);
  }
  return oCustomer;
}

//..........................................
function isCustomerChange() {
  const sLSCustomer = localStorage.getItem("customer");
  let flChange = true;
  if (sLSCustomer) {
    const oLSCustomer = JSON.parse(sLSCustomer);
    if (
      oLSCustomer.firstName === oCustomer.firstName &&
      oLSCustomer.lastName === oCustomer.lastName &&
      oLSCustomer.email === oCustomer.email &&
      oLSCustomer.dateOfBirth === oCustomer.dateOfBirth
    ) {
      flChange = false;
      document.querySelector(".profile__message")!.textContent = sNoChange;
    }
  }
  return flChange;
}
//.............................................................
async function upDateCustomer(): Promise<boolean> {
  const oUpDate: IUpDate = {
    version: 1,
    actions: [
      {
        action: "setFirstName",
        firstName: "",
      },
      {
        action: "setLastName",
        lastName: "",
      },
      {
        action: "setDateOfBirth",
        dateOfBirth: "",
      },
      {
        action: "changeEmail",
        email: "",
      },
    ],
  };

  oUpDate.version = oCustomer.version;

  oUpDate.actions[0].firstName = oCustomer.firstName;
  oUpDate.actions[1].lastName = oCustomer.lastName;
  oUpDate.actions[2].dateOfBirth = oCustomer.dateOfBirth;
  oUpDate.actions[3].email = oCustomer.email;

  //...................................................................

  const urlApi = `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers/${oCustomer.id}`;
  const token = await takeToken();

  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(oUpDate),
  });

  console.log("upDateCustomer>>await", response);
  if (response.status === 200) {
    const dataCustomer = await response.json();
    //console.log('update dataCustomer', dataCustomer);

    const sCustomer = JSON.stringify(dataCustomer);

    // console.log('upDate sCustomer',sCustomer);
    localStorage.setItem("customer", sCustomer);

    showResult(`Your data has been updated successfully.`, true);
    // console.log("Your profile updated successful", data);
    return true;
  } else {
    console.log("upDateCustomer - error", response.status);
    showResult("Failed to update profile. Try again.", false);
    return false;
  }
}

//....................................................
function isPasswordChange() {
  const sLSCustomer = localStorage.getItem("customer");
  let flChange = true;
  if (sLSCustomer) {
    const oLSCustomer = JSON.parse(sLSCustomer);
    if (
      oCustomer.newPassword === "" ||
      oLSCustomer.password === oCustomer.newPassword
    ) {
      flChange = false;
      document.querySelector(".profile__message-password")!.textContent =
        sNoChange;
    }
  }
  return flChange;
}

//.......................................................
async function upDatePassword(): Promise<boolean> {
  // {
  //   "id" : "3cdcdcc8-80c5-41bb-abb5-ac8772c9cc24",
  //   "version" : 1,
  //   "currentPassword" : "secret123",
  //   "newPassword" : "newSecret456"
  // }
  const oPassword = {
    id: "",
    version: 1,
    currentPassword: "",
    newPassword: "",
  };

  oPassword.id = oCustomer.id;
  oPassword.version = oCustomer.version;
  oPassword.currentPassword = oCustomer.currentPassword;
  oPassword.newPassword = oCustomer.newPassword;

  console.log("oPassword", oPassword);

  //...................................................................

  const urlApi = `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers/password`;
  const token = await takeToken();

  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(oPassword),
  });

  //console.log("upPassword>>await", response);

  if (response.status === 200) {
    const dataCustomer = await response.json();
    const sCustomer = JSON.stringify(dataCustomer);

    console.log("upDate Password sCustomer", sCustomer);
    localStorage.setItem("customer", sCustomer);

    showResult(`Your data has been updated successfully.`, true);

    return true;
  } else {
    console.log("upDatePassWord error", response.status);
    showResult("Failed to update profile. Try again.", false);
    return false;
  }
}

//...................................
function isValidForm(aSections: IRegisterSection[]) {
  let flValid = true;
  let sError = "";

  aSections.map((iSection) => {
    iSection.aFields.map((iInput) => {
      sError = "";
      const pInput = document.querySelector(
        `.profile input[name="${iInput.name}"]`,
      ) as HTMLInputElement;

      if (pInput) {
        sError = validField(pInput.value, iInput.name);

        if (sError) flValid = false;
        if (pInput.nextElementSibling)
          pInput.nextElementSibling.textContent = sError;
      }
    });
  });
  return flValid;
}

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

//..........................................
function isAddressChange() {
  const sLSCustomer = localStorage.getItem("customer");
  let flChange = true;
  // if (sLSCustomer) {
  //   const oLSCustomer = JSON.parse(sLSCustomer);
  //   if (
  //   ) {
  //     flChange = false;
  //     document.querySelector(".profile__message-address")!.textContent = sNoChange;
  //   }
  // }
  return flChange;
}

//.......................................................
async function upDateAddress(): Promise<boolean> {
  const oAddress = {
    action: "changeAddress",
    addressId: "{{addressId}}",
    address: {
      streetName: "",
      postalCode: "",
      city: "",
      country: "",
    },
  };
  // oPassword.id = oCustomer.id;
  // oPassword.version = oCustomer.version;
  // oPassword.currentPassword = oCustomer.currentPassword;
  // oPassword.newPassword = oCustomer.newPassword;

  console.log("oAddress", oAddress);

  //...................................................................

  const urlApi = `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers/password`;
  const token = await takeToken();

  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(oAddress),
  });

  //console.log("upPassword>>await", response);

  if (response.status === 200) {
    const dataCustomer = await response.json();
    const sCustomer = JSON.stringify(dataCustomer);

    console.log("upDate Password sCustomer", sCustomer);
    localStorage.setItem("customer", sCustomer);

    showResult(`Your data has been updated successfully.`, true);

    return true;
  } else {
    console.log("upDatePassWord error", response.status);
    showResult("Failed to update profile. Try again.", false);
    return false;
  }
}

//.........................................................
export async function createNewAddress() {
  oCustomer = getCustomer();

  let oAddAddress = {
    version: 0,
    actions: [
      {
        action: "addAddress",
        address: {
          streetName: "Any Street",
          streetNumber: "1337",
          postalCode: "11111",
          city: "Any City",
          country: "US",
        },
      },
    ],
  };

  oAddAddress.version = oCustomer.version;
  console.log("oAddress", oAddAddress);

  const urlApi = `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers/${oCustomer.id}`;
  const token = await takeToken();

  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(oAddAddress),
  });

  console.log("addAddress response", response);

if (response.status === 200) {
    const dataCustomer = await response.json();
    console.log('add address dataCustomer', dataCustomer);

    const sCustomer = JSON.stringify(dataCustomer);

    // console.log('upDate sCustomer',sCustomer);
    //localStorage.setItem("customer", sCustomer);

    showResult(`New address add successfully.`, true);
    // console.log("Your profile updated successful", data);
    return true;
  } else {
    console.log("add address - error", response.status);
    showResult("Failed to add address. Try again.", false);
    return false;
  }


}
