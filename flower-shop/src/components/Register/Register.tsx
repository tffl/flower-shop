import "./register.css";
import { CreateSection } from "./registerCreate.tsx";
import { registerSubmit } from "./registerSubmit";
import { Link } from "react-router-dom";
import { aSections } from "./registerData.ts";
import { useNavigate } from "react-router-dom";
import { registerSubmitButton } from "./registerSubmit";

export const Main = () => {
  const greenColor = "#4a4e37";
  const navigate = useNavigate();
  const rSubmit = async () => {
    if (await registerSubmitButton()) {
      navigate("/");
    }
  };
  return (
    <div>
      <div
        className="register"
        style={{ backgroundImage: "url('img/bgroses33.png')" }}
      >
        <form onSubmit={(e) => registerSubmit(e)}>
          {aSections.map((iSection) => (
            <CreateSection section={iSection} key={iSection.id} />
          ))}

          <div className="register__submit-txt"></div>
          <button className="register__submit-btn inactive" onClick={rSubmit}>
            Create account
          </button>

          <p className="register__switch">
            Already have an account?{" "}
            <span className="register__link">
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
