import { useSelector } from "react-redux"

const UserProfile = () => {
    const loginuser= useSelector(state => state.user.loginuser)

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <img src="https://picsum.photos/200" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h2 className="text-2xl font-semibold">{loginuser?.fullName }</h2>
                    <p className="text-sm text-gray-600">john.doe@example.com</p>
                </div> 
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <ul className="list-inside list-disc">
                        <li>First Name: John</li>
                        <li>Last Name: Doe</li>
                        <li>Date of Birth: 1990-01-01</li>
                    </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Account Information</h3>
                    <ul className="list-inside list-disc">
                        <li>Email: john.doe@example.com</li>
                        <li>Password: ********</li>
                        <li>Account Type: Premium</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
