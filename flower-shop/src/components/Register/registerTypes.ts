export interface IRegisterSection {
  id: number;
  title: string;
  aFields: IField[];
  aChecks: ICheck[];
}

export interface IField {
  id: number;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
}

export interface ICheck {
  id: number;
  label: string;
}

export interface IError {
  id: number;
  message: string;
}

export interface ICustomer {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IPropsSection {
  section: IRegisterSection;
}

export interface IPropsInput {
  aFields: IField[];
}

export interface IPropsCheck {
  aChecks: ICheck[];
}

// addresses : []
// authenticationMode : "Password"
// billingAddressIds : []
// createdAt : "2025-05-25T06:10:08.586Z"
// createdBy : {clientId: 'dKXLsfhgcZ3OQCrSpp1thax1', isPlatformClient: false}
// customerGroupAssignments : []
// email :  "antgalin@mail.ru"
// firstName : "hhh"
// id :  "31f51dea-ca05-45cd-b230-4ea9d85cc39c"
// isEmailVerified : false
// lastMessageSequenceNumber : 1
// lastModifiedAt : "2025-05-25T06:10:08.586Z"
// lastModifiedBy : {clientId: 'dKXLsfhgcZ3OQCrSpp1thax1', isPlatformClient: false}
// lastName :  "mmmm"
// password :  "****Hhs="
// shippingAddressIds :  []
// stores :  []
// version :  1
// versionModifiedAt :  "2025-05-25T06:10:08.586Z"

export interface ICustomerApi {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  dateOfBirth: string;
  addresses: IAddress[];
}

// "streetName" : "Any Street",
// "streetNumber" : "1337",
// "postalCode" : "11111",
// "city" : "Any City",
// "country" : "US"

export interface IAddress {
  streetName: string;
  postalCode: string;
  city: string;
  country: string;
}
