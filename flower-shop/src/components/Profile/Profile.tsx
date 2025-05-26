import "./profile.css";
import { CreateSection } from "./profileCreate.tsx";
import { aProfileSections } from "./profileData.ts";

export const Main = () => {
  return (
    <div>
      <div
        className="profile"
        style={{ backgroundImage: "url('img/bgroses33.png')" }}
      >
        <h2> User Profile Information</h2>
        <div className="profile__div">
          {aProfileSections.map((iSection) => (
            <CreateSection section={iSection} key={iSection.id} />
          ))}

          <button className="profile__submit-btn">Edit</button>
        </div>
      </div>
    </div>
  );
};
