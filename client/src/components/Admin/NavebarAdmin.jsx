
import { Link } from "react-router-dom"

const NavebarAdmin = () => {
    return (
        <>
            {/* <div className="w-1/4 bg-[#f1f1f1] h-[100vh] flex flex-col justify-between "> */}

            <div className="w-1/6 bg-[#f1f1f1] h-[100vh] flex flex-col justify-between ">

                <div className="flex flex-col gap-5 p-4 font-bold ">
                    <button className="hover:bg-[#070808] hover:text-white  p-2 rounded"><Link to={'admin-dashboard'}>Dashboard</Link></button>
                    <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
                        <Link to={'admin-product'}>Products</Link>
                    </button>
                    <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
                        <Link>Favorites</Link>
                    </button>

                    <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">

                        <Link>Inbox</Link>
                    </button>

                    <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
                        <Link>Order Lists</Link>

                    </button>
                    <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">

                        <Link to={'/product-stock'}>Product Stock</Link>
                    </button>
                </div>

                <hr />

                <div className="flex flex-col gap-5 p-4 m-4 font-bold ">
                    <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
                        Settings
                    </button>
                    <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
                        <Link>Logout</Link>
                    </button>
                </div>
            </div>

        </>
    )
}

export default NavebarAdmin
