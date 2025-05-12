export interface IRegisterSection {
  id: number;
  title: string;
  aFields: IField[];
  aChecks: ICheck[];
}

export interface IField {
  id: number;
  label: string;
  type: string;
  placeholder: string;
}

export interface ICheck {
  id: number;
  label: string;
}
