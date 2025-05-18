import { IField, ILoginSection } from "./loginTypes";

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

function LogInput({ aFields }: IPropsInput) {
  return (
    <div className="input">
      {aFields.map((iField) => (
        <div key={iField.id} className="input-group">
          <label htmlFor={iField.name} className="logInput-label">
            {iField.label}
          </label>
          <input
            id={iField.name}
            name={iField.name}
            type={iField.type}
            placeholder={iField.placeholder}
          />
        </div>
      ))}
    </div>
  );
}
