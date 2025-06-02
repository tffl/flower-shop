// export async function createNewAddress(){

// let oAddAddress =
//     {
//   "version" : 3,
//   "actions" : [ {
//     "action" : "addAddress",
//     "address" : {
//       "streetName" : "Any Street",
//       "streetNumber" : "1337",
//       "postalCode" : "11111",
//       "city" : "Any City",
//       "country" : "US"
//     }
//   } ]
//     }

//  oAddAddress.version = oCustomer.version;

//  const urlApi = `https://api.europe-west1.gcp.commercetools.com/flower-shop2025/customers/${oCustomer.id}`;
//    const token = await takeToken();

//    const response = await fetch(urlApi, {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//        Authorization: `Bearer ${token}`,
//      },
//      body: JSON.stringify(oAddAddress),
//    });

//    console.log("upDateCustomer>>await", response);

//   console.log ('oAddress' , oAddAddress);
// }


export function deleteAddress(){}