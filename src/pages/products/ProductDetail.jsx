import ReactStars from "react-rating-stars-component";
import {
    FaRegHeart,
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from "react-icons/fa";

import sofa1 from "../../assets/images/latestsofa1.png";
import sofa2 from "../../assets/images/latestsofa2.png";
import sofa3 from "../../assets/images/latestsofa3.png";
import sofa4 from "../../assets/images/latestsofa4.png";
import BreadCrumb from "../../components/BreadCrumb";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addToCart, increment } from "../../app/slice/cartSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import useAuthenticate from "../../hooks/useAuthenticate";


export default function ProductDetail() {
    const user = useSelector((store) => store.user.value);
    const cartCount = useSelector((store) => store.cart.value);
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const { slug } = useParams();
    const [currentTab, setCurrentTab] = useState("description");
    const authenticate = useAuthenticate()
    let tabs = ["description", "info", "reviews", "video"];
    const handleAddToCart = (e) => {
        e.preventDefault();
        authenticate(() => {
            dispatch(addToCart(product));
            toast("Added to Cart");
            console.log(cartCount);
        })
    };
    useEffect(() => {
        axios
            .get("https://ecommerce-sagartmg2.vercel.app/api/products/" + slug)
            .then((res) => {
                setProduct(res.data.data);
            });
    }, []);

    return (
        <>
            <BreadCrumb
                title={product.name}
                links={[
                    { title: "Home", url: "/" },
                    { title: "Products", url: "/products" },
                    { title: product.name, url: "#" },
                ]}
            />
            <div className="container">
                <div className="flex gap-3 bg-white shadow-lg xl:w-[1170px]">
                    <div className="flex flex-col gap-2">
                        <img
                            src={sofa1}
                            alt=""
                            className="h-36 w-36 bg-background"
                        />
                        <img
                            src={sofa2}
                            alt=""
                            className="h-36 w-36 bg-background"
                        />
                        <img
                            src={sofa3}
                            alt=""
                            className="h-36 w-36 bg-background"
                        />
                    </div>
                    <div className="">
                        <img
                            src={sofa4}
                            alt=""
                            className="h-[448px] w-80 bg-background object-contain"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3 font-josefin text-primary">
                        <p className="title-secondary">{product.name}</p>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        (22)
                        <div className="flex gap-2">
                            <p>$32.00</p>
                            <p className="text-secondary line-through">
                                $32.00
                            </p>
                        </div>
                        <p>color</p>
                        <p className="text-gray">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam culpa quam possimus nam, eius ab. lique
                            doloribus nesciunt culpa et sit.
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                className="btn-pink"
                                type="button"
                                onClick={handleAddToCart}
                            >
                                Add To Cart
                            </button>
                            <FaRegHeart />
                        </div>
                        <p>Categoried</p>
                        <p>Tags</p>
                        <div className="flex items-center gap-2">
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
            <div className="container">
                <ul className="title-sm my-5 flex justify-evenly">
                    {tabs.map((el) => {
                        return (
                            <li
                                key={"el._id"}
                                className={`${
                                    currentTab === el
                                        ? "border-b-2 border-b-primary"
                                        : ""
                                } cursor-pointer capitalize`}
                                onClick={() => {
                                    setCurrentTab(el);
                                }}
                            >
                                {el}
                            </li>
                        );
                    })}
                </ul>
                <div
                    className={`${
                        currentTab === "description" ? "block" : "hidden"
                    }`}
                >
                    <div className="my-5">
                        <p className="title-sm">Varius Tempor.</p>
                        <p className="text-gray">
                            Aliquam dis vulputate vulputate integer sagittis.
                            Faucibus dolor ornare faucibus vel sed et eleifend
                            habitasse amet. Montes, mauris varius ac est
                            bibendum. Scelerisque a, risus ac ante. Velit
                            consectetur neque, elit, aliquet. Non varius proin
                            sed urna, egestas consequat laoreet diam tincidunt.
                            Magna eget faucibus cras justo, tortor sed donec
                            tempus. Imperdiet consequat, quis diam arcu, nulla
                            lobortis justo netus dis. Eu in fringilla vulputate
                            nunc nec. Dui, massa viverr .
                        </p>
                    </div>
                    <div className="my-5">
                        <p className="title-sm">More Details</p>
                        <ul className="text-gray" type="list-disc">
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${currentTab === "info" ? "block" : "hidden"}`}
                >
                    <div className="my-5">
                        <p className="title-sm">Varius Tempor.</p>
                        <p className="text-gray">
                            Aliquam dis vulputate vulputate integer sagittis.
                            Faucibus dolor ornare faucibus vel sed et eleifend
                            habitasse amet. Montes, mauris varius ac est
                            bibendum. Scelerisque a, risus ac ante. Velit
                            consectetur neque, elit, aliquet. Non varius proin
                            sed urna, egestas consequat laoreet diam tincidunt.
                            Magna eget faucibus cras justo, tortor sed donec
                            tempus. Imperdiet consequat, quis diam arcu, nulla
                            lobortis justo netus dis. Eu in fringilla vulputate
                            nunc nec. Dui, massa viverr .
                        </p>
                    </div>
                    <div className="my-5">
                        <p className="title-sm">More Details</p>
                        <ul className="text-gray" type="list-disc">
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${
                        currentTab === "reviews" ? "block" : "hidden"
                    }`}
                >
                    <form
                        action=""
                        className="flex"
                        onSubmit={(e) => {
                            authenticate(() => {
                                toast("Review Added");
                            })
                            
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Write Your Reviews"
                            className="w-96 border p-2"
                            name="review"
                        />

                        <button className="btn-pink">Review</button>
                    </form>
                </div>
                <div
                    className={`${currentTab === "video" ? "block" : "hidden"}`}
                >
                    <div className="my-5">
                        <p className="title-sm">Varius Tempor.</p>
                        <p className="text-gray">
                            Aliquam dis vulputate vulputate integer sagittis.
                            Faucibus dolor ornare faucibus vel sed et eleifend
                            habitasse amet. Montes, mauris varius ac est
                            bibendum. Scelerisque a, risus ac ante. Velit
                            consectetur neque, elit, aliquet. Non varius proin
                            sed urna, egestas consequat laoreet diam tincidunt.
                            Magna eget faucibus cras justo, tortor sed donec
                            tempus. Imperdiet consequat, quis diam arcu, nulla
                            lobortis justo netus dis. Eu in fringilla vulputate
                            nunc nec. Dui, massa viverr .
                        </p>
                    </div>
                    <div className="my-5">
                        <p className="title-sm">More Details</p>
                        <ul className="text-gray" type="list-disc">
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                            <li className="before:text-primary before:content-['_\00BB']">
                                Aliquam dis vulputate vulputate integer
                                sagittis. Faucibus ds diam arcu, nulla lobortis
                                justo netus dis. Eu in fringilla vulputate nunc
                                nec. Dui, massa viverr .
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
