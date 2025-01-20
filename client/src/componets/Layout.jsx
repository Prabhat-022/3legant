import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../pages/Header';
import FlyoutCart from './shoppingCart/FlyoutCart';
import HeaderPopup from './HeaderPopup';
import Footer from '../pages/Footer';
import Newsletter from './Newsletter';

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);
    return (
        <div className='bg-zinc-200'>
            <main className={`w-[1200px] max-w-full m-auto  transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56"}`}>
                <HeaderPopup />
                <Header />

                <Outlet />

                <Newsletter />
                <Footer />
            </main>
            <div
                className={`fixed top-0 right-0 h-full w-56 bg-white shadow-lg transform transition-transform duration-500
                ${statusTabCart ? "translate-x-0" : "translate-x-full"}`}
            >
                <FlyoutCart />
            </div>
            {/* <FlyoutCart /> */}
        </div>
    )
}

export default Layout