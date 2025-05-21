// import { useState } from "react";
import { IField, ICheck, IRegisterSection } from "./registerTypes";
import { inputHandler } from "./registerValid";

interface IPropsSection {
  section: IRegisterSection;
}

interface IPropsInput {
  aFields: IField[];
}

interface IPropsCheck {
  aChecks: ICheck[];
}

const aCountries = ["USA", "UK", "Canada"];

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
          {iField.label === "Country" ? (
            <RegSelect />
          ) : (
            <input
              type={iField.type}
              name={iField.name}
              // placeholder={iField.label + ": " + iField.placeholder}
              placeholder={iField.placeholder}
              // onBlur={(e) => blurHandler(e)}
              onChange={(e) => inputHandler(e)}
              key={iField.id}
              defaultValue={iField.type === "date" ? "2000-01-01" : ""} //min="2023-01-01" max="2023-12-31"
            ></input>
          )}
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

function RegSelect() {
  return (
    <select className="register__select">
      {aCountries.map((iCountry, i) => (
        <option className="register__select-option" key={i}>
          {iCountry}
        </option>
      ))}
    </select>
  );
}
