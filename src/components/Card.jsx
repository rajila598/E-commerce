/* eslint-disable react/prop-types */
import group from "../assets/images/Group141.png";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment } from "../app/slice/cartSlice";
import useAuthenticate from "../hooks/useAuthenticate";

const Card = ({ product }) => {
    let user = useSelector((store) => store.user.value);
    let cartCount = useSelector((store) => store.cart.value);
    let dispatch = useDispatch();
    const authenticate = useAuthenticate()
    const handleAddToCart = (e) => {
        e.preventDefault();
        authenticate(() => {
            dispatch(addToCart(product));
            toast("Added to Cart");
            console.log(cartCount);
        })
       
    };
    return (
        <>
            <div className="group relative h-auto bg-white drop-shadow-xl">
                <div className="absolute left-3 top-3 flex scale-0  gap-2 group-hover:scale-100">
                    <span
                        className=" flex-center h-[30px] w-[30px] rounded-full bg-[#EEEFFB]"
                        onClick={handleAddToCart}
                    >
                        <FiShoppingCart className="text-primary" />
                    </span>
                    <span
                        className=" flex-center h-[30px] w-[30px] rounded-full bg-[#EEEFFB]"
                        onClick={(e) => {
                            e.preventDefault();
                            toast("Added to wishlist");
                        }}
                    >
                        <FiHeart className="text-primary" />
                    </span>
                    <span className=" flex-center h-[30px] w-[30px] rounded-full bg-[#EEEFFB]">
                        <FaSearchPlus className="text-xs text-primary" />
                    </span>
                </div>
                <div className="absolute bottom-32 left-24 scale-0 group-hover:scale-100">
                    <button className="text-josefin bg-[#08D15F] p-2 text-white">
                        View Details
                    </button>
                </div>
                <div className="flex h-60 items-center justify-center bg-[#F6F7FB]">
                    <img src={product.image} alt="" className="h-60" />
                </div>
                <div className="flex flex-col items-center gap-2 group-hover:bg-[#2F1AC4] md:py-4 ">
                    <p className="text-lg font-bold text-secondary group-hover:text-white">
                        {product.name}
                    </p>
                    <img src={group} alt="" />
                    <p className="text-sm text-primary group-hover:text-white">
                        Code - Y523201
                    </p>
                    <p className="text-sm text-primary group-hover:text-white">
                        ${product.price}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Card;
