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

export interface IUpDate {
  version: number;
  actions: [
    {
      action: string;
      firstName: string;
    },
    {
      action: string;
      lastName: string;
    },

    {
      action: string;
      dateOfBirth: string;
    },

    {
      action: string;
      email: string;
    },
  ];
}

// export interface IAction {
//   action: string;
//   dateOfBirth: string;
// }
