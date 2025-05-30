import { validField } from "../Register/registerValid";

//......................................................
export function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
  let sError: string = "";
  const pInput = e.target as HTMLInputElement;

  const value = pInput.value.trim();
  const name = pInput.name;

  sError = validField(value, name);
  if (pInput.nextElementSibling) pInput.nextElementSibling.textContent = sError;

  //   isValidForm(false);
}


//..........................................................
