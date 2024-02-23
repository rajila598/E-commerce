import { FaHeart, FaPhoneAlt, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import search from "../assets/images/search.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/slice/userSlice";
import BuyerComponent from "./BuyerComponent";
import SellerComponent from "./SellerComponent";
import ProtectedComponent from "./ProtectedComponent";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useSelector((store) => store.user.value);
    const cartCount = useSelector((store) => store.cart.value);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            {/* heading bar */}
            <div className="h-11 w-full bg-primary-second">
                <div className="mx-20 grid text-white md:gap-9 lg:grid-cols-3 lg:gap-10">
                    <div className="flex items-center gap-2 p-2">
                        <MdOutlineEmail className="h-6 w-6" />
                        <p>hekto@gmail.com</p>
                    </div>
                    <div className="flex gap-2 p-2">
                        <FaPhoneAlt className="h-5 w-5"/>
                        <p>9876543210</p>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <div className="flex gap-2">
                            {/* {JSON.stringify(user)} */}
                            {user ? (
                                <>
                                    <div className="flex items-center gap-1">
                                        <p>{user.name}</p>
                                        <FaUser className="w-7" />
                                        <FaHeart className="w-7" />
                                        <span onClick={handleLogout}>
                                            logout
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <Link to={"/login"}>
                                    <p>Login</p>
                                </Link>
                            )}
                        </div>
                        <BuyerComponent>
                            <Link to={"/cart"} className="flex">
                                <FaShoppingCart className="text-2xl" />
                                <p>({cartCount.length})</p>
                            </Link>
                        </BuyerComponent>
                    </div>
                </div>
            </div>
            {/* nav bar */}
            <div className="flex w-full justify-between p-3">
                <div className="mx-20 grid grid-cols-1 lg:grid-cols-5">
                    <div className="">
                        <Link to={"/"}>
                            <p className="text-2xl font-bold">Hekto</p>
                        </Link>
                    </div>

                    <ul
                        className={`${
                            isMenuOpen ? "flex" : "hidden"
                        } flex-col transition-all duration-500 lg:col-span-3 lg:flex lg:flex-row lg:gap-4`}
                    >
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                           <Link to={"/products"}>Products</Link>
                        </li>
                        <li>
                            <Link to={"left"}>Shop</Link>
                        </li>
                        <li>Contact</li>
                        <li>
                            <ProtectedComponent role="seller">
                                <Link to={"/add"}>Add Products</Link>
                            </ProtectedComponent>
                        </li>
                        <li>
                            <ProtectedComponent role="seller">
                                <Link to={"/seller"}>Seller Products</Link>
                            </ProtectedComponent>
                        </li>
                    </ul>
                    {/* search */}
                    <form
                        className={`${isMenuOpen ? "flex" : "hidden"} lg:flex `}
                        onSubmit={(e) => {
                            e.preventDefault()
                            navigate(`/products?searchTerm=`+e.target.searchTerm.value)
                        }}
                    >
                        <input
                            type="text"
                            name = "searchTerm"
                            className="border-2 px-2 focus:border-secondary focus:outline-none"
                        />
                        <div className="bg-secondary p-2">
                        <FaSearch className="h-5 w-5 text-white"/>
                        </div>
                    </form>
                </div>
                <div className="block px-20 py-2 lg:hidden">
                    <IoMenu
                        onClick={() => {
                            setIsMenuOpen((prev) => !prev);
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
