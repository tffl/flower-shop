import "./login.css";
import { CreateSection } from "./loginCreate.tsx";
import { ILoginSection } from "./types";

export const Main = () => {
  const aSections: ILoginSection[] = [
    {
      id: 1,
      title: "Login",
      aFields: [
        { id: 1, type: "email", placeholder: "email" },
        { id: 2, type: "password", placeholder: "password" },
      ],
    },
  ];

  return (
      <div
        className="login"
        style={{ backgroundImage: "url('img/back.png')" }}>
        <form>
          {aSections.map((iSection) => (
            <CreateSection section={iSection} key={iSection.id} />
          ))}
          <button className="button">Login</button>
          <p className="switch-bottom">
            Don't have an account? <span className="green">Register</span>
          </p>
        </form>
      </div>
  );
};