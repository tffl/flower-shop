// export interface IRegisterSection {
//   id: number;
//   title: string;
//   aFields: IField[];
//   aChecks: ICheck[];
// }

// export interface IField {
//   id: number;
//   name: string;
//   label: string;
//   type: string;
//   placeholder: string;
// }

// export interface ICheck {
//   id: number;
//   label: string;
// }

// export interface IError {
//   id: number;
//   message: string;
// }

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
  adreses: string[];
}
