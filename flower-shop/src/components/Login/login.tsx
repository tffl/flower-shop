import "./login.css";
import { CreateSection } from "./loginCreate.tsx";
import { ILoginSection } from "./loginTypes.ts";
import { Link } from "react-router-dom";

export const Main = () => {
  const aSections: ILoginSection[] = [
 {
      id: 1,
      title: "Login",
      aFields: [
        {
          id: 1,
          name: "email",
          label: "Email*",
          type: "email",
          placeholder: "user@email.com",
        },
        {
          id: 2,
          name: "password",
          label: "Password*",
          type: "password",
          placeholder: "password",
        },
      ],
      aChecks: [],
    },
  ];

  return (
    <div className="login" style={{ backgroundImage: "url('img/back.png')" }}>
      <form>
        {aSections.map((iSection) => (
          <CreateSection section={iSection} key={iSection.id} />
        ))}
        <button className="button">Login</button>
      <p className="switch-bottom">
        Don't have an account?{" "}
        <Link to="/register" className="green">
          Register
        </Link>
      </p>
      </form>
    </div>
  );
};