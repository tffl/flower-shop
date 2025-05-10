import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/">Back to home</Link>
    </div>
  );
};
