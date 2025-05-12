export interface IRegisterSection {
  id: number;
  title: string;
  aFields: IField[];
  aChecks: ICheckbox[];
}

export interface IField {
  id: number;
  label: string;
  type: string;
  placeholder: string;
}

export interface ICheckbox{
  id: number;
  label: string;
}