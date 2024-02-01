import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VITE_API_URL } from '../../constants/domain'
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const SellerProducts = () => {
    const [products, setProducts] = useState([])
    let access_token = localStorage.getItem("access_token")
    useEffect(() => {
        axios.get(`${VITE_API_URL}/products`,{
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        })
        .then(res => {
            setProducts(res.data.products)
        })
    },[])
  return (
    <>
    <div className="container">

    <table className='mt-3 w-full'>
        <thead>
            <tr>
                <th className='border px-4 py-2'>Name</th>
                <th className='border px-4 py-2'>Price</th>
                <th className='border px-4 py-2'>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((el) => {
                    return (
                        <>
                        <tr>
                            <td className='border px-4 py-2'>{el.name}</td>
                            <td className='border px-4 py-2'>{el.price}</td>
                            <td className='border px-4 py-2 flex gap-2 items-center'>
                                <Link to={`/edit/${el._id}`} ><MdEdit /></Link>
                                <FaTrash />
                                </td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
    </table>
    </div>
    </>
  )
}
