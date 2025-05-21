import { CreateSection } from "./loginCreate.tsx";
import { ILoginSection } from "./loginTypes.ts";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button.tsx";
import { useAuth } from "../contexts/AuthContext.tsx";
import { isValidForm } from "./loginValid.ts";
import "./login.css";

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

  const { login } = useAuth();
  const navigate = useNavigate();

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidForm()) {
      console.log("valid");
      // переход на главную страницу и замена логаут
      await login();
      navigate("/");
    }
  };

  return (
    <div className="login" style={{ backgroundImage: "url('img/back.png')" }}>
      <form onSubmit={loginSubmit}>
        {aSections.map((iSection) => (
          <CreateSection section={iSection} key={iSection.id} />
        ))}
        <Button type="submit">Login</Button>
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
