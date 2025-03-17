import editStyles from "../../scss/EditProfile.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function PanelEditProfile() {
  const { user } = useAuth();

  return (
    <>
      <div className={editStyles.page}>
        <AdminBar />
        <div className={editStyles.edit}>
          <div className={editStyles.form}>
            <form>
              <div id={editStyles.names}>
                <div>
                  <span>First name</span>
                  <input
                    type="text"
                    placeholder={user.firstName}
                    id={editStyles.firstName}
                  />
                </div>
                <div>
                  <span>Last name</span>
                  <input
                    type="text"
                    placeholder={user.lastName}
                    id={editStyles.lastName}
                  />
                </div>
              </div>
              <div>
                <span>Email</span>
                <input
                  type="email"
                  placeholder={user.email}
                  id={editStyles.email}
                />
              </div>
              <div>
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Current password"
                  id={editStyles.password}
                />
              </div>
              <div>
              
                <input
                  type="password"
                  placeholder="New password"
                  id={editStyles.password}
                />
              </div>
              <div>
    
                <input
                  type="password"
                  placeholder="Confirm password"
                  id={editStyles.password}
                />
              </div>
              <button type="submit">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
