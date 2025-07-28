import React from 'react'
import { Outlet } from 'react-router-dom'
import CartNavigation from './CartNavigation'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

const CartLayout = () => {
    return (
        <div className=''>
            <Header/>
            <CartNavigation />
            <Outlet />
            <Footer/>

        </div>
    )
}

export default CartLayout
