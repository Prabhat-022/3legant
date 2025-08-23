import React from 'react'
import ImageSlider from './ImageSlider'
import Simpleunique from './Simpleunique'
import Newsletter from './Newsletter'
import NewArrivals from './NewArrivals'
import Servises from './Servises'
import Topcategory from './Topcategory'
import Trending_collection from './Trending_collection'
import Special_product from './Special_product'


const index = () => {
    
    return (
        <>
        <div className="xl:my-5 xl:p-4 xl:mx-24">
            <ImageSlider/>
            <Simpleunique />
            <Topcategory/>
            <Trending_collection/>
            <Special_product/>
            <NewArrivals />
            <Servises />
            <Newsletter />
        </div>

        </>
    )
}

export default index
