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
import panelStyles from "../../scss/AdminBar.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function AdminBar() {
  const { logout, user } = useAuth();

  return (
    <>
      <nav className={panelStyles.sidebar}>
        <div>
          <Link to={"/"}>
            <img src={logo} alt="" id={panelStyles.logo} />
          </Link>
        </div>
        <hr className={panelStyles.hrLine} />
        <ul>
          <Link to="/">
            <li className={panelStyles.button}>
              <img src={home} alt="" />
              <span>Home</span>
            </li>
          </Link>

          {user.role === "admin" || user.role === "owner" ? (
            <>
              <Link to="/panel">
                <li className={panelStyles.button}>
                  <img src={dashboard} alt="" />
                  <span>Dashboard</span>
                </li>
              </Link>
            </>
          ) : null}

          <Link to="/panel/edit-profile">
            <li className={panelStyles.button}>
              <img src={editUser} alt="" />
              <span>Edit profile</span>
            </li>
          </Link>

          {user.role === "owner" ? (
            <>
              <Link to="/panel/administrators">
                <li className={panelStyles.button}>
                  <img src={owner} alt="" />
                  <span>Administrators</span>
                </li>
              </Link>
            </>
          ) : null}

          <hr className={panelStyles.hrText} data-content="news" />

          <Link to="/panel/liked-posts">
            <li className={panelStyles.button}>
              <img src={heart} alt="" />
              <span>Liked posts</span>
            </li>
          </Link>
          {user.role === "admin" || user.role === "owner" ? (
            <>
              <Link to="/panel/add-post">
                <li className={panelStyles.button}>
                  <img src={plus} alt="" />
                  <span>Add post</span>
                </li>
              </Link>
              <Link to="/panel/post-list">
                <li className={panelStyles.button}>
                  <img src={edit} alt="" />
                  <span>Edit post</span>
                </li>
              </Link>
            </>
          ) : null}
        </ul>
        <div className={panelStyles.user}>
            <div>
              <img src={userPfp} alt="" id={panelStyles.user} />
            </div>
            <div>
              <p id={panelStyles.name}>
                {user.firstName} {user.lastName}
              </p>
              <p id={panelStyles.email}>{user.email}</p>
            </div>


          <div>
            <Link to={"/"}>
              <img src={leave} alt="" id={panelStyles.leave} onClick={logout} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}