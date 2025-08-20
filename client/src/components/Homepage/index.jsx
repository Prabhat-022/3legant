import React from 'react'
import ImageSlider from './ImageSlider'
import Simpleunique from './Simpleunique'
import Newsletter from './Newsletter'
import NewArrivals from './NewArrivals'
import Servises from './Servises'
import { usefetchProducts } from '../../hooks/usefetchProducts'

const index = () => {
    usefetchProducts()
    
    return (
        <>
        <div className="xl:my-5 xl:p-4 xl:mx-24">
            <ImageSlider/>
            <Simpleunique />
            <NewArrivals />
            <Servises />
            <Newsletter />
        </div>

        </>
    )
}

export default index
