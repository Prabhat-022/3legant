import { useState } from "react"
import { Link } from "react-router-dom"

const CartNavigation = () => {
    const [active, setActive] = useState(false);

    const handleclick = () => {
        setActive(!active)
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className={`${active ? "flex gap-2 m-2 items-center justify-center underline underline-offset-8 " : ""}`} onClick={() => handleclick()}>

                    <div className="flex gap-2 m-2 items-center justify-center" >
                        <div className="bg-black text-white rounded-full w-[25px] h-[25px] flex items-center justify-center ">
                            <h1 className="">1</h1>

                        </div>
                        <Link to={'/shopping-cart'}>Shopping cart</Link>
                    </div>
                </div>

                {/* <div className="flex gap-2 m-2 items-center justify-center"> */}
                <div className={`${active ? "flex gap-2 m-2 items-center justify-center underline underline-offset-8 " : "flex gap-2 m-2 items-center justify-center"}`} onClick={() => handleclick()}>

                    <div className="bg-black text-white rounded-full w-[25px] h-[25px] flex items-center justify-center ">
                        <h1 className="">2</h1>

                    </div>
                    <Link to={'/checkout'}>checkout details</Link>
                </div>

                {/* <div className="flex gap-2 m-2 items-center justify-center"> */}
                <div className={`${active ? "flex gap-2 m-2 items-center justify-center underline underline-offset-8 " : "flex gap-2 m-2 items-center justify-center"}`} onClick={() => handleclick()}>

                    <div className="bg-black text-white rounded-full w-[25px] h-[25px] flex items-center justify-center ">
                        <h1 className="">3</h1>

                    </div>
                    <Link to={'/order-completed'}>order completed</Link>
                </div>
            </div>

        </>
    )
}

export default CartNavigation
