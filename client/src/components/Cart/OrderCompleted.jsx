import { useSelector } from 'react-redux'

const OrderCompleted = () => {
 
  const products = useSelector((state) => state.cart.item);
  const price = products.map((item) => Number(item.price) * item.quantity);


 
  const total = Number(price.reduce(getSum, 0))
  const data = new Date()
  const str = "@#$%12346890&"
  const ordercode = Array(6).fill(str).map(x => x[Math.floor(Math.random() * str.length)]).join('');

  function getSum(total, num) {
      return total + Math.round(num);
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center my-4'>Completed</h1>
 

      <div className="flex items-center justify-center m-auto p-auto">

        <div className=" p-10 m-10 shadow w-[500px] h-[500px]">
          <div className="flex items-center justify-center flex-col">
            <h1 className='text-3xl font-bold'>Thank you! </h1>
            <h1>Your order has been completed</h1>
          </div>

          <div className="flex gap-2 m-2 p-4 overflow-x-scroll scrollbar-hide">
            {
              products?.map((item) => (
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
              <h1>{ordercode}</h1>
              <h1>{data.toDateString()}</h1>
              <h1>${total}</h1>
              <h1>Credit Card</h1>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 ">
            <button className='bg-black text-white p-3 rounded-full px-10'>Purches history</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default OrderCompleted
