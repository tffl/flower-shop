import { useState } from "react";
import { IField } from "../Register/registerTypes";
import { inputHandler } from "./loginValid";
import { IPropsSection, IPropsInput } from "../Register/registerTypes";

export function CreateSection({ section }: IPropsSection) {
  return (
    <div className="register__section">
      <h3>{section.title}</h3>
      <LogInput aFields={section.aFields} />
    </div>
  );
}

//............................................................
function LogInput({ aFields }: IPropsInput) {
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow((v) => !v);
    const pView = document.querySelector(".password-view") as HTMLElement;
    pView.classList.toggle("view");
  };

  return (
    <div>
      {aFields.map((iField: IField, i: number) => (
        <div className="register__input" key={i + 3}>
          <h4>{iField.label}*</h4>

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
          ></input>
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

// export function LogInput({ aFields }: IPropsInput) {
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePassword = () => setShowPassword((prev) => !prev);
//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     inputHandler(e);
//   };

//   return (
//     <div className="input">
//       {aFields.map((iField) => (
//         <div key={iField.id} className="input-group">
//           <label htmlFor={iField.name} className="logInput-label">
//             {iField.label}
//           </label>

//           <div className="input-wrapper">
//             <div className="input-with-icon">
//               <input
//                 id={iField.name}
//                 name={iField.name}
//                 type={
//                   iField.name === "password" && showPassword
//                     ? "text"
//                     : iField.type
//                 }
//                 placeholder={iField.placeholder}
//                 onChange={handleInput}
//                 required
//               />
//               {iField.name === "password" && (
//                 <button
//                   type="button"
//                   onClick={togglePassword}
//                   className="toggle-password"
//                 >
//                   {showPassword ? "hide" : "show"}
//                 </button>
//               )}
//             </div>
//             <span className="error-message"></span> {}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
