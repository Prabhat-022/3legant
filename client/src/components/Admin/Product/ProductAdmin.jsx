


import { Link } from "react-router-dom"
import ImageSlider from "../../Homepage/ImageSlider"
import { useSelector } from "react-redux"
import Card from "./card"

const ProductAdmin = () => {
  const product = useSelector((state) => state.product.product)
  console.log('product:', product)

  return (
    <>
      <div className=" m-4 xl:bg-[#f1f1f1] xl:mx-2 xl:p-8 xl:h-[100vh] xl:ml-32 md:bg-[#f1f1f1] md:mx-2 md:p-8 md:h-[100vh] md:ml-24">

        <div className="p-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Products</h1>
        </div>

        <ImageSlider />

        <div className="flex flex-wrap gap-3 mx-10">
          {
            product?.map((item) => (
              <Card product={item} key={item._id} />
            ))
          }

        </div>

        <div className="absolute bottom-0 right-30 border p-4 bg-white shadow rounded-full">

          <button className="text-2xl cursor-pointer font-bold"> <Link to={"/admin/addnew-product"}> + Add New Product</Link></button>

        </div>
      </div>


    </>
  )
}

export default ProductAdmin
