import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="lg:mx-24">
        <div className="bg-black text-white p-2">

          <div className="flex justify-between items-center p-8 flex-col gap-2 xl:flex-row md:flex-row" >
            <h1>3legant | </h1>
            <p className="mb-5">Gift & Decoration Store</p>

            <div className="flex gap-4 lg:gap-10 mb-5">
              <ul className="flex gap-4 flex-wrap  lg:gap-10">
                <li className="mb-5">
                  <Link to={"/"} className='cursor-pointer border xl:border-none p-2'>Home</Link>
                </li>
                <li>
                  <Link to={"/"} className='cursor-pointer border xl:border-none p-2'>shop</Link>
                </li>
                <li>
                  <Link to={"/"} className='cursor-pointer border xl:border-none p-2'>Product</Link>
                </li>
                <li>
                  <Link to={"/"} className='cursor-pointer border xl:border-none p-2'>Contact us</Link>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="flex justify-between items-center flex-col gap-2 xl:flex-row md:flex-row m-4 px-4">
            <div className="flex flex-col items-center justify-center gap-4  lg:flex-row lg:gap-10 ">
              <h1 className="text-sm">copyright @ 2023 3legant All right reserved</h1>
              <h1 className="text-sm">Privacy Policy</h1>
              <h1 className="text-sm">Terms of Use</h1>
            </div>
            <div className="flex gap-10 mt-4">
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
