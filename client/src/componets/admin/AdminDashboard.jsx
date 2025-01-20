import { Chart } from "./dashboard/Chart"
import AdminHeader from "./AdminHeader"
import AdminLeftLayout from "./AdminLeftLayout"
import DashboardCart from "./dashboard/DashboardCart"

const AdminDashboard = () => {
  return (
    <>
      <AdminHeader />
      <div className="flex">
        <AdminLeftLayout />
        <div className="">

          <h1>Dashboard</h1>

          <div className="flex w-full gap-4 my-4">
            <DashboardCart />
            <DashboardCart />
            <DashboardCart />
            <DashboardCart />
          </div>

          <Chart />
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
