import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ShopLeftSidebar from "./pages/ShopLeftSidebar";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp";
import { useEffect, useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "./app/slice/userSlice";
import { setCart } from "./app/slice/cartSlice";
import ProductDetail from "./pages/products/ProductDetail";
import Cart from "./pages/Cart";
import UpsertProduct from "./pages/products/UpsertProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import { PacmanLoader } from 'react-spinners';
import { SellerProducts } from './pages/products/SellerProducts';


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const App = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    useEffect(() => {
        let access_token = localStorage.getItem("access_token");
        if (access_token) {
            axios
                .get(
                    "https://ecommerce-sagartmg2.vercel.app/api/users/get-user",
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                        },
                    },
                )
                .then((res) => {
                    setIsLoading(false);
                    dispatch(setUser(res.data)); // populatate user data in redux
                })
                .catch((err) => {
                    toast.error("error");
                    setIsLoading(false);
                });
        
        } else {
            setIsLoading(false);
        }
        let cartData = JSON.parse(localStorage.getItem("cartItems"));
        if(cartData){
            dispatch(setCart(cartData));
        }
    }, []);
    const [isUser, setIsUser] = useState(null);
    return (
        <>
            {isLoading ? (
                <div className="flex h-screen items-center justify-center">
                    {/* <ClipLoader
                color={color}
                loading={isLoading}
                cssOverride={override}
                size={150}
                aria-label="Loader Spinner"
                data-testid="loader"
              /> */}
              <PacmanLoader color="#36d7b7" /></div>
            ) : (
                <>
                    <Header user={isUser} setuser={setIsUser} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="left" element={<ShopLeftSidebar />} />
                        <Route
                            path="login"
                            element={<Login setIsUser={setIsUser} />}
                        />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="products">
                            {/* <Route path="" element={<Products />} /> */}
                            <Route path=":slug" element={<ProductDetail />} />
                        </Route>
                        <Route
                            path=""
                            element={<ProtectedRoute role="buyer" />}
                        >
                            <Route path="cart" element={<Cart />} />
                        </Route>
                        <Route
                            path=""
                            element={<ProtectedRoute role="seller" />}
                        >
                            <Route path="seller" element={<SellerProducts />} />
                            <Route path="add" element={<UpsertProduct />} />
                            <Route path="edit/:_id" element={<UpsertProduct />} />
                        </Route>
                    </Routes>
                    <Footer />
                </>
            )}
            <ToastContainer position theme />
        </>
    );
};

export default App;
