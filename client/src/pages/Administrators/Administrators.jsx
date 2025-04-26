import AdminBar from "../../components/AdminBar/AdminBar";
import administratorsStyles from "../../scss/Administrators.module.scss";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import { alert } from "../../function/sweetalert";
import {
  editUser,
  getUserByEmail,
  verifyUserPassword,
} from "../../models/user";

export default function Administrators() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({});

  const checkInputs = async (userData) => {
    if (!formData.password || !formData.email)
      throw new Error("Inputs cannot be empty!");
  
    const res = await verifyUserPassword(formData.password);
    if (res.status !== 200) throw new Error("Incorrect password!");
  
    if (userData.status === 404)
      throw new Error("User with this email does not exist!");
  
    if (user.email === formData.email)
      throw new Error("You cannot edit your privileges!");
  };
  
  const assignAdministrator = async () => {
    try {
      const userData = await getUserByEmail(formData.email);
      await checkInputs(userData);
  
      if (userData.payload.role === "admin")
        return alert("error", "User is already an administrator!");
  
      await editUser(userData.payload._id, { role: "admin" });
      alert("success", "Administrator role is successfully assigned!");
    } catch (error) {
      alert("error", error.message);
    }
  };
  
  const removeAdministrator = async () => {
    try {
      const userData = await getUserByEmail(formData.email);
      await checkInputs(userData);
  
      if (userData.payload.role === "user")
        return alert("error", "User does not have any privileges!");
  
      await editUser(userData.payload._id, { role: "user" });
      alert("success", "Administrator role is successfully removed!");
    } catch (error) {
      alert("error", error.message);
    }
  };

  const handleInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className={administratorsStyles.page}>
        <AdminBar />
        <div className={administratorsStyles.edit}>
          <div className={administratorsStyles.bg}>
            <div className={administratorsStyles.form}>
              <div>
                <form>
                  <div id={administratorsStyles.emailD}>
                    <input
                      type="email"
                      placeholder="Enter users email..."
                      id={administratorsStyles.email}
                      name="email"
                      onChange={handleInput}
                    />
                  </div>
                  <div id={administratorsStyles.emailD}>
                    <input
                      type="password"
                      placeholder="Enter your password..."
                      id={administratorsStyles.email}
                      name="password"
                      onChange={handleInput}
                    />
                  </div>
                </form>
                <div id={administratorsStyles.buttons}>
                  <div>
                    <button
                      type="submit"
                      onClick={assignAdministrator}
                      id={administratorsStyles.assign}
                    >
                      Assign administrator role
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      onClick={removeAdministrator}
                      id={administratorsStyles.remove}
                    >
                      Remove administrator role
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
