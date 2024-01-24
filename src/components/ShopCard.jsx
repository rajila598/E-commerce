import ReactStars from "react-rating-stars-component";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import noimage from "../assets/images/noimageavailable.jpg";
import { IoLogoChrome } from "react-icons/io5";

const ShopCard = ({product}) => {
    return (
        <>
        
            <div className="bg-white shadow-md p-4 flex gap-4 my-5">
                <div className="bg-gray-200">
                    <img src={product.image ? product.image : noimage} alt="" className="max-w-xs"/>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="title-secondary">{product.name}</p>
                    <div className="flex gap-2 items-center">
                        <p className="text-primary">${product.price}</p>
                        <p className="text-secondary text-sm line-through">$52.00</p>
                        <ReactStars />
                    </div>
                    <p className="text-gray">{product.description ? product.description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore sequi ullam dolorem nesciunt officiis, quaerat, omnis blanditiis nostrum voluptatibus natus"}</p>
                    <div className="flex gap-4">
                        <span className=" flex-center h-[30px] w-[30px] rounded-full bg-white shadow-md">
                            <FiShoppingCart className="text-primary" />
                        </span>
                        <span className=" flex-center h-[30px] w-[30px] rounded-full bg-white shadow-md">
                            <FiHeart className="text-primary" />
                        </span>
                        <span className=" flex-center h-[30px] w-[30px] rounded-full bg-white shadow-md">
                            <FaSearchPlus className="text-xs text-primary" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCard