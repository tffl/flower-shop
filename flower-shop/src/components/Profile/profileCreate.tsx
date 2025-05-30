// import { useState } from "react";
import { IPropsSection, IPropsInput } from "../Register/registerTypes";
import { RegSelect } from "../Register/registerCreate";
import { useState } from "react";
import { changeHandler } from "./profileChange";

export function CreateSection({ section }: IPropsSection) {
  return (
    <div className="profile__section">
      <h3>{section.title}</h3>
      <ProfInfo aFields={section.aFields} />
    </div>
  );
}

function ProfInfo({ aFields }: IPropsInput) {
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow((v) => !v);
    const pView = document.querySelector(
      ".password-view",
    ) as HTMLElement;
    pView.classList.toggle("view");
  };
  return (
    <div>
      {aFields.map((iField, i) => (
        <div className="register__input" key={i + 7}>    {/*//className="profile__info"*/}
          <h4>{iField.label}: </h4>
          {/* <p className="profile__info_txt" key={iField.id}>
            {iField.value}
          </p> */}

          {iField.name === "password" && (
            <a
              className="password-view"
              onClick={togglePasswordVisibility}
            >
              {show ? (
                <img src="svg/view.svg" alt=""></img>
              ) : (
                <img src="svg/no-view.svg" alt=""></img>
              )}
            </a>
          )}

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
              defaultValue={iField.value}
              onChange={(e) => changeHandler(e)}
              key={iField.id+300}
            ></input>
          )}
          <div className="register__input-error"></div>
        </div>
      ))}
    </div>
  );
}
