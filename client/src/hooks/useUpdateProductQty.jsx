import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useUpdateProductQty = (productId, quantity) => {
    const dispatch = useDispatch()

    const UpdateProductQty = async () => {
        try {
            const res = await axios.patch('/api/product/update-quantity', { productId, quantity }, {
                withCredentials: true
            })
            console.log('updateqty', res.data)
        } catch (error) {
            console.log('updateqty not working', error)

        }
    }
    useEffect(() => {
        UpdateProductQty()
    }, [])
}