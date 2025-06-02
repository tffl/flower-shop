import { Link } from "react-router-dom";
import { Button } from "../components/UI/Button/Button";

export const PageNotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <div className="dummy" style={{ backgroundImage: "url('img/back.png')" }}>
        <Button className="register__submit-btn" >
          {
            <Link style={{ color: "var(--color-txt)" }} to="/">
              Back to home
            </Link>
          }
        </Button>
      </div>
    </div>
  );
};
