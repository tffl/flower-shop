import "./register.css";
import { CreateSection } from "./registerCreate.tsx";
import { IRegisterSection } from "./registerTypes";
import { registerSubmit } from "./registerSubmit";
import { Link } from "react-router-dom";

export const Main = () => {
  const aSections: IRegisterSection[] = [
    {
      id: 1,
      title: "Personal info",
      aFields: [
        { id: 1, name: "name", label: "Name", type: "text", placeholder: "N" },
        {
          id: 2,
          name: "surname",
          label: "Surname",
          type: "text",
          placeholder: "N",
        },
        {
          id: 3,
          name: "date",
          label: "Date of birth",
          type: "date",
          placeholder: "01.01.2000",
        },
        {
          id: 4,
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "user@email.com",
        },
        {
          id: 5,
          name: "password",
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
        {
          id: 21,
          name: "country",
          label: "Country",
          type: "text",
          placeholder: "UK",
        },
        {
          id: 22,
          name: "city",
          label: "City",
          type: "text",
          placeholder: "Mycity",
        },
        {
          id: 23,
          name: "street",
          label: "Street",
          type: "text",
          placeholder: "Street1  272B",
        },
        {
          id: 24,
          name: "postcode",
          label: "Postal code",
          type: "text",
          placeholder: "654321",
        },
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
        {
          id: 31,
          name: "country2",
          label: "Country",
          type: "text",
          placeholder: "USA",
        },
        {
          id: 32,
          name: "city2",
          label: "City",
          type: "text",
          placeholder: "Newcity",
        },
        {
          id: 33,
          name: "street2",
          label: "Street",
          type: "text",
          placeholder: "Street2 ap76",
        },
        {
          id: 34,
          name: "postcode2",
          label: "Postal code",
          type: "text",
          placeholder: "111111",
        },
      ],
      aChecks: [{ id: 35, label: "Set Billing Address as default" }],
    },
  ];
  const greenColor = "#4a4e37";
  return (
    <div>
      <div
        className="register"
        style={{ backgroundImage: "url('img/bgroses33.png')" }}
      >
        {/* <p className="switch-top">Login | <span className="green">Register</span></p> */}
        <form onSubmit = {(e) => registerSubmit(e)}>
        {aSections.map((iSection) => (
          <CreateSection section={iSection} key={iSection.id} />
        ))}
        {/* <input type='submit'>Create account</input> */}
        <button className="register_btn" onClick={registerSubmit}>
          Create account
        </button>

        <p className="register__switch-login">
          Already have an account?{" "}
          <span className="register__green">
            <Link to="/login" style={{ color: greenColor }}>
              Login
            </Link>
          </span>
          !
        </p>
        </form>
      </div>
    </div>
  );
};
