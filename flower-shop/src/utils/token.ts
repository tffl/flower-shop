import { buildScopeString } from "../app/utilities";

export async function getToken() {
  try {
    const scope = buildScopeString([
      "products",
      "categories",
      "orders",
      "anonymousToken",
      "profile",
    ]);
    console.log(scope);
    const url = `${import.meta.env.VITE_CTP_AUTH_URL}/oauth/${import.meta.env.VITE_CTP_PROJECT_KEY}/anonymous/token`;
    const authString = btoa(
      `${import.meta.env.VITE_CTP_CLIENT_ID}:${import.meta.env.VITE_CTP_CLIENT_SECRET}`,
    );

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("scope", scope);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const responseData = await response.json();
    if (!response.ok) {
      console.error("Error details:", responseData);
      throw new Error(
        `Auth failed: ${response.status} - ${JSON.stringify(responseData)}`,
      );
    }
    // console.log(responseData);
    return responseData;
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
}
