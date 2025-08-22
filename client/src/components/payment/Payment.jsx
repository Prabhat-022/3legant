import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import axiosInstance from '../../lib/axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Payment = () => {

  const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY; // Accessing the environment variable
  console.log(stripeKey);

  const navigate = useNavigate()


  const [product, setProduct] = useState({
    name: 'prabhat',
    price: 10,
    description: 'hello world',
    productBy: 'facebook'
  })

  const makePayment = async (token) => {
    try {
      const body = {
        token,
        product
      }
      const headers = {
        'Content-Type': 'application/json'
      }
      const res = await axiosInstance.post('/api/payment', body, { headers })
      const data = res.data
      console.log(data)

      if (data.success) {
        toast.success(data.message)
        alert('Payment Successful');
        navigate('/cart/order-completed')
      }
    } catch (err) {
      toast.error(err.response.data.message)
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Product</h1>
      <StripeCheckout
        stripeKey={stripeKey}
        token={makePayment}
        billingAddress
        shippingAddress
        amount={product.price * 100}
        name={product.name}
        description={product.description}
        image='https://i.imgur.com/4YdSd3A.png'
      >
        <button>Pay</button>
      </StripeCheckout>

    </div>
  )
}

export default Payment
