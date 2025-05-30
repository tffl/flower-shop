import { CreateSection } from "./loginCreate.tsx";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button.tsx";
import { useAuth } from "../contexts/AuthContext.tsx";
import { showResult } from "../Register/registerSubmit.ts";
import { takeToken } from "../Register/registerSubmit.ts";
import { ILogin } from "./loginTypes.ts";
import { IRegisterSection } from "../Register/registerTypes";
import { validField } from "../Register/registerValid";
import "./login.css";

export const Main = () => {
  const aSections: IRegisterSection[] = [
    {
      id: 101,
      title: "",
      aFields: [
        {
          id: 1,
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "",
          value: "",
        },
        {
          id: 102,
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "",
          value: "",
        },
      ],
      aChecks: [],
    },
  ];

  const { login } = useAuth();
  const navigate = useNavigate();

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let flValid = true;
    let sError = "";

    aSections.map((iSection) => {
      iSection.aFields.map((iInput) => {
        sError = "";
        const pInput = document.querySelector(
          `.login input[name="${iInput.name}"]`,
        ) as HTMLInputElement;

        if (pInput) {
          sError = validField(pInput.value, iInput.name);
          if (sError) flValid = false;
          if (pInput.nextElementSibling)
            pInput.nextElementSibling.textContent = sError;
        }
      });
    });

    if (flValid) {
      let nameLogin = await newLogin();
      if (nameLogin !== null) {
        showResult(`Welcome ${nameLogin}`, true);
        await login();
        navigate("/");
      } else {
        showResult(
          "Customer account with this credentials not found. Try again.",
          false,
        );
      }
    }
  };

  return (
    <main className="login__main">
      <div className="login" style={{ backgroundImage: "url('img/back.png')" }}>
        <form onSubmit={loginSubmit}>
          {aSections.map((iSection) => (
            <CreateSection section={iSection} key={iSection.id} />
          ))}
          <Button type="submit" className="register__submit-btn">
            Login
          </Button>
          <p className="register__switch">
            Don't have an account?{" "}
            <Link to="/register" className="register__link">
              Register
            </Link>
          </p>
        </form>
      </div>
    </main>
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
      `.login input[name="email"]`,
    ) as HTMLInputElement;
    oLogin.email = pInput.value;

    pInput = document.querySelector(
      `.login input[name="password"]`,
    ) as HTMLInputElement;
    oLogin.password = pInput.value;

    //console.log("newLogin>>>", oLogin);
    const response = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(oLogin),
    });

    //console.log("newLogin <<<< await", response);

    if (response.status === 200) {
      //if (true)
      const dataCustomer = await response.json();

      // console.log("Login successful", dataCustomer);
      // console.log("Welcome", dataCustomer.customer.firstName);

      const sCustomer = JSON.stringify(dataCustomer.customer);

      console.log(sCustomer);
      localStorage.setItem("customer", sCustomer);

      return dataCustomer.customer.firstName;
    } else {
      console.log("newLogin - error", response.status);

      return null;
    }
  }
}
