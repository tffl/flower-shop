import { ApiRequestParams } from "../types/types";
import { getToken } from "./token";

export async function executeApiRequest(params: ApiRequestParams) {
  const {
    endpoint,
    method = "GET",
    path = "",
    query = {},
    body,
    isAuthRequest = false,
  } = params;

  const apiUrl = isAuthRequest
    ? import.meta.env.VITE_CTP_AUTH_URL
    : `${import.meta.env.VITE_CTP_API_URL}/${import.meta.env.VITE_CTP_PROJECT_KEY}`;

  const queryString = new URLSearchParams(query).toString();

  const url = `${apiUrl}/${endpoint}${path}${queryString ? `?${queryString}` : ""}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (isAuthRequest) {
    console.log("тут");
    const authString = btoa(
      `${import.meta.env.VITE_CTP_CLIENT_ID}:${import.meta.env.VITE_CTP_CLIENT_SECRET}`,
    );
    headers.Authorization = `Basic ${authString}`;
  } else {
    const token = await getToken();
    console.log(token.access_token);
    headers.Authorization = `Bearer ${token.access_token}`;
  }

  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || `Request failed: ${response.status}`);
  }

  return response.json();
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
