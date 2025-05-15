const aInputErrors: string[] = [
  "Field is required",
  "Field must contain only latin letters",
  "Field must contain only numbers and latin letters",
  "Field must contain at least 8 characters",
  "Field must contain at least 1 number",
  "Field must contain at least 1 letter in upper case",
  "Field must contain at least 1 letter in lower case",
  "Invalid email",
  "The user must be over 14 years old",
];

// export function blurHandler(e: any) {
export function inputHandler(e: any) {
  //  <div className="register__input-error">{sError}</div>
  console.log('change<<<<',e.target.value);
  let sError: string | null = "";
  let value = e.target.value.trim();
  


  const reName = /[a-z]+/i; // /^[A-Za-z]+$/
  const reEmail = /\w+@\w+\.[a-z]{2,3}/i;

  if (!value) sError = "Field is required";
  else {
    switch (e.target.name) {
      case "name":
        console.log(value);
        if (!reName.test(value))
          sError = "Field must contain only latin letters";
        break;
      case "surname":
        if (!reName.test(value))
          sError = "Field must contain only latin letters";
        break;

      case "date":
        break

      case "email":
         if (!reEmail.test(value))
          sError = "Invalid email"
        break
      case "password":
        break;
      case "city":
        break;
      case "street":
        break;
      case "postcode":
        break;
    }
  }
  e.target.nextElementSibling.textContent = sError;
  //  <div className="register__input-error">{sError}</div>
}

// export function changeHandler(e:any){
//      console.log('change<<<<',e.target.value);
//       e.target.nextElementSibling.textContent = '*** change';
// }

// // export function isValidName() : string{
// export function errorName(): string {
//   //  let flValid = true
//   let errorMessage = "";

//   if (!name.value)
//     // flValid = false
//     return errorMessage;
// }

export function isValidForm() {
  let flValid = false;

  console.log(aInputErrors);
  return flValid;
}
