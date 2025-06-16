import "./register.css";
import { CreateSection } from "./registerCreate.tsx";
import { registerSubmit } from "./registerSubmit";
import { Link } from "react-router-dom";
import { aSections } from "./registerData.ts";
import { useNavigate } from "react-router-dom";
import { registerSubmitButton } from "./registerSubmit";
import { Button } from "../UI/Button/Button.tsx";
import { useAuth } from "../contexts/AuthContext.tsx";

export const Main = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const rSubmit = async () => {
    if (await registerSubmitButton()) {
      await login();
      navigate("/");
    }
  };
  return (
    <div>
      <div
        className="register"
        style={{ backgroundImage: "url('img/bgroses23.png')" }}
      >
        <form onSubmit={(e) => registerSubmit(e)}>
          {aSections.map((iSection) => (
            <CreateSection section={iSection} key={iSection.id} />
          ))}

          <div className="register__submit-txt"></div>
          <Button className="register__submit-btn" onClick={rSubmit}>
            Create account
          </Button>

          <p className="register__switch">
            Already have an account?{" "}
            <Link to="/login" className="register__link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
