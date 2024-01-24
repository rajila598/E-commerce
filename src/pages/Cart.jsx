import { useDispatch, useSelector } from "react-redux";
import { increment } from "../app/slice/cartSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Cart() {
    const cartCount = useSelector((store) => store.cart.value)

    const [product, setProduct] = useState({})
    const {slug} = useParams()
    useEffect(() => {
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/"+slug,)
        .then(res => {
            setProduct(res.data.data);
        })
    }, [])
    return (
        <>
            <div className="">
                <div className="flex gap-2">
                    <p>{product.name}</p>
                    <p>({cartCount})</p>
                </div>
            </div>
        </>
    );
}
