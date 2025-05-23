import { buildScopeString } from "./utilities";

export async function executeApiRequest() {

  try {
    const scope=buildScopeString(['products','orders','profile']);
    const url=`${import.meta.env.VITE_CTP_AUTH_URL}/oauth/${import.meta.env.VITE_CTP_PROJECT_KEY}/anonymous/token`;
    const authString = btoa(`${import.meta.env.VITE_CTP_CLIENT_ID}:${import.meta.env.VITE_CTP_CLIENT_SECRET}`);
    
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('scope', scope);
     
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const responseData = await response.json();
    if (!response.ok) {
      console.error('Error details:', responseData);
      throw new Error(`Auth failed: ${response.status} - ${JSON.stringify(responseData)}`);
    }
    console.log(responseData); 
    return responseData;

  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
    
  }
}

// export async function getCategories() {
//   const API_URL = 'https://api.europe-west1.gcp.commercetools.com';
//   const token = await executeApiRequest();
  
//   const response = await fetch(`${API_URL}/${import.meta.env.VITE_CTP_PROJECT_KEY}/categories`, {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch categories');
//   }

//   return response.json();
// }