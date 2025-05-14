import "./register.css";
import { CreateSection } from "./registerCreate.tsx";
import { IRegisterSection } from "./types";

export const Main = () => {
  const aSections: IRegisterSection[] = [
    {
      id: 1,
      title: "Personal info",
      aFields: [
        { id: 1, label: "Name", type: "text", placeholder: "N" },
        { id: 2, label: "Surname", type: "text", placeholder: "N" },
        {
          id: 3,
          label: "Date of birth",
          type: "date",
          placeholder: "01.01.2000",
        },
        {
          id: 4,
          label: "Email",
          type: "email",
          placeholder: "user@email.com",
        },
        {
          id: 5,
          label: "Password",
          type: "password",
          placeholder: "Qwer1234",
        },
      ],
      aChecks: [],
    },

    {
      id: 2,
      title: "Shipping address",
      aFields: [
        { id: 21, label: "Country", type: "text", placeholder: "UK" },
        { id: 22, label: "City", type: "text", placeholder: "Mycity" },
        { id: 23, label: "Street", type: "text", placeholder: "Street1  272B" },
        { id: 24, label: "Postal code", type: "text", placeholder: "654321" },
      ],
      aChecks: [
        { id: 25, label: "Set Shipping address as default" },
        { id: 26, label: "Set Shipping Address as Billing Address" },
      ],
    },

    {
      id: 3,
      title: "Billing address",
      aFields: [
        { id: 31, label: "Country", type: "text", placeholder: "USA" },
        { id: 32, label: "City", type: "text", placeholder: "Newcity" },
        { id: 33, label: "Street", type: "text", placeholder: "Street2 ap76" },
        { id: 34, label: "Postal code", type: "text", placeholder: "111111" },
      ],
      aChecks: [{ id: 35, label: "Set Billing Address as default" }],
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
          <button className="register_btn">Create account</button>

          <p className="switch">
            Already have an account? <span className="green">Login</span>!
          </p>
        </form>
      </div>
    </div>
  );
};
