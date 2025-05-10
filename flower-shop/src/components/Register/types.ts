export interface IRegisterSection {
  id: number;
  title: string;
  aFields: IField[];
}

export interface IField {
  id: number;
  type: string;
  placeholder: string;
}
