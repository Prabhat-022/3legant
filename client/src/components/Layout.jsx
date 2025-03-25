import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import { Outlet } from 'react-router-dom'
import Offer from './Layout/Offer'
import FlyoutCart from './Cart/FlyoutCart'

const Layout = () => {
    return (
        <>
            <main className='overflow-hidden min-h-screen   '>
                <Offer />
                <Header />
                <Outlet />
                <Footer />
                <FlyoutCart />

            </main>
        </>
    )
}

export default Layout
