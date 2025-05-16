import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <div className="dummy" style={{ backgroundImage: "url('img/back.png')" }}>
      <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};
