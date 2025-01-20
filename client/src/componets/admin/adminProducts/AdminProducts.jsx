import { Link } from "react-router-dom"
import AdminHeader from "../AdminHeader"
import AdminLeftLayout from "../AdminLeftLayout"
// import AdminProductCart from "./AdminProductCart"
import ImageSlider from "../../ImageSlider"
import { useSelector } from "react-redux"
import ProductCart from "../../../pages/ProductCart"

const AdminProducts = () => {
    const product = useSelector((state) => state.products.product)

    return (
        <>
            <AdminHeader />
            <div className="flex w-full h-[100vh] relative">
                <AdminLeftLayout />
                <div className="bg-[#f1f1f1] w-[80%]  mx-2 p-8 h-[100vh]">
                    <div className="p-2 flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Products</h1>
                    </div>
 
                    <ImageSlider />

                    <div className="flex flex-wrap gap-3 mx-10">

                        {
                            product?.map((item) => (
                                <ProductCart product={item} key={item._id} />
                            ))
                        }

                    </div>
                    <div className="absolute bottom-0 right-20 border p-4 bg-white shadow rounded-full">

                        <button className="text-2xl cursor-pointer font-bold"> <Link to={"/admit-addnew-product"}> + Add New Product</Link></button>

                    </div>
                </div>


            </div>
        </>
    )
}

export default AdminProducts
