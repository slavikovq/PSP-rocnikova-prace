import AdminBar from "../../components/AdminBar/AdminBar";
import administratorsStyles from "../../scss/Administrators.module.scss";
import { useAuth } from "../../context/AuthProvider";

export default function Administrators() {
  const { user } = useAuth();
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
                    />
                  </div>
                  <div id={administratorsStyles.emailD}>
                    <input
                      type="email"
                      placeholder="Enter your password..."
                      id={administratorsStyles.email}
                      name="email"
                    />
                  </div>
                </form>
                <div id={administratorsStyles.buttons}>
                  <div>

                    <button id={administratorsStyles.assign}>
                      Assign administrator role
                    </button>
                  </div>
                  <div>
                    <button id={administratorsStyles.remove}>
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
