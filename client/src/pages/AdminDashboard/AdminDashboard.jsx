import AdminBar from "../../components/AdminBar/AdminBar";
import dashboardStyles from "../../scss/AdminDashboard.module.scss";
import { useAuth } from "../../context/AuthProvider";

export default function AdminDashboard() {
  const { user } = useAuth();
  return (
    <>
      <div className={dashboardStyles.page}>
        <AdminBar />
        <div className={dashboardStyles.edit}>
          <div className={dashboardStyles.bg}>
            <div className={dashboardStyles.container}>
              <div className={dashboardStyles.greeting}>
                <h1>
                  Welcome, {user.firstName} {user.lastName}! <br /> Time to
                  conquer today’s challenges!
                </h1>
              </div>
              <div className={dashboardStyles.statistics}>
                <div className={dashboardStyles.statistic}>
                  <h3>REGISTERED USERS</h3>
                  <p>58</p>
                </div>
                <div className={dashboardStyles.statistic}>
                  <h3>PUBLISHED POSTS</h3>
                  <p>63</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
