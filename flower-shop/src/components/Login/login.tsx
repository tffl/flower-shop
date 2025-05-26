import { CreateSection } from "./loginCreate.tsx";
import { ILoginSection } from "./loginTypes.ts";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button.tsx";
import { useAuth } from "../contexts/AuthContext.tsx";
//import { isValidForm } from "./loginValid.ts";
import { showResult } from "../Register/registerSubmit.ts";
import { takeToken } from "../Register/registerSubmit.ts";
import { ILogin } from "./loginTypes.ts";

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

    let nameLogin = await newLogin()
    if (nameLogin !== null) {
      showResult(`Welcome ${nameLogin}`, true);
      await login();
      navigate("/");
    } else {
      showResult("Invalid credentials", false);
    }

    // }

    // if (isValidForm()) {
    //   //console.log("valid");
    //   // переход на главную страницу и замена логаут
    //   await login();
    //   navigate("/");
    // }
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
          <Link to="/register" className="register__link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

//.......................................................................
async function newLogin(): Promise<string | null> {
  const urlApi =
    "https://api.europe-west1.gcp.commercetools.com/flower-shop2025/login";

  //     {
  //   "email" : "johndoe@example.com",
  //   "password" : "secret123",
  //   "anonymousCart" : {
  //     "id" : "{{cart-id}}",
  //     "typeId" : "cart"
  //   }
  // }

  const token = await takeToken();
  if (token === null) return null;
  else {
    const oLogin: ILogin = {
      email: "",
      password: "",
    };

    let pInput = document.querySelector(
      `.input-wrapper input[name="email"]`,
    ) as HTMLInputElement;
    oLogin.email = pInput.value;

    pInput = document.querySelector(
      `.input-wrapper input[name="password"]`,
    ) as HTMLInputElement;
    oLogin.password = pInput.value;

    console.log("newLogin>>>", oLogin);
    const response = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(oLogin),
    });

    console.log("newLogin <<<< await", response);

    if (response.status === 200) {
      //if (true)
      const data = await response.json();
      console.log(data);
      //const oCustomer1: ICustomer = await response.json();
      console.log("Login successful", data);
      console.log("Welcome", data.customer.firstName);
      return data.customer.firstName;
    } else {
      console.log("newLogin - error", response.status);

      return null;
    }
  }
}

// function isValidForm() {
//   let flValid = true;
// //  console.log("isValidForm");
//   return flValid;
// }
