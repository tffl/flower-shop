export function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
  let sError: string = "";
  const pInput = e.target as HTMLInputElement;

  const value = pInput.value.trim();
  const name = pInput.name;
  // console.log("input<<<", pInput, name, value);

  const reName = /^[a-z]+$/i; // /^[A-Za-z]+$/
  const reEmail = /\w+@\w+\.[a-z]{2,3}/i;
  const rePassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

  if (!value) sError = "Field is required";
  else {
    switch (name) {
      case "name":
        console.log(value);
        if (!reName.test(value))
          sError = "Name must contain only latin letters";
        break;

      case "surname":
        if (!reName.test(value))
          sError = "SurName must contain only latin letters";
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
        break;
      case "street":
        break;
      case "postcode":
        break;
    }
  }
  // console.log("input<<<", pInput, sError);
  if (pInput.nextElementSibling) pInput.nextElementSibling.textContent = sError;
  //  <div className="register__input-error">{sError}</div>
}

// // export function isValidName() : string{
// export function errorName(): string {
//   //  let flValid = true
//   let errorMessage = "";

//   if (!name.value)
//     // flValid = false
//     return errorMessage;
// }

export function isValidForm() {
  console.log("isValidForm");
  let flValid = true;

  // if (!value) sError = "Field is required";
  //   else {
  //     switch (name) {
  //       case "name":
  //         console.log(value);
  //         if (!reName.test(value))
  //           sError = "Name must contain only latin letters";
  //         break;

  //       case "surname":
  //         if (!reName.test(value))
  //           sError = "SurName must contain only latin letters";
  //         break;

  //       case "date":
  //         let uAge = age(value);
  //         if (uAge < 13) sError = "The user must be over 13 years old";
  //         else if (uAge > 120) sError = "Age cannot exceed 120 years";
  //         break;

  //       case "email":
  //         if (!reEmail.test(value)) sError = "Invalid email";
  //         break;
  //       case "password":
  //         if (value.length < 8)
  //           sError = "Password must contain at least 8 characters";
  //         else if (!rePassword.test(value))
  //           sError =
  //             "Password must contain at least 1 number,  1 letter in upper case,  1 letter in lower case ";
  //         break;

  //       case "city":
  //         break;
  //       case "street":
  //         break;
  //       case "postcode":
  //         break;
  //     }
  //   }
  //   // console.log("input<<<", pInput, sError);
  //   if (pInput.nextElementSibling) pInput.nextElementSibling.textContent = sError;

  // const pBtn = document.querySelector('.register__submit-btn') as HTMLElement
  // if (flValid){
  //   if(pBtn.classList.contains('inactive'))  pBtn.classList.remove('inactive')
  //     (document.querySelector('.register__submit-txt') as HTMLElement).textContent = 'The form is filled in correctly. You can create an account.'
  //   }
  //   else{
  //    if(!pBtn.classList.contains('inactive'))
  //     pBtn.classList.add('inactive')
  //        (document.querySelector('.register__submit-txt') as HTMLElement).textContent = 'Not all form fields are filled in correctly.'
  //   }
  return flValid;
}

function age(sBirthday: string): number {
  const today = new Date();
  const birthday = new Date(sBirthday);
  console.log(today, birthday);
  let age: number = today.getFullYear() - birthday.getFullYear();

  console.log(today.getFullYear(), "-", birthday.getFullYear(), "=", age);

  if (
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDay() < birthday.getDay())
  )
    age -= 1;
  return age;
}
