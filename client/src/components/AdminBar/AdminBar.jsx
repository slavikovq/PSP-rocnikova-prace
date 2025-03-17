import logo from "../../assets/img/logo.png";
import edit from "../../assets/icons/edit.svg";
import editUser from "../../assets/icons/edit-user.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import home from "../../assets/icons/home.svg";
import plus from "../../assets/icons/plus.svg";
import userPfp from "../../assets/icons/user-yell.svg";
import leave from "../../assets/icons/leave.svg";
import heart from "../../assets/icons/heart.svg";
import owner from "../../assets/icons/owner.svg";
import "../../scss/AdminBar.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function AdminBar() {
  const { logout, user } = useAuth();

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

          {user.role === "admin" || user.role === "owner" ? (
            <>
              <Link to="/panel">
                <li className="button">
                  <img src={dashboard} alt="" />
                  <span>Dashboard</span>
                </li>
              </Link>
            </>
          ) : null}

          <Link to="/panel/edit-profile">
            <li className="button">
              <img src={editUser} alt="" />
              <span>Edit profile</span>
            </li>
          </Link>

          {user.role === "owner" ? (
            <>
              <Link to="/panel/add-admin">
            <li className="button">
              <img src={owner} alt="" />
              <span>Add administrators</span>
            </li>
          </Link>
            </>
          ) : null}


          <hr class="hr-text gradient" data-content="news" />

          <Link to="/panel/liked-posts">
            <li className="button">
              <img src={heart} alt="" />
              <span>Liked posts</span>
            </li>
          </Link>
          {user.role === "admin" || user.role === "owner"  ? (
            <>
              <Link to="/panel/add-post">
                <li className="button">
                  <img src={plus} alt="" />
                  <span>Add post</span>
                </li>
              </Link>
              <Link to="/panel/edit-post">
                <li className="button">
                  <img src={edit} alt="" />
                  <span>Edit post</span>
                </li>
              </Link>
            </>
          ) : null}
        </ul>
        <div className="user">
          <div>
            <img src={userPfp} alt="" id="user" />
          </div>
          <div>
            <p id="name">
              {user.firstName} {user.lastName}
            </p>
            <p id="email">{user.email}</p>
          </div>
          <Link to={"/"}>
            <img src={leave} alt="" id="leave" onClick={logout} />
          </Link>
        </div>
      </nav>
    </>
  );
}
