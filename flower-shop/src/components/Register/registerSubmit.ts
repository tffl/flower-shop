import { isValidForm } from "./registerValid";

export function registerSubmit(e:any) {
  console.log("submit")
   e.preventDefault();
  if (isValidForm()) console.log("valid");
}
