
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setProduct } from '../redux/ProductSlice'

export const usefetchProducts = () => {

    const dispatch = useDispatch()
    const fetProducts = async () => {
        try {
            const res = await axios.get('/api/products',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            )
            const data = res.data
            dispatch(setProduct(res.data.product))
            return data
        } catch (error) {
            console.log('Product not fetch Error:', error)
        }
    }
    fetProducts()

}

