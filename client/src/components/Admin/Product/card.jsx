
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Card = ({product}) => {
  const navigate = useNavigate();

  const handleEditProduct = (products) => {

    console.log('clicked product:', products)
    navigate('/admin/edit-product', { state: { products } });
  } 


  return (

    <>
      <div className=" mt-2 mb-2 border-2 border-[#898f98]  w-[200px] flex flex-col items-center justify-center" >

        <div className="bg-transparent flex items-center p-4">
          <FaChevronLeft />
          <img src={product.image[0].url} alt="" className='w-[150px] h-[150px]' />
          <FaChevronRight />
        </div>

        <div className="bg-white w-full p-2">
          <div className="">
            <h1 className='font-bold'>{product.title.split(' ').slice(0, 3).join('')}</h1>

            <div className="flex justify-between font-bold p-2">
              <h1>${product.price}</h1>
              <p><FaRegHeart /></p>
            </div>

          </div>

          <div className="flex gap-2 ">
            <div className="flex gap-1">
              <FaRegStar backgroundColor='yellow' />
              <FaRegStar style={{ backgroundColor: 'yellow' }} />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <p>(131)</p>
          </div>

          <button className='bg-[#a4a5a5] text-black p-2 rounded mt-2 cursor-pointer' onClick={() => handleEditProduct(product)}>Edit Product</button>
        </div>
      </div>

    </>
  )
}

export default Card
