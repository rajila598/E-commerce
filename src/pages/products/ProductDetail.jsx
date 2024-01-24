import ReactStars from "react-rating-stars-component";
import { FaRegHeart, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

import sofa1 from "../../assets/images/latestsofa1.png"
import sofa2 from "../../assets/images/latestsofa2.png"
import sofa3 from "../../assets/images/latestsofa3.png"
import sofa4 from "../../assets/images/latestsofa4.png"
import BreadCrumb from "../../components/BreadCrumb";
import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
export default function ProductDetail() {

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
            <BreadCrumb title={product.name} links={[
                { title: "Home", url: "/" },
                { title: "Products", url: "/products" },
                { title: product.name, url: "#" }
            ]} />
            <div className="container">
                <div className="bg-white shadow-lg flex gap-3 xl:w-[1170px]">
                    <div className="flex gap-2 flex-col">
                        <img src={sofa1} alt="" className="w-36 h-36 bg-background" />
                        <img src={sofa2} alt="" className="w-36 h-36 bg-background" />
                        <img src={sofa3} alt="" className="w-36 h-36 bg-background" />
                    </div>
                    <div className="">
                        <img src={sofa4} alt="" className="w-80 h-[448px] bg-background object-contain" />
                    </div>
                    <div className="flex justify-center flex-col items-start gap-3 font-josefin text-primary">
                        <p className="title-secondary">Playwood Arm Chair</p>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />(22)
                        <div className="flex gap-2">

                            <p>$32.00</p>
                            <p className="text-secondary line-through">$32.00</p>
                        </div>
                        <p>color</p>
                        <p className="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa quam possimus nam, eius ab. lique doloribus nesciunt culpa et sit.</p>
                        <div className="flex gap-2 items-center">
                            <button className="btn-pink" type="button">Add To Cart</button>
                            <FaRegHeart />
                        </div>
                        <p>Categoried</p>
                        <p>Tags</p>
                        <div className="flex gap-2 items-center">
                            <p>Share</p>
                            <div className="flex gap-2">
                                <FaFacebookSquare className="rounded-full" />
                                <FaInstagramSquare className="rounded-full" />
                                <FaTwitterSquare className="rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

