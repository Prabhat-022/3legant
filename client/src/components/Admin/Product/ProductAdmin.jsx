
import { Link } from "react-router-dom"
import ImageSlider from "../../Homepage/ImageSlider"
import { useSelector } from "react-redux"
import Card from "./card"

const ProductAdmin = () => {
  const { product } = useSelector((state) => state?.product.product);
  const {user} = useSelector((state) => state?.user);
  const admin_product = product.filter((item) => item.user === user._id);

  return (
    <>
      <div className="lg:p-6">

        <div className="p-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Products</h1>
        </div>

        <ImageSlider />

        <div className="flex flex-wrap gap-3 ">
          {
            admin_product?.map((item) => (
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
