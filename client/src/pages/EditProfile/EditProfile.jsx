import editStyles from "../../scss/EditProfile.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import { deleteUser, editUser, verifyUserPassword } from "../../models/user";
import { alert } from "../../function/sweetalert";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs";

export default function PanelEditProfile() {
  const { user, fetchUser, logout } = useAuth();
  const [formData, setFormData] = useState();

  const sendData = async () => {
    if (formData.email) {
      const regex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (!regex.test(formData.email)) {
        alert("error", "Incorrect email format!");
        return;
      }
    }

    if(!formData.email || formData.email === null || formData.email === ""){
     return alert("error", "Email cannot be empty!")
    }
 
    const res = await editUser(user._id, formData);

    if (res.status === 500) return alert("error", "This email is already in use!");

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
      customClass: {
        confirmButton: editStyles.swalButton,
        cancelButton: editStyles.swalButton,
      },
      

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

  const handleDeleteUser = async () => {
    if (user.role === "owner") {
      return alert("error", "Owners cannot delete their account!");
    } 

    const { value } = await Swal.fire({
      title: "Delete your account",
      html: `
            <div>
              <p style="margin-left: -260px; margin-bottom: -15px; margin-top: 20px">Enter your password</p>
              <input type="password" id="password-input" class="swal2-input" style="width: 440px; margin-left: 2px">
            </div>
       `,
      confirmButtonText: "Delete",
      confirmButtonColor: "#cfab4e",
      showCancelButton: true,
      color: "white",
      background: "#0E0C13",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#cfab4e",
      customClass: {
        confirmButton: editStyles.swalButton,
        cancelButton: editStyles.swalButton,
      },
      

      preConfirm: () => {
        const password = document.getElementById("password-input").value;

        if (!password) {
          Swal.showValidationMessage("Password input cannot be empty!");
          return false;
        }

        return { password };
      },
    });

    if (value) {
      const res = await verifyUserPassword(value.password);

      if (res.status !== 200) {
        return alert("error", "Password is incorrect!");
      }

      alert("info", "Your account was deleted!");

      await deleteUser(user._id);
      await logout();
    }
  };

  return (
    <>
      <div className={editStyles.page}>
        <AdminBar />
        <div className={editStyles.edit}>
          <div className={editStyles.bg}>
            <div className={editStyles.form}>
              <div>
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
                  <div id={editStyles.emailD}>
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
                <div></div>
                <div id={editStyles.buttons}>
                  <div>
                    <p>Password</p>
                    <button
                      id={editStyles.passwordB}
                      onClick={handleEditPassword}
                    >
                      Change Password
                    </button>
                  </div>
                  <div>
                    <p>Delete Account</p>
                    <button
                      type="submit"
                      onClick={handleDeleteUser}
                      id={editStyles.delete}
                    >
                      Delete account
                    </button>
                  </div>
                </div>

                <div id={editStyles.Bposition}>
                  <button
                    id={editStyles.save}
                    type="submit"
                    onClick={handleButton}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
