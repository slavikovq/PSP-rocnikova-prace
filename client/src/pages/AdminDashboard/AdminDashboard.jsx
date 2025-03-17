import AdminBar from "../../components/AdminBar/AdminBar"
import dashboardStyles from "../../scss/AdminDashboard.module.scss"

export default function AdminDashboard() {
  return (
    <>
      <div className={dashboardStyles.page}>
        <AdminBar />
        <div className={dashboardStyles.dashboard}>
          <h1>nejaky crazy analytics</h1>
        </div>
      </div>
    </>
  )
}
