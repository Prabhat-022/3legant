import { useSelector } from "react-redux"
import ProductCart from "../ProductList/ProductCart"
import { FaStar } from "react-icons/fa"

const NewArrivals = () => {
  const {product} = useSelector((state) => state.product);

  return (
    <>
      <div className="p-2">

        <div className="flex items-center justify-between m-4 ">

          <div className="font-bold font-3xl">
            <h1>New</h1>
            <h1>Arrivals</h1>
          </div>
          <div className="">
            <p>More Products</p>
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
