import "./profile.css";
import { CreateSection } from "./profileCreate.tsx";
// import { registerSubmit } from "./registerSubmit";
//import { Link } from "react-router-dom";
import { aProfileSections } from "./profileData.ts";
//import { useNavigate } from "react-router-dom";
// //import { isValidForm } from "./registerValid.ts";
// import { registerSubmitButton } from "./registerSubmit";

export const Main = () => {
  // const greenColor = "#4a4e37";
  // const navigate = useNavigate();
  // //  const rSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  // const rSubmit = async () => {
  //   if (await registerSubmitButton()) {
  //     //  if (isValidForm(false)) {
  //     navigate("/");
  //   }
  // };
  return (
    <div>
      <div
        className="profile"
        style={{ backgroundImage: "url('img/bgroses33.png')" }}
      >
        <h2> User Profile Information</h2>
        {/* <form onSubmit={(e) => registerSubmit(e)}> */}
        <div className="profile__div">
          {aProfileSections.map((iSection) => (
            <CreateSection section={iSection} key={iSection.id} />
          ))}
          {/* <input type='submit'>Create account</input> */}
          {/* <button className="register_btn" onClick={(e) =>registerSubmitButton(e)}> */}

          {/* <div className="register__submit-txt">The form is filled correctly</div> */}
          {/* <div className="register__submit-txt"> */}
          {/* Not all form fields are filled in correctly */}
          {/* </div>
          <button
            className="register__submit-btn inactive"
            onClick={rSubmit} //(e) => registerSubmitButton(e)
          > */}
          <button className="profile__submit-btn">Edit</button>

          {/* <p className="register__switch-login">
            {/* Already have an account?{" "} */}
          {/* <span className="register__green">
              <Link to="/" style={{ color: greenColor }}>
                Home
              </Link>
            </span>
            !
          </p> */}
        </div>
        {/* </form>*/}
      </div>
    </div>
  );
};
