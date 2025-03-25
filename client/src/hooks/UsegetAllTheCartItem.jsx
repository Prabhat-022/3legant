
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const UsegetAllTheCartItem = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        fetProducts()
    }, [])

    const fetProducts = async () => {
        try {
            const res = await axios.get('/api/cart',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            )
            console.log('Cart Item fetch:', res.data)

            dispatch(addToCart(res.data.data))
        } catch (error) {
            console.log('Cart Item not fetch Error:', error)
        }
    }

}
