import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Shopnow = () => {
  return (
    <>
      <div className="">
        <Link to={'/shop'}>
          <span className='text-blue-600 underline  px-2 cursor-pointer flex '>Shop Now <FaArrowRightLong className="text-2xl px-1" />
          </span>
        </Link>

      </div>

    </>
  )
}

export default Shopnow
