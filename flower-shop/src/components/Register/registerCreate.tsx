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
      <div className="register__section-title">
        <h3>{section.title}</h3>
      </div>
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
              placeholder={iField.placeholder}
              onChange={(e) => inputHandler(e)}
              key={iField.id}
              defaultValue={iField.type === "date" ? "2000-01-01" : ""} //min="2023-01-01" max="2023-12-31"
            ></input>
          )}
          <div className="register__input-error"></div>
          {iField.name === "password" && (
            <a href="#" className="password-view" onClick={showView}></a>
          )}
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

function showView() {
  const pInputPass = document.querySelector(
    `.register input[name="password"]`,
  ) as HTMLInputElement;
  let target = document.querySelector(".password-view") as HTMLElement;

  if (pInputPass.getAttribute("type") === "password") {
    target.classList.add("view");
    pInputPass.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    pInputPass.setAttribute("type", "password");
  }
}
