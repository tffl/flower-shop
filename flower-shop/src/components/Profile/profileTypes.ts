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

export interface IAddressUpdate {
  action: string;
  addressId: string;
  address: IAddress;
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

export interface IPropsSectionAddress {
  section: iSectionAddress;
}

export interface iSectionAddress {
  id: number;
  title: string;
  addresses: IAddressField[];
}

export interface IAddressField {
  id: string;
  aFields: IField[];
}

export interface IField {
  id: number;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
}

// export interface IAction {
//   action: string;
//   dateOfBirth: string;
// }
