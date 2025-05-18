import fetch from 'node-fetch';
import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/ts-client';

const projectKey = 'flower-shop2025';
const scopes = ['manage_my_quote_requests:flower-shop2025 manage_my_business_units:flower-shop2025 create_anonymous_token:flower-shop2025 manage_my_payments:flower-shop2025 manage_my_profile:flower-shop2025 manage_my_orders:flower-shop2025 view_categories:flower-shop2025 view_published_products:flower-shop2025 manage_my_quotes:flower-shop2025 manage_my_shopping_lists:flower-shop2025'];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.commercetools.com',
  projectKey: 'flower-shop2025',
  credentials: {
    clientId: '{clientId}',
    clientSecret: '{clientSecret}',
  },
  scopes,
  httpClient: fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.commercetools.com',
  httpClient: fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();