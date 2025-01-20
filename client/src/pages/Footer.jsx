import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="bg-black text-white p-2">

          <div className="flex justify-between items-center p-8 " >
            <h1>3legant | </h1>
            <p>Gift & Decoration Store</p>

            <div className="flex gap-10">
              <Link to={"/home"} className='cursor-pointer'>Home</Link>
              <Link to={"/shop"} className='cursor-pointer'>shop</Link>
              <Link to={"/product-details"} className='cursor-pointer'>Product</Link>
              <Link to={"/contact"} className='cursor-pointer'>Contact us</Link>
            </div>
          </div>

          <hr />

          <div className="flex justify-between items-center  m-4 px-4">
            <div className="flex gap-10">
              <h1>copyright @ 2023 3legant All right reserved</h1>
              <h1>Privacy Policy</h1>
              <h1>Terms of Use</h1>
            </div>
            <div className="flex gap-10">
              <h1>insta</h1>
              <h1>facebook</h1>
              <h1>twitter</h1>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Footer
