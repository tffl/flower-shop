// export interface ICustomer {
//   email: string;
//   firstName: string;
//   lastName: string;
//   password: string;
// }

export interface ICustomerApiUpDate {
  id: string;
  version: number;
  email: string;
  firstName: string;
  lastName: string;
  currentPassword: string;
  newPassword: string;
  dateOfBirth: string;
  addresses: IAddress[];
}

export interface IAddress {
  streetName: string;
  postalCode: string;
  city: string;
  country: string;
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
