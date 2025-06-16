import { IPropsSection, IPropsInput } from "../Register/registerTypes";
import { RegSelect } from "../Register/registerCreate";
import { useState } from "react";
import { changeHandler } from "./profileChange";
import { deleteAddress } from "./profileSubmit.tsx";
import { IPropsSectionAddress } from "./profileTypes.ts";

//...............................................................
export function CreateSection({ section }: IPropsSection) {
  return (
    <div className="profile__section">
      <div className={section.title ? "profile__section-title" : ""}>
        <h3>{section.title}</h3>
      </div>
      <ProfInfo aFields={section.aFields} />
    </div>
  );
}

//......................................................................
function ProfInfo({ aFields }: IPropsInput) {
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow((v) => !v);
    const pView = document.querySelector(".password-view") as HTMLElement;
    pView.classList.toggle("view");
  };
  return (
    <div>
      {aFields.map((iField, i) => (
        <div className="register__input" key={i + 7}>
          {" "}
          <h4>{iField.label}: </h4>
          {(iField.name === "currentPassword" ||
            iField.name === "newPassword") && (
            <a className="password-view" onClick={togglePasswordVisibility}>
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
                iField.name !== "currentPassword" &&
                iField.name !== "newPassword"
                  ? iField.type
                  : show
                    ? "text"
                    : "password"
              }
              name={iField.name}
              defaultValue={iField.value}
              onChange={(e) => changeHandler(e)}
              key={iField.id + 300}
            ></input>
          )}
          <div className="register__input-error"></div>
        </div>
      ))}
    </div>
  );
}

//..................................................................
export function CreateSectionAddress({ section }: IPropsSectionAddress) {
  return (
    <div className="profile__section-addresses">
      <div className={section.title ? "profile__section-title" : ""}>
        <h3>{section.title}</h3>
      </div>
      {section.addresses.map((address) => (
        <div className="profile__address" key={address.id}>
          <ProfInfoAddress aFields={address.aFields} />
          <button
            className="profile__address-btn"
            name={address.id}
            onClick={(e) => deleteAddress(e)}
          >
            Delete address
          </button>
        </div>
      ))}
    </div>
  );
}

//...................................................................
export function ProfInfoAddress({ aFields }: IPropsInput) {
  return (
    <div>
      {aFields.map((iField, i) => (
        <div className="register__input" key={i + 17}>
          <h4>{iField.label}: </h4>
          {iField.label === "Country" ? (
            <RegSelect />
          ) : (
            <input
              name={iField.name}
              defaultValue={iField.value}
              onChange={(e) => changeHandler(e)}
              key={iField.id + 200}
            ></input>
          )}
          <div className="register__input-error"></div>
        </div>
      ))}
    </div>
  );
}
