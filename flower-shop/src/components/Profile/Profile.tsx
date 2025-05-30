import "./profile.css";
import { CreateSection } from "./profileCreate.tsx";
import { profileSubmit} from "./profileSubmit.ts";
import { aSections } from "./profileData.ts";
import { IRegisterSection } from "../Register/registerTypes.ts";
import { Button } from "../UI/Button/Button.tsx";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export const Main = () => {
  const { isAuthenticated } = useAuth();

  const aProfileSections = aSections;
  const sCustomer = localStorage.getItem("customer");

  console.log('CreateSection - localstorage', sCustomer)

  if (sCustomer) {
    const oCustomer = JSON.parse(sCustomer);
    console.log(" oCustomer", oCustomer);

    aProfileSections.map((iSection) => {
      iSection.aFields.map((iField) => {
        // console.log('iField.name',iField.name)
        switch (iField.name) {
          case "name":
            iField.value = oCustomer.firstName;
            break;
          case "surname":
            iField.value = oCustomer.lastName;
            break;
          case "email":
            iField.value = oCustomer.email;
            break;
          case "password":
            iField.value = ""; //oCustomer.password;
            break;
          case "date":
            iField.value = oCustomer.dateOfBirth;
            break;
        }
      });
    });

  }

  return (
    <main className="profile__main">
      <div
        className="profile"
        style={{ backgroundImage: "url('img/bgroses33.png')" }}
      >
        <h2> User Profile Information</h2>

        {isAuthenticated ? (
          <form onSubmit={(e) => profileSubmit(e)}>
            <div className="profile__div">
              {aProfileSections.map((iSection: IRegisterSection) => (
                <CreateSection section={iSection} key={iSection.id} />
              ))}
              <Button type='submit' className="profile__submit-btn" >Save changes</Button>
            </div>
          </form>
        ) : (
          <>
            <p className="profile__inactive-txt">
              For authorized customers only
            </p>
            <p className="register__switch">
              Don't have an account?{" "}
              <Link to="/register" className="register__link">
                Register
              </Link>
            </p>
            <p className="register__switch">
              Already have an account?{" "}
              <Link to="/login" className="register__link">
                Login
              </Link>
            </p>
          </>
        )}
      </div>
    </main>
  );
};
