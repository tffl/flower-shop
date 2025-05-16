import { IField, ICheck, IRegisterSection } from "./types";

interface IPropsSection {
  section: IRegisterSection;
}

interface IPropsInput {
  aFields: IField[];
}

interface IPropsCheck {
  aChecks: ICheck[];
}

// const aInputErrors: IError [] =[
//   { id:1, message: 'Field is required'},
//   { id:2, message: 'Field must contain only latin letters'},
//   { id:3, message: 'Field must contain only numbers and latin letters'},
//   { id:4, message: 'Field must contain at least 8 characters'},
//   { id:5, message: 'Field must contain at least 1 number'},
//   { id:6, message: 'Field must contain at least 1 letter in upper case'},
//   { id:7, message: 'Field must contain at least 1 letter in lower case'},
//   { id:8, message: 'Invalid email'},
//   { id:9, message: 'The user must be over 14 years old'},
// ]

// const aCountries =[
//   'USA','UK','Canada'
// ]

export function CreateSection({ section }: IPropsSection) {
  return (
    <div className="register__section">
      <h3>{section.title}</h3>
      <RegInputs aFields={section.aFields} />
      <RegChecks aChecks={section.aChecks} />
    </div>
  );
}

function RegInputs({ aFields }: IPropsInput) {
  return (
    <div>
      {aFields.map((iField, i) => (
        <div className="register__input" key={i + 3}>
          <h4>{iField.label}*</h4>
          <input
            type={iField.type}
            // placeholder={iField.label + ": " + iField.placeholder}
            placeholder={iField.placeholder}
            key={iField.id}
          ></input>
          <div className="register__input-error"></div>
        </div>
      ))}
    </div>
  );
}

function RegChecks({ aChecks }: IPropsCheck) {
  return (
    <>
      {aChecks.map((iCheck, i) => (
        <div className="register__check" key={i}>
          <input type="checkbox" key={iCheck.id}></input>
          <p className="register__check-label">{iCheck.label}</p>
        </div>
      ))}
    </>
  );
}

// function isValidForm(){
// }
// function outError(){
//   console.log(aInputErrors)
// }
