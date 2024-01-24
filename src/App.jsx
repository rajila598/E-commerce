import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import ShopLeftSidebar from "./pages/ShopLeftSidebar"
import Login from "./pages/Login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./pages/SignUp"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { setUser } from "./app/slice/userSlice"
import ProductDetail from "./pages/products/ProductDetail"
import Cart from "./pages/Cart"
import AddProducts from "./pages/products/AddProducts"
import ProtectedRoute from "./components/ProtectedRoute"


const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        let access_token = localStorage.getItem("access_token")
        if (access_token) {
            axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
                .then(res => {
                    dispatch(setUser(res.data)) // populatate user data in redux
                })
                .catch(err => {
                    toast.error("error")
                })
        }
    }, [])
    const [isUser, setIsUser] = useState(null);
    return (
        <>
            <Header user={isUser} setuser={setIsUser} />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="left" element={<ShopLeftSidebar />} />
                <Route path="login" element={<Login setIsUser={setIsUser} />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="products">
                    {/* <Route path="" element={<Products />} /> */}
                    <Route path=":slug" element={<ProductDetail />} />
                </Route>
                <Route path="" element={<ProtectedRoute role="buyer" />}>
                    <Route path="cart" element={<Cart />} />
                </Route>
                <Route path="" element={<ProtectedRoute role="seller" />}>
                    <Route path="add" element={<AddProducts />} />
                </Route>

            </Routes>
            <Footer />
            <ToastContainer />
        </>
    )
}

export default App