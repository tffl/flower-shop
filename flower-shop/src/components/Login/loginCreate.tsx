import { useState } from "react";
import { IField, ILoginSection } from "./loginTypes";
import { inputHandler } from "./loginValid";

interface IPropsSection {
  section: ILoginSection;
}

interface IPropsInput {
  aFields: IField[];
}

export function CreateSection({ section }: IPropsSection) {
  return (
    <div className="section">
      <h3>{section.title}</h3>
      <LogInput aFields={section.aFields} />
    </div>
  );
}

export function LogInput({ aFields }: IPropsInput) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputHandler(e);
  };

  return (
    <div className="input">
      {aFields.map((iField) => (
        <div key={iField.id} className="input-group">
          <label htmlFor={iField.name} className="logInput-label">
            {iField.label}
          </label>

          <div className="input-wrapper">
            <div className="input-with-icon">
              <input
                id={iField.name}
                name={iField.name}
                type={
                  iField.name === "password" && showPassword
                    ? "text"
                    : iField.type
                }
                placeholder={iField.placeholder}
                onChange={handleInput}
                required
              />
              {iField.name === "password" && (
                <button
                  type="button"
                  onClick={togglePassword}
                  className="toggle-password"
                >
                  {showPassword ? "hide" : "show"}
                </button>
              )}
            </div>
            <span className="error-message"></span> {}
          </div>
        </div>
      ))}
    </div>
  );
}
