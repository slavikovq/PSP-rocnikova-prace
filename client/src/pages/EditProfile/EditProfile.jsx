import editStyles from "../../scss/EditProfile.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import { editUser, verifyUserPassword } from "../../models/user";
import { alert } from "../../function/sweetalert";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs";

export default function PanelEditProfile() {
  const { user, fetchUser } = useAuth();
  const [formData, setFormData] = useState();

  const sendData = async () => {
    const res = await editUser(user._id, formData);
    if (res.status === 200) {
      await fetchUser();
      alert("success", "Your profile was updated!");
    }
  };

  const handleInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  };

  const handleEditPassword = async () => {
    const { value } = await Swal.fire({
      title: "Edit Password",
      html: `
            <div>
              <p style="margin-left: -190px; margin-bottom: -15px; margin-top: 20px">Enter your current password</p>
              <input type="password" id="passwordC-input" class="swal2-input" style="width: 440px; margin-left: 2px">
    
              <p style="margin-left: -220px; margin-bottom: -15px; margin-top: 20px">Enter your new password</p>
              <input type="password" id="passwordN-input" class="swal2-input" style="width: 440px; margin-left: 2px">

              <p style="margin-left: -170px; margin-bottom: -15px; margin-top: 20px">Enter your new password again</p>
              <input type="password" id="passwordNA-input" class="swal2-input" style="width: 440px; margin-left: 2px">
            </div>
       `,
      confirmButtonText: "Save",
      confirmButtonColor: "#cfab4e",
      showCancelButton: true,
      color: "white",
      background: "#0E0C13",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#cfab4e",
      preConfirm: () => {
        const oldPasssword = document.getElementById("passwordC-input").value;
        const newPassword = document.getElementById("passwordN-input").value;
        const newPasswordA = document.getElementById("passwordNA-input").value;
        if (!oldPasssword || !newPassword) {
          Swal.showValidationMessage("Inputs cannot be empty!");
          return false;
        }

        if (oldPasssword === newPassword) {
          Swal.showValidationMessage(
            "Old password is the same as new password!"
          );
          return false;
        }
        if (newPassword !== newPasswordA) {
          Swal.showValidationMessage("Passwords do not match!");
          return false;
        }

        return { oldPasssword, newPassword };
      },
    });
    if (value) {
      const res = await verifyUserPassword(value.oldPasssword);

      if (res.status !== 200) {
        return alert("error", "Password is incorrect!");
      }

      const hashedPassword = await bcrypt.hash(value.newPassword, 10);

      const resp = await editUser(user._id, { password: hashedPassword });
      if (resp.status === 200) {
        await fetchUser();
        alert("success", "Your password was updated!");
      }
    }
  };

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
            </form>
            <div>
              <p>Password</p>
              <button id={editStyles.passwordB} onClick={handleEditPassword}>
                {" "}
                Change Password
              </button>
            </div>
            <div id={editStyles.Bposition}>
              <button id={editStyles.save} type="submit" onClick={handleButton}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
