import AdminHeader from './AdminHeader'
import AdminLeftLayout from './AdminLeftLayout'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    
    return (
        <>
            <AdminHeader />
            <AdminLeftLayout />
            <Outlet />
        </>
    )
}

export default AdminLayout
