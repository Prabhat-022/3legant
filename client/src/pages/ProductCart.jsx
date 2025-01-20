import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSingleProduct } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';

const ProductCart = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSingleProduct = (item) => {
        navigate('/product-details')
        dispatch(setSingleProduct(item))
    }

    // const img = product.image.map(item => item.url)
    // console.log('img:', img)
    const img = product.image.map((img) => img?.url);

    const handleaddtocart = (e) => {

        e.preventDefault();
        dispatch(addToCart({product, productId: product._id, quantity: 1 }));
        
    }
    return (
        <>
            <div className="w-[300px] h-[400px] border-2 border-gray-200  relative m-4 p-4"  >
                <img src={img[0]} alt="" className='w-full h-[300px] flex items-center justify-center' onClick={() => handleSingleProduct(product)} />

                <div className="absolute top-2 left-2 p-1">
                    <h1 className="text-black font-bold">New</h1>
                    <p className="bg-green-600 text-white font-bold">-50%</p>
                </div>

                <div className="p-3 mb-2">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="flex">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <h1>{product?.title}</h1>
                        </div>
                        <div className="">
                            <button className='bg-[#070808] text-white p-2 rounded-md' onClick={handleaddtocart}>Add to Cart</button>
                        </div>

                    </div>

                    <div className="flex justify-between">
                        <h1>{product?.price}</h1>
                        <h1 className='line-through'>{product?.discountPrice}</h1>
                    </div>
                </div>
            </div >
        </>
    )
}

ProductCart.propTypes = {
    product: PropTypes.object.isRequired,
}
export default ProductCart
