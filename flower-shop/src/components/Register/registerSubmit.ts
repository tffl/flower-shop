import { isValidForm } from "./registerValid";
export function registerSubmit() {
  if (isValidForm()) console.log("submit", "valid");
}
