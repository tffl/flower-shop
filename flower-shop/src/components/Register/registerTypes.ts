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
}

export interface ICheck {
  id: number;
  label: string;
}

export interface IError {
  id: number;
  message: string;
}
