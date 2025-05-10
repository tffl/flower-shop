import "./register.css";
import { CreateSection } from "./registerCreate.tsx";
import { IRegisterSection } from "./types";

export const Main = () => {
  const aSections: IRegisterSection[] = [
    {
      id: 1,
      title: "Personal info",
      aFields: [
        { id: 1, type: "text", placeholder: "name" },
        { id: 2, type: "text", placeholder: "surname" },
        { id: 3, type: "text", placeholder: "01.01.2000" },
        { id: 4, type: "email", placeholder: "email" },
        { id: 5, type: "password", placeholder: "password" },
      ],
    },

    {
      id: 2,
      title: "Shipping address",
      aFields: [
        { id: 1, type: "text", placeholder: "country" },
        { id: 2, type: "text", placeholder: "city" },
        { id: 3, type: "text", placeholder: "street" },
        { id: 4, type: "text", placeholder: "postal code" },
      ],
    },

    {
      id: 3,
      title: "Billing address",
      aFields: [
        { id: 1, type: "text", placeholder: "country" },
        { id: 2, type: "text", placeholder: "city" },
        { id: 3, type: "text", placeholder: "street" },
        { id: 4, type: "text", placeholder: "postal code" },
      ],
    },
  ];

  return (
    <div>
      <div
        className="register"
        style={{ backgroundImage: "url('img/back.png')" }}
      >
        {/* <p className="switch-top">Login | <span className="green">Register</span></p> */}
        <form>
          {aSections.map((iSection) => (
            <CreateSection section={iSection} key={iSection.id} />
          ))}
          {/* <input type='submit'>Create account</input> */}
          <button className="button">Create account</button>

          <p className="switch-bottom">
            Already have an account? <span className="green">Login</span>!
          </p>
        </form>
      </div>
    </div>
  );
};
