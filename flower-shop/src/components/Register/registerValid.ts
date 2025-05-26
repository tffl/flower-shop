import { aSections } from "./registerData.ts";

const reName = /^[a-z\s-]+$/i; // /^[A-Za-z]+$/
const reEmail = /\w+@\w+\.[a-z]{2,3}/i;
const rePassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
const reAddress = /^[\w\s-]+$/; ///[\w\s]+/;

//......................................................
export function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
  let sError: string = "";
  const pInput = e.target as HTMLInputElement;

  const value = pInput.value.trim();
  const name = pInput.name;

  sError = validField(value, name);
  if (pInput.nextElementSibling) pInput.nextElementSibling.textContent = sError;

  isValidForm(false);
}

//.....................................................
export function isValidForm(putError: boolean) {
  //console.log("isValidForm");
  let flValid = true;
  let sError = "";

  aSections.map((iSection) => {
    iSection.aFields.map((iInput) => {
      sError = "";
      const pInput = document.querySelector(
        `.register input[name="${iInput.name}"]`,
      ) as HTMLInputElement;

      if (pInput) {
        //const value = pInput.value;
        sError = validField(pInput.value, iInput.name);

        if (sError) flValid = false;

        //console.log("isValidForm", putError, sError);
        if (putError && pInput.nextElementSibling)
          pInput.nextElementSibling.textContent = sError;
      }
    });
  });

  const pBtn = document.querySelector(".register__submit-btn") as HTMLElement;
  const pTxt = document.querySelector(".register__submit-txt") as HTMLElement;

  if (flValid) {
    if (pBtn.classList.contains("inactive")) pBtn.classList.remove("inactive");
    if (pTxt.classList.contains("error")) pTxt.classList.remove("error");
    pTxt.textContent =
      "The form is filled in correctly. You can create an account.";
  } else {
    if (!pBtn.classList.contains("inactive")) pBtn.classList.add("inactive");
    if (!pTxt.classList.contains("error")) pTxt.classList.add("error");
    if (putError)
      pTxt.textContent = "Not all form fields are filled in correctly.";
  }
  return flValid;
}

//...............................................................
function age(sBirthday: string): number {
  const today = new Date();
  const birthday = new Date(sBirthday);
  //console.log(today, birthday);
  let age: number = today.getFullYear() - birthday.getFullYear();

  //console.log(today.getFullYear(), "-", birthday.getFullYear(), "=", age);

  if (
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDay() < birthday.getDay())
  )
    age -= 1;
  return age;
}

//.....................................................
function validField(value: string, name: string) {
  let sError = "";

  if (!value) sError = "Field is required";
  else {
    switch (name) {
      case "name":
        //console.log(value);
        if (!reName.test(value))
          sError =
            "Name must contain only latin letters, spaces, symbols '-' and '_'";
        break;

      case "surname":
        if (!reName.test(value))
          sError =
            "SurName must contain only latin letters, spaces, symbols '-' and '_'";
        break;

      case "date":
        let uAge = age(value);
        if (uAge < 13) sError = "The user must be over 13 years old";
        else if (uAge > 120) sError = "Age cannot exceed 120 years";
        break;

      case "email":
        if (!reEmail.test(value)) sError = "Invalid email";
        break;
      case "password":
        if (value.length < 8)
          sError = "Password must contain at least 8 characters";
        else if (!rePassword.test(value))
          sError =
            "Password must contain at least 1 number,  1 letter in upper case,  1 letter in lower case ";
        break;

      case "city":
      case "city2":
        if (!reName.test(value))
          sError =
            "City must contain only latin letters, spaces, symbols '-' and '_'";
        break;
      case "street":
      case "postcode":
      case "street2":
      case "postcode2":
        if (!reAddress.test(value))
          sError =
            "Field must contain only latin letters, numbers, spaces, symbols '-' and '_'";
        break;
    }
  }
  return sError;
}
