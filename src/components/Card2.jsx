/* eslint-disable react/prop-types */
import sale from "../assets/images/sale.png";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import noimage from "../assets/images/noimageavailable.jpg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment } from "../app/slice/cartSlice";
import useAuthenticate from "../hooks/useAuthenticate";

const Card2 = ({ product }) => {
    let user = useSelector((store) => store.user.value);
    let cartCount = useSelector((store) => store.cart.value);
    const authenticate = useAuthenticate()
    let dispatch = useDispatch();
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
            <Link to={`/products/${product._id}`}>
                <div className="group relative">
                    <div className="absolute left-3 top-3 scale-0 group-hover:scale-100">
                        <img src={sale} alt="" />
                    </div>
                    <div className="absolute bottom-10 left-3 flex scale-0 flex-col  gap-2 group-hover:scale-100">
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
                                toast("ADDed to wishlist");
                            }}
                        >
                            <FiHeart className="text-primary" />
                        </span>
                        <span className=" flex-center h-[30px] w-[30px] rounded-full bg-[#EEEFFB]">
                            <FaSearchPlus className="text-xs text-primary" />
                        </span>
                    </div>
                    <div className="lg:96 flex h-64 w-56 justify-center bg-[#F7F7F7] sm:w-64 md:w-80">
                        {/* <img src={product.image ? product.image : noimage} alt="" className="h-auto"/> */}
                        <img
                            src={product.image || noimage}
                            alt=""
                            className="h-[200px] "
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className="text-primary">{product.name}</p>
                        <div className="flex items-end justify-end gap-2">
                            <p className="text-sm text-primary">
                                ${product.price}
                            </p>
                            <p className="text-xs text-[#FB2448] line-through">
                                $65.00
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Card2;
