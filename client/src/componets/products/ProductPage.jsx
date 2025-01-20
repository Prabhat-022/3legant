import Product from './Product'
import NewArrivals from '../NewArrivals'

const ProductPage = () => {
    return (
        <>

            <div className="mb-2 mx-24">
                <div className="flex gap-2 p-2 mx-4 font-bold font-serif">
                    <p>Home {">"}</p>
                    <p>Shop {">"}</p>
                    <p>Living Room {">"}</p>
                    <p>Product </p>
                </div>
                <Product />

            </div>

            <NewArrivals />


        </>
    )
}

export default ProductPage
