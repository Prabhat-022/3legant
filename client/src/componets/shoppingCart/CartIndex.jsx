import Header from "../../pages/Header"
import Footer from "../../pages/Footer"
import CartNavigation from "./CartNavigation"
import { Outlet } from "react-router-dom"

const CartIndex = () => {
    return (
        <>
            <div className="">
                <Header />
                <div className="">
                    <CartNavigation />
                </div>

                <Outlet />
                <Footer />

            </div>

        </>
    )
}

export default CartIndex
