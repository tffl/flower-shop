import { IField, ICheck, IRegisterSection } from "./types";

interface IPropsSection {
  section: IRegisterSection;
}

interface IPropsInput {
  aFields: IField[];
}

interface IPropsCheck {
  aChecks: ICheck[];
}

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
  // console.log("RegInput<<<", props);
  // console.log ('****', props.aFields[0].type, props.aFields[0].placeholder)
  return (
    <div>
      {aFields.map((iField,i) => (
        <div className="register__input" key = {i+3}>
          {/* <h4>{iField.label}*</h4> */}
          <input
            type={iField.type}
            placeholder={iField.label + ": " + iField.placeholder}
            key={iField.id}
          ></input>
        </div>
      ))
    }
    </div>
  );
}

function RegChecks({ aChecks }: IPropsCheck) {
  // console.log("RegInput<<<", props);
  // console.log ('****', props.aFields[0].type, props.aFields[0].placeholder)
  return (
    <>
      {aChecks.map((iCheck, i) => (
        <div className="register__check" key = {i}>
          <input
            type='checkbox'
            key={iCheck.id}
          ></input>
          <p className="register__check-label">{iCheck.label}</p>
        </div>
      ))
    }
    </>
  );
}