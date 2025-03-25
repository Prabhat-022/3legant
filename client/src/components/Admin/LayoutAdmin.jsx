import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Outlet } from 'react-router-dom'
import NavebarAdmin from './NavebarAdmin'

const LayoutAdmin = () => {

    return (
        <>
            {/* <div className='mx-24 bg-gray-200 '>
                <HeaderAdmin />
                <div className="flex ">
                    <NavebarAdmin />
                    <div className="w-3/4">
                        <Outlet />
                    </div>
                </div>
            </div> */}


            <div className="xl:fixed xl:top-0 xl:left-0 xl:right-0 xl:h-16 xl:bg-white xl:shadow xl:z-50  md:fixed md:top-0 md:left-0 md:right-0 md:h-16 md:bg-white md:shadow md:z-50">
                <HeaderAdmin />
            </div>
            <div className="hidden xl:block  xl:fixed xl:top-16 xl:left-0 xl:w-[20rem] xl:h-[calc(100vh-4rem)] xl:bg-gray-200 xl:z-40 md:fixed md:top-0 md:left-0 md:w-[20rem] md:h-[calc(100vh-4rem)] md:bg-gray-200 md:z-40">
                <NavebarAdmin />
            </div>
            <div className="xl:ml-48 xl:mt-16 xl:p-4 xl:h-[calc(100vh-4rem)] xl:overflow-y-auto md:ml-24 md:mt-16 md:p-4 md:h-[calc(100vh-4rem)] md:overflow-y-auto">
                <Outlet />
            </div>
        </>
    )
}

export default LayoutAdmin

