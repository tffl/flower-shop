// import { useState } from "react";
import { IField, IRegisterSection } from "../Register/registerTypes";
// import { inputHandler } from "./registerValid";

interface IPropsSection {
  section: IRegisterSection;
}

interface IPropsSection {
  section: IRegisterSection;
}

interface IPropsInput {
  aFields: IField[];
}
export function CreateSection({ section }: IPropsSection) {
  return (
    <div className="profile__section">
      <h3>{section.title}</h3>
      <ProfInfo aFields={section.aFields} />
      {/* <RegInputs aFields={section.aFields} />
      <RegChecks aChecks={section.aChecks} /> */}
    </div>
  );
}

function ProfInfo({ aFields }: IPropsInput) {
  return (
    <div>
      {aFields.map((iField, i) => (
        <div className="profile__info" key={i + 3}>
          <h4>{iField.label}: </h4>
          {/* {iField.label === "Country" ? (
            <RegSelect />
          ) : ( */}
          <p
            className="profile__info_txt"
            //type={iField.type}
            //name={iField.name}
            // placeholder={iField.label + ": " + iField.placeholder}
            //placeholder={iField.placeholder}
            // onBlur={(e) => blurHandler(e)}
            //onChange={(e) => inputHandler(e)}
            key={iField.id}
            //defaultValue={iField.type === "date" ? "2000-01-01" : ""} //min="2023-01-01" max="2023-12-31"
          >
            {iField.placeholder}
          </p>
          {/* <div className="register__input-error"></div> */}
        </div>
      ))}
    </div>
  );
}
