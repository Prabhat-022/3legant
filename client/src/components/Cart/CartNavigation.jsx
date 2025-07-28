import { NavLink } from "react-router-dom"

const CartNavigation = () => {


    return (
        <>

            <div className="flex justify-center items-center">
                <div className="flex gap-2 m-2 items-center justify-center">

                    <div className="flex gap-2 m-2 items-center justify-center" >
                        <div className="bg-black text-white rounded-full w-[25px] h-[25px] flex items-center justify-center ">
                            <h1 className="">1</h1>

                        </div>
                        <NavLink to={'/cart'} className={({ isActive }) => isActive ? "text-black border-b-[2px] border-green-500" : "text-gray-500"}>Shopping Cart</NavLink>
                    </div>
                </div>

                {/* <div className="flex gap-2 m-2 items-center justify-center"> */}
                <div className="flex gap-2 m-2 items-center justify-center ">

                    <div className="bg-black text-white rounded-full w-[25px] h-[25px] flex items-center justify-center ">
                        <h1 className="">2</h1>

                    </div>
                    <NavLink to={'/cart/checkout'} className={({ isActive }) => isActive ? "text-black border-b-[2px] border-green-500" : "text-gray-500"}>checkout details</NavLink>
                </div>

                {/* <div className="flex gap-2 m-2 items-center justify-center"> */}
                <div className="flex gap-2 m-2 items-center justify-center ">

                    <div className="bg-black text-white rounded-full w-[25px] h-[25px] flex items-center justify-center ">
                        <h1 className="">3</h1>

                    </div>
                    <NavLink to={'/cart/order-completed'} className={({ isActive }) => isActive ? "text-black border-b-[2px] border-green-500" : "text-gray-500"}>order completed</NavLink>
                </div>
            </div>

        </>
    )
}

export default CartNavigation
