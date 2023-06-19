import App from "../App";
import cartoon from "../images/cartoon.jpg";
const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile-text">
        <span>Cartoon Network {props.profileData.name}</span>
      </div>
      <div className="profile-container">
        <img src={props.profileData.avatar} alt="" className="profile-img" />
        <div className="profile-main">
          <div className="text-main">
            <p>@cartoon network</p>
            <p>The official Twitter account for Cartoon Network.</p>
            <a href="#">Перевести раздел "O себе"</a>
            <p>Atlanta,GA</p>
            <p>Регистрация:Февраль 2009г</p>
            <h4 className="h4-text">386 читаемых</h4>
            <h4 className="h4-text">1,1млн читателей</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
