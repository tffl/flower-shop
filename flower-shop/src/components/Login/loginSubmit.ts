import { isValidForm } from "./loginValid";

export function loginSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (isValidForm()) {
    console.log("valid");
  }
}
