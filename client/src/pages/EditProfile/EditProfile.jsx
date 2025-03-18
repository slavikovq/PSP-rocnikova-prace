import editStyles from "../../scss/EditProfile.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import { editUser } from "../../models/user";
import { alert } from "../../function/sweetalert"

export default function PanelEditProfile() {
  const { user, fetchUser } = useAuth();
  const [formData, setFormData] = useState();

  const sendData = async () => {
    const res = await editUser(user._id, formData);
    if(res.status === 200){
      await fetchUser()
      alert("success", "Your profile was updated!")
    }
  };

  const handleInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleButton = (e) => {
    e.preventDefault()
    sendData()
  }

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
                    defaultValue={user.firstName}
                    id={editStyles.firstName}
                    name="firstName"
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <span>Last name</span>
                  <input
                    type="text"
                    defaultValue={user.lastName}
                    id={editStyles.lastName}
                    name="lastName"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div>
                <span>Email</span>
                <input
                  type="email"
                  defaultValue={user.email}
                  id={editStyles.email}
                  name="email"
                  onChange={handleInput}
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
              <button type="submit" onClick={handleButton}>Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
