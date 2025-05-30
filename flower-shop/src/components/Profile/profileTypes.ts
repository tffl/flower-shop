export interface ICustomer {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ICustomerAPI {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  addresses: string[];
}
