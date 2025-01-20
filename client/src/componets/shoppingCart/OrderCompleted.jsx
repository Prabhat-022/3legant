import { useSelector } from 'react-redux'
import traytable1 from '../../assets/tray-table1.jpg'
import traytable2 from '../../assets/tray-table2.jpg'
import traytable3 from '../../assets/traytable3.jpg'
import Footer from '../../pages/Footer'
import Header from '../../pages/Header'
import CartNavigation from './CartNavigation'
const OrderCompleted = () => {
  const products = useSelector((state) => state.cart.cart);
  const item = products.map((item) => item.product);

  return (
    <>
      <Header />
      <h1 className='text-3xl font-bold text-center my-4'>Completed</h1>
      <div className="">
        <CartNavigation />
      </div>

      <div className="flex items-center justify-center m-auto p-auto">

        <div className=" p-10 m-10 shadow">
          <div className="flex items-center justify-center flex-col">
            <h1 className='text-3xl font-bold'>Thank you! </h1>
            <h1>Your order has been completed</h1>
          </div>

          <div className="flex gap-2 m-2 p-4">
            {
              item.map((item) => (
                <>
                  <img src={item.image[0].url} alt="" className='w-[100px] h-[100]' />
                </>
              ))
            }
          </div>

          <div className="flex gap-2 justify-between">
            <div className="mb-2">
              <h1>Order code: </h1>
              <h1>Date:</h1>
              <h1>Total:</h1>
              <h1>Payment method:</h1>
            </div>

            <div className="font-bold">
              <h1>#012_45678</h1>
              <h1>October 10, 2023</h1>
              <h1>$1,345.00</h1>
              <h1>Credit Card</h1>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 ">
            <button className='bg-black text-white p-3 rounded-full px-10'>Purches history</button>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OrderCompleted
