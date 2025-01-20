import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCartProduct } from '../redux/cartSlice';

export const UseGetProductById = (id) => {
    const dispatch = useDispatch();

    const GetProductById = async () => {
        try {
            const res = await axios.post(`/api/product/get-product-by-id`, id,
                { withCredentials: true });
            console.log(res.data);


            if (res.data.success) {
                dispatch(setCartProduct({ productId: res.data.product._id }));
            }

        } catch (error) {
            console.log('Product not fetched', error);
        }
    }
    GetProductById();
}