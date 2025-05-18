export function inputHandler(e: any) {
  console.log("input<<<", e.target.value);

  let sError: string = "";
  let value = e.target.value.trim();

  const reEmail = /\w+@\w+\.[a-z]{2,3}/i;
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

  e.target.nextElementSibling.textContent = sError;
}

export function isValidForm() {
  let flValid = true;
  console.log("isValidForm");
  return flValid;
}
