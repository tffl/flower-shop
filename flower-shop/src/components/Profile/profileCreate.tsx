// import { useState } from "react";
import { IPropsSection, IPropsInput } from "../Register/registerTypes";
// import { inputHandler } from "./registerValid";

// interface IPropsSection {
//   section: IRegisterSection;
// }

// interface IPropsSection {
//   section: IRegisterSection;
// }

// interface IPropsInput {
//   aFields: IField[];
// }
export function CreateSection({ section }: IPropsSection) {
  // const sCustomer = localStorage.getItem("customer")
  // console.log('CreateSection - localstorage', sCustomer)
  // if (sCustomer){
  // const oCustomer = JSON.parse(sCustomer)
  // console.log('CreateSection - localstorage - object', oCustomer)
  // }

  return (
    <div className="profile__section">
      <h3>{section.title}</h3>
      <ProfInfo aFields={section.aFields} />
    </div>
  );
}

function ProfInfo({ aFields }: IPropsInput) {
  return (
    <div>
      {aFields.map((iField, i) => (
        <div className="profile__info" key={i + 3}>
          <h4>{iField.label}: </h4>
          <p className="profile__info_txt" key={iField.id}>
            {iField.value}
          </p>
        </div>
      ))}
    </div>
  );
}
