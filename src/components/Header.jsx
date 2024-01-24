import mail from "../assets/images/mail.png";
import phone from "../assets/images/phone.png";
import dropdown from "../assets/images/dropdownarrow.png";
import login from "../assets/images/user.png";
import wishlist from "../assets/images/wishlist.png";
import { FaShoppingCart } from "react-icons/fa";
import search from "../assets/images/search.png";
import { Link } from "react-router-dom";
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
    const cartCount = useSelector((store) => store.cart.value)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            {/* heading bar */}
            <div className="h-11 w-full bg-primary-second">
                <div className="mx-20 grid text-white md:gap-9 lg:grid-cols-5 lg:gap-10">
                    <div className="flex gap-2 p-2">
                        <img src={mail} alt="mail" className="w-5" />
                        <p>mhhasanul@gmail.com</p>
                    </div>
                    <div className="flex gap-2 p-2">
                        <img src={phone} alt="mail" className="w-5" />
                        <p>(12345)67890</p>
                    </div>
                    <div className="col-span-2 flex gap-2 p-2">
                        <div className="flex gap-2">
                            <p>English</p>
                            <img src={dropdown} alt="mail" className="w-5" />
                        </div>
                        <div className="flex gap-2">
                            <p>USD</p>
                            <img src={dropdown} alt="mail" className="w-5" />
                        </div>
                        <div className="flex gap-2">
                            <p>Wishlist</p>
                            <img src={wishlist} alt="mail" className="w-5" />
                        </div>
                        <div className="flex gap-2">
                            {/* {JSON.stringify(user)} */}
                            {user ? (
                                <>
                                    <div className="flex gap-1">
                                        <p>{user.name}</p>
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
                            <img src={login} alt="mail" className="w-5" />
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <BuyerComponent>
                            <Link to={"/cart"} className="flex">
                                <FaShoppingCart className="text-2xl" />
                                <p>({cartCount})</p>
                            </Link>
                        </BuyerComponent>
                    </div>
                </div>
            </div>
            {/* nav bar */}
            <div className="flex w-full justify-between p-3">
                <div className="mx-20 grid grid-cols-1 lg:grid-cols-4">
                    <div className="">
                        <p className="text-2xl font-bold">Hekto</p>
                    </div>

                    <ul
                        className={`${
                            isMenuOpen ? "flex" : "hidden"
                        } flex-col transition-all duration-500 lg:col-span-2 lg:flex lg:flex-row lg:gap-4`}
                    >
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>Products</li>
                        <li>
                            <ProtectedComponent role="seller">
                                <Link to={"/add"}>Add Products</Link>
                            </ProtectedComponent>
                        </li>
                        <li>Blog</li>
                        <li>
                            <Link to={"left"}>Shop</Link>
                        </li>
                        <li>Contact</li>
                    </ul>
                    <div
                        className={`${isMenuOpen ? "flex" : "hidden"} lg:flex `}
                    >
                        <input
                            type="text"
                            className="border border-2 px-2 focus:border-secondary focus:outline-none"
                        />
                        <div className="w-10 bg-secondary p-2">
                            <img src={search} alt="" className="h-5 w-5 " />
                        </div>
                    </div>
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
