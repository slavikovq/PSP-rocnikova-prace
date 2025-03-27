import AdminBar from "../../components/AdminBar/AdminBar";
import ownerStyles from "../../scss/OwnerAddAdmin.module.scss";
import { useAuth } from "../../context/AuthProvider";

export default function OwnerAddAdmin() {
  const { user } = useAuth();
  return (
    <>
      <div className={ownerStyles.page}>
        <AdminBar />
        <div className={ownerStyles.addAdmin}>
          <form>
            <div id={ownerStyles.names}>
              <div>
                <span>Assign administrator role</span>
                <input
                  type="text"
                  placeholder="Enter administrators email..."
                  id={ownerStyles.password}
                />
              </div>
              <div>
                <span>Password</span>
                <input
                  type="text"
                  placeholder="Enter your password..."
                  id={ownerStyles.password}
                />
              </div>
              <button type="submit">Add administrator</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
