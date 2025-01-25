import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export const UseGetAllTheCartProducts = (id) => {
    const dispatch = useDispatch();

    const GetCartProducts = async () => {
        try {
            const res = await axios.get(`/api/cart/${id}`, { withCredentials: true }); 

            console.log('res:', res.data.cartItem)
            // if (res.data.success) {
            //     dispatch(addToCart(res.data.cart))
            // }

        } catch (error) {

            console.log('Error fetching cart products:', error);
            return null;

        }
    }
    GetCartProducts();
}