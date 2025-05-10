import { IField, IRegisterSection } from "./types";

interface IPropsSection {
  section: IRegisterSection;
}

interface IPropsInput {
  aFields: IField[];
}

export function CreateSection({ section }: IPropsSection) {
  return (
    <div className="section">
      <h3>{section.title}</h3>
      <RegInput aFields={section.aFields} />
    </div>
  );
}

function RegInput({ aFields }: IPropsInput) {
  // console.log("RegInput<<<", props);
  // console.log ('****', props.aFields[0].type, props.aFields[0].placeholder)
  return (
    <div className="input">
      {aFields.map((iField) => (
        <input
          type={iField.type}
          placeholder={iField.placeholder}
          key={iField.id}
        ></input>
      ))}
      {/* <h4>Name*</h4> */}
    </div>
  );
}
