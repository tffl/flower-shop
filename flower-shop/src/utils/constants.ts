export const AUTH_URL='https://auth.europe-west1.gcp.commercetools.com';
export const API_URL='https://api.europe-west1.gcp.commercetools.com';
export const APP_SCOPES={
  requests:'manage_my_quote_requests:flower-shop2025',
  units:'manage_my_business_units:flower-shop2025',
  anonymousToken:'create_anonymous_token:flower-shop2025',
  payments: 'manage_my_payments:flower-shop2025',
  profile: 'manage_my_profile:flower-shop2025',
  orders: 'manage_my_orders:flower-shop2025',
  categories: 'view_categories:flower-shop2025',
  products: 'view_published_products:flower-shop2025',
  quotes: 'manage_my_quotes:flower-shop2025',
  shoppingLists: 'manage_my_shopping_lists:flower-shop2025'
} as const;

export type ScopeKey = keyof typeof APP_SCOPES;