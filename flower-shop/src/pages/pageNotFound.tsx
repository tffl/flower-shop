import { Link } from "react-router-dom";
import { Button } from "../components/UI/Button/Button";

export const PageNotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      {/* <Link to="/">Back to home</Link> */}
      <Button style={{ width: "350px" }}>
        {
          <Link style={{ color: "var(--color-txt)" }} to="/">
            Back to home
          </Link>
        }
      </Button>
    </div>
  );
};
