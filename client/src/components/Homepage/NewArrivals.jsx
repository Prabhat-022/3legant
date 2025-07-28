import { useSelector } from "react-redux"
import ProductCart from "../ProductList/ProductCart"
import { FaArrowRight } from "react-icons/fa6";

const NewArrivals = () => {
  const { product } = useSelector((state) => state.product);

  return (
    <>
      <div className="p-2 my-4">

        <div className="flex items-center justify-between m-4 ">

          <div className="">
            <h1 className="text-2xl font-bold font-serif">New Arrivals</h1>
          </div>
          <div className="flex items-center justify-center cursor-pointer">

            <p className="text-sm font-semibold">More Products</p>
            <FaArrowRight className="text-xl" color="black" size={15} />
          </div>
        </div>

        <div className="flex overflow-x-auto">
          <div className="flex gap-1 flex-nowrap">

            {
              product?.map((item) => (
                <ProductCart product={item} key={item._id} />
              ))
            }

          </div>
        </div>


      </div>

    </>
  )
}

export default NewArrivals
