import "./Navbar.css";
// import { IoSettingsOutline } from "react-icons/io5";
import Searchbar from "../searchbar/Searchbar"

function Navbar() {
  return (
    <div className="mainContainer">
      <div className="searchContainer">
        <div>
          <img id="settingIcon" src="https://cdn-icons-png.flaticon.com/512/126/126472.png" alt="settings" />
        </div>
        <Searchbar/>
      </div>
      <div className="logoContainer">
        <h2 id="mainHeader">الرئيسية</h2>
        <img id="policelogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Egyptian_Police_Emblem.svg/1200px-Egyptian_Police_Emblem.svg.png" alt=""/>
        <hr id="vertical"></hr>
        <img id="healthlogo" src="https://seeklogo.com/images/M/ministry-of-health-logo-0CA2CAD942-seeklogo.com.png" alt=""/>
      </div>
    </div>
  );
}

export default Navbar;
