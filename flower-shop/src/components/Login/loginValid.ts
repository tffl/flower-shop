import type { ChangeEvent } from "react";

export function inputHandler(e: ChangeEvent<HTMLInputElement>) {
  const input = e.target;
  const container = input.closest(".input-wrapper");
  const errorElement = container?.querySelector(".error-message") as HTMLElement;

  let sError: string = "";
  let value = e.target.value.trim();

  const reEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const rePassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

  if (!value) {
    sError = "Field is required";
  } else {
    switch (e.target.name) {
      case "email":
        if (!reEmail.test(value)) {
          sError = "Invalid email";
        }
        break;

      case "password":
        if (value.length < 8) {
          sError = "Password must contain at least 8 characters";
        } else if (!rePassword.test(value)) {
          sError =
            "Password must contain at least 1 number, 1 uppercase and 1 lowercase letter";
        }
        break;
    }
  }

  if (errorElement) {
    errorElement.textContent = sError;
  }
}

export function isValidForm() {
  let flValid = true;
  console.log("isValidForm");
  return flValid;
}