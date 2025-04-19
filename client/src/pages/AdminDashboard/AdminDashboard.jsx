import AdminBar from "../../components/AdminBar/AdminBar";
import dashboardStyles from "../../scss/AdminDashboard.module.scss";
import { useAuth } from "../../context/AuthProvider";
import { getAllPosts } from "../../models/post";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../models/user";
import CountUp from "react-countup";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [postCount, setPostCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const load = async () => {
      const postsRes = await getAllPosts();
      const usersRes = await getAllUsers();

      if (postsRes?.status === 200 && Array.isArray(postsRes.payload)) {
        setPostCount(postsRes.payload.length);
      }

      if (usersRes?.status === 200 && Array.isArray(usersRes.payload)) {
        setUserCount(usersRes.payload.length);
      }
    };
    load();
  }, []);

  return (
    <div className={dashboardStyles.page}>
      <AdminBar />
      <div className={dashboardStyles.edit}>
        <div className={dashboardStyles.bg}>
          <div className={dashboardStyles.container}>
            <div className={dashboardStyles.greeting}>
              <h1>
                Welcome, {user.firstName} {user.lastName}! <br /> Time to conquer today’s challenges!
              </h1>
            </div>
            <div className={dashboardStyles.statistics}>
              <div className={dashboardStyles.statistic}>
                <h3>REGISTERED USERS</h3>
    
                <CountUp end={userCount} duration={2} separator="," className={dashboardStyles.countUp} />
              </div>
              <div className={dashboardStyles.statistic}>
                <h3>PUBLISHED POSTS</h3>
    
                <CountUp end={postCount} duration={2} separator="," className={dashboardStyles.countUp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
