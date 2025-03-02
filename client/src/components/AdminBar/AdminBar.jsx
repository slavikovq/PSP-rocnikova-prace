import logo from "../../assets/img/logo.png";
import edit from "../../assets/icons/edit.svg";
import editUser from "../../assets/icons/edit-user.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import home from "../../assets/icons/home.svg";
import plus from "../../assets/icons/plus.svg";
import user from "../../assets/icons/user-yell.svg";
import leave from "../../assets/icons/leave.svg";
import "../../scss/AdminBar.scss";
import { Link } from "react-router-dom";

export default function AdminBar() {
  return (
    <>
      <nav className="sidebar">
        <div>
          <img src={logo} alt="" id="logo" />
        </div>
        <hr class="hr-line gradient" />
        <ul>
          <Link to="/">
            <li className="button">
              <img src={home} alt="" />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/">
            <li className="button">
              <img src={dashboard} alt="" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/">
            <li className="button">
              <img src={editUser} alt="" />
              <span>Edit profile</span>
            </li>
          </Link>

          <hr class="hr-text gradient" data-content="news" />

          <Link to="/">
            <li className="button">
              <img src={plus} alt="" />
              <span>Add post</span>
            </li>
          </Link>
          <Link to="/">
            <li className="button">
              <img src={edit} alt="" />
              <span>Edit post</span>
            </li>
          </Link>
        </ul>
        <div className="user">
          <div>
            <img src={user} alt="" id="user" />
          </div>
          <div>
            <p id="name">Jmeno Prijmeni</p>
            <p>emailova@adresa.cz</p>
          </div>
          <Link to={"/"}>
            <img src={leave} alt="" id="leave" />
          </Link>
        </div>
      </nav>
    </>
  );
}
