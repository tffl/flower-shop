// import { useState } from "react";
import { IPropsSection, IPropsInput, IPropsCheck } from "./registerTypes";
import { inputHandler } from "./registerValid";
import { useState } from "react";

const aCountries = ["USA", "UK", "Canada"];

//..........................................................
export function CreateSection({ section }: IPropsSection) {
  return (
    <div className="register__section">
      <div className={section.title ? "register__section-title" : ""}>
        <h3>{section.title}</h3>
      </div>
      <RegInputs aFields={section.aFields} />
      <RegChecks aChecks={section.aChecks} />
    </div>
  );
}

//............................................................
function RegInputs({ aFields }: IPropsInput) {
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow((v) => !v);
    const pView = document.querySelector(".password-view") as HTMLElement;
    pView.classList.toggle("view");
  };

  return (
    <div>
      {aFields.map((iField, i) => (
        <div className="register__input" key={i + 3}>
          <h4>{iField.label}*</h4>
          {iField.label === "Country" ? (
            <RegSelect />
          ) : (
            <input
              type={
                iField.name !== "password"
                  ? iField.type
                  : show
                    ? "text"
                    : "password"
              }
              name={iField.name}
              placeholder={iField.placeholder}
              onChange={(e) => inputHandler(e)}
              key={iField.id}
              defaultValue={iField.type === "date" ? "2000-01-01" : ""} //min="2023-01-01" max="2023-12-31"
            ></input>
          )}
          <div className="register__input-error"></div>
          {iField.name === "password" && (
            <a className="password-view" onClick={togglePasswordVisibility}>
              {show ? (
                <img src="svg/view.svg" alt=""></img>
              ) : (
                <img src="svg/no-view.svg" alt=""></img>
              )}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export function RegChecks({ aChecks }: IPropsCheck) {
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

export function RegSelect() {
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
