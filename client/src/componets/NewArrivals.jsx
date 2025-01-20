import { useSelector } from "react-redux"
import ProductCart from "../pages/ProductCart"

const NewArrivals = () => {
  const product = useSelector((state) => state.products.product);

  return (
    <>
      <div className="mx-24 p-2">

        <div className="flex items-center justify-between m-4 ">

          <div className="">
            <h1>New</h1>
            <h1>Arrivals</h1>
          </div>
          <div className="">
            <p>More Products</p>
          </div>
        </div>

        <div className="flex gap-4 space-x-4 w-full mb-2 mt-2 overflow-x-auto">
          <div className="flex gap-4">
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
