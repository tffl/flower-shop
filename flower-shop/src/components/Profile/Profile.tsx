import "./profile.css";
import { CreateSection, CreateSectionAddress } from "./profileCreate.tsx";
import {
  profileSubmit,
  profilePassSubmit,
  profileAddrSubmit,
} from "./profileSubmit.tsx";
import { aProfileSections, aProfilePassSections } from "./profileData.ts";
import { IRegisterSection } from "../Register/registerTypes.ts";
import { Button } from "../UI/Button/Button.tsx";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { profileNewAddress } from "./profileSubmit";
import { iSectionAddress } from "./profileTypes.ts";

export const Main = () => {
  const { isAuthenticated } = useAuth();

  //const aProfileSections = aSections;
  const sCustomer = localStorage.getItem("customer");

  //console.log("CreateSection - localstorage", sCustomer);

  const aProfileAddrSections = [
    {
      id: 2,
      title: "Addresses",
      addresses: [
        {
          id: "111111",
          aFields: [
            {
              id: 21,
              name: "country",
              label: "Country",
              type: "text",
              placeholder: "US",
              value: "",
            },
            {
              id: 22,
              name: "city",
              label: "City",
              type: "text",
              placeholder: "Mycity",
              value: "",
            },
            {
              id: 23,
              name: "street",
              label: "Street",
              type: "text",
              placeholder: "Street1  272B",
              value: "",
            },
            {
              id: 24,
              name: "postcode",
              label: "Postal code",
              type: "text",
              placeholder: "654321",
              value: "",
            },
          ],
        },

        // aChecks: [
        //   { id: 25, label: "Set Shipping address as default" },
        //   { id: 26, label: "Set Shipping Address as Billing Address" },
        // ],
      ],
    },
  ];

  if (sCustomer) {
    const oCustomer = JSON.parse(sCustomer);
    //console.log(" oCustomer", oCustomer);

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
          case "currentPassword":
            iField.value = ""; //oCustomer.password;
            break;
          case "newPassword":
            iField.value = ""; //oCustomer.password;
            break;
          case "date":
            iField.value = oCustomer.dateOfBirth;
            break;
        }
      });
    });

    const qAddresses = oCustomer.addresses.length;
    //console.log("qAddresses", qAddresses);

    for (let i = 1; i < qAddresses; i++) {
      if (aProfileAddrSections[0] && aProfileAddrSections[0].addresses[0])
        // aProfileAddrSections[0].addresses[i] = Object.assign({}, aProfileAddrSections[0].addresses[0])
        aProfileAddrSections[0].addresses[i] = JSON.parse(
          JSON.stringify(aProfileAddrSections[0].addresses[0]),
        );
      // const newAddr = JSON.parse(JSON.stringify(oldAddress));

      // const newAddr = Object.assign({}, oldAddress);
      //  aProfileAddrSections.map((iSection) =>{
      // console.log('i>>',i)
      // if(iSection.addresses[0]) iSection.addresses.push(iSection.addresses[0])}
      // )
    }

    aProfileAddrSections.map((iSection) => {
      iSection.addresses.forEach((iAddress, i) => {
        iAddress.id = oCustomer.addresses[i].id;

        iAddress.aFields.map((iField) => {
          switch (iField.name) {
            case "country":
              iField.value = oCustomer.addresses[i].country;
              break;
            case "city":
              iField.value = oCustomer.addresses[i].city;
              break;
            case "street":
              iField.value = oCustomer.addresses[i].streetName;
              break;
            case "postcode":
              iField.value = oCustomer.addresses[i].postalCode;
              break;
          }
        });
      });
    });
  }

  return (
    <main className="profile__main">
      <div
        className="profile"
        style={{ backgroundImage: "url('img/bgroses33.png')" }}
      >
        <h2 className="profile-title"> User Profile Information</h2>

        {isAuthenticated ? (
          <>
            <form onSubmit={(e) => profileSubmit(e)}>
              <div className="profile__div">
                {aProfileSections.map((iSection: IRegisterSection) => (
                  <CreateSection section={iSection} key={iSection.id} />
                ))}
                <p className="profile__message"></p>
                <Button type="submit" className="profile__submit-btn">
                  Save changes
                </Button>
              </div>
            </form>

            <form onSubmit={(e) => profilePassSubmit(e)}>
              <div className="profile__div">
                {aProfilePassSections.map((iSection: IRegisterSection) => (
                  <CreateSection section={iSection} key={iSection.id} />
                ))}
                <p className="profile__message-password"></p>
                <Button type="submit" className="profile__submit-btn">
                  Save new password
                </Button>
              </div>
            </form>

            <form onSubmit={(e) => profileAddrSubmit(e)}>
              <div className="profile__div">
                {aProfileAddrSections.map((iSection: iSectionAddress) => (
                  <CreateSectionAddress section={iSection} key={iSection.id} />
                ))}
                <p className="profile__message-address"></p>
                <Button type="submit" className="profile__submit-btn">
                  Update addresses data
                </Button>

                <Button
                  className="profile__submit-btn"
                  onClick={profileNewAddress}
                >
                  Add new address
                </Button>
              </div>
            </form>
          </>
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
