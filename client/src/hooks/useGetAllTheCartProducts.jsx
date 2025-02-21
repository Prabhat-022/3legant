import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export const UseGetAllTheCartProducts = () => {
    const loginUser = useSelector(state => state.user?.loginuser)
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const GetCartProducts = async () => {

        try {
            const res = await axios.post(`/api/cart/${loginUser?._id || user?._id}`)
            console.log('res data:', res.data)
            console.log('res data:', res.data.products)

            if (res.data.success) {

                res.data.products.map((item) =>
                    dispatch(addToCart(item)))

            }
            // dispatch(addToCart(res.data.products))

        } catch (error) {
            console.log('Add to cart failed', error)
        }
    }
    useEffect(() => {
        GetCartProducts()
    }, [])
}