import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Offer from './Offer'
import FlyoutCart from '../Cart/FlyoutCart'

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
