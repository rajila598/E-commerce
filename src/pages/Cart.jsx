import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "../app/slice/cartSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BreadCrumb from "../components/BreadCrumb";
import noimage from "../assets/images/noimageavailable.jpg";

export default function Cart() {
    const cartItems = useSelector((store) => store.cart.value);
    let dispatch = useDispatch();
    // const dispatch = useDispatch();
    // const { slug } = useParams();

    // useEffect(() => {
    //     axios
    //         .get("https://ecommerce-sagartmg2.vercel.app/api/products/" + slug)
    //         .then((res) => {
    //             setProducts(product);
    //         });
    // }, []);
    return (
        <>
            <BreadCrumb
                title={"Shopping Cart"}
                links={[
                    { title: "Home", url: "/" },
                    { title: "Products", url: "/products" },
                    { title: "Shopping Cart", url: "#" },
                ]}
            />
            <div className="bg-background">
                <div className="container">
                    <div className="mx-auto max-w-[1000px] rounded-lg bg-white shadow-xl">
                        <div className="mb-2 flex justify-between p-4">
                            <p className="title">Shopping Cart</p>
                            <button type="button" className="btn-pink">
                                Remove All
                            </button>
                        </div>
                        <hr />
                        <div className="grid grid-cols-1 gap-4 p-3">
                            {cartItems.map((item) => {
                                return (
                                    <div
                                        className="mt-5 grid grid-cols-5"
                                        key={item._id}
                                    >
                                        <img src={item.image ? item.image : noimage} alt="" className="w-24 h-24"/>
                                        <p>{item.name}</p>
                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                className="btn-round text-2xl"
                                                onClick={() =>  {
                                                    dispatch(increment(item))
                                                }}
                                            >
                                                +
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button
                                                type="button"
                                                className="btn-round text-2xl"
                                                onClick={() => {
                                                    dispatch(decrement(item))
                                                }}
                                            >
                                                -
                                            </button>
                                        </div>
                                        <p>Rs.{item.price}</p>
                                        <button className="btn-sm-pink">
                                            Remove
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex justify-center pb-4">
                            <button className="btn-pink">Order Now</button>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {/* <p>{product.name}</p> */}
                        {/* <p>({cartItems})</p> */}
                    </div>
                    {/* {products.map((el) => {
                    return (
                        <>
                            <div className="flex gap-2">
                                <p>{product.name}</p>
                                <p>({cartCount})</p>
                            </div>
                        </>
                    );
                })} */}
                </div>
            </div>
        </>
    );
}
