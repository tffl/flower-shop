import "./profile.css";
import { CreateSection } from "./profileCreate.tsx";
import { profileSubmit } from "./profileSubmit.ts";
import { aSections } from "./profileData.ts";
import { IRegisterSection } from "../Register/registerTypes.ts";
import { Button } from "../UI/Button/Button.tsx";

export const Main = () => {
  const aProfileSections = aSections;
  const sCustomer = localStorage.getItem("customer");

  // console.log('CreateSection - localstorage', sCustomer)
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
            iField.value = oCustomer.password;
            break;
          case "date":
            iField.value = oCustomer.dateOfBirth;
            break;
        }
        // console.log('iField.value',iField.value)
      });
    });

    console.log(aProfileSections);
  } else {
  }
  // console.log('CreateSection - localstorage - object', oCustomer)
  //

  // aProfileSections.map((iSection: IRegisterSection) => (
  //             {iSection}
  //           ))

  return (
    <main className="profile__main">
      <div
        className="profile"
        style={{ backgroundImage: "url('img/bgroses33.png')" }}
      >
        <h2> User Profile Information</h2>
        <form onSubmit={(e) => profileSubmit(e)}>
          <div className="profile__div">
            {aProfileSections.map((iSection: IRegisterSection) => (
              <CreateSection section={iSection} key={iSection.id} />
            ))}
            <Button className="profile__submit-btn">Save changes</Button>
          </div>
        </form>
      </div>
    </main>
  );
};
