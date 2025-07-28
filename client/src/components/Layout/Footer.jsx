import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="lg:mx-24">
        <div className="bg-black text-white p-2">

          <div className="flex justify-between items-center p-8 flex-col gap-2 xl:flex-row md:flex-row" >
            <h1>3legant | </h1>
            <p>Gift & Decoration Store</p>

            <div className="flex gap-10 ">
              <Link to={"/"} className='cursor-pointer border xl:border-none'>Home</Link>
              <Link to={"/"} className='cursor-pointer border xl:border-none'>shop</Link>
              <Link to={"/"} className='cursor-pointer border xl:border-none'>Product</Link>
              <Link to={"/"} className='cursor-pointer border xl:border-none'>Contact us</Link>
            </div>
          </div>

          <hr />

          <div className="flex justify-between items-center flex-col gap-2 xl:flex-row md:flex-row m-4 px-4">
            <div className="flex gap-10">
              <h1>copyright @ 2023 3legant All right reserved</h1>
              <h1>Privacy Policy</h1>
              <h1>Terms of Use</h1>
            </div>
            <div className="flex gap-10">
              <h1>Instagram</h1>
              <h1>Facebook</h1>
              <h1>Twitter</h1>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Footer
