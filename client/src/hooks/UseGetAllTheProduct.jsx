import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllProducts } from "../redux/productSlice";

export const UseGetAllTheProdut = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const GetAllProductData = async () => {
            try {
                const res = await axios.post('/api/product', { withCredentials: true });

                if (res.data.success) {
                    dispatch(setAllProducts(res.data.product));
                }
            } catch (error) {
                console.log("All Product fatching data error:", error);
            }
        };

        GetAllProductData();
    }, []);
};