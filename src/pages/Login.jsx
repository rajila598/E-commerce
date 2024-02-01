import axios from "axios"
import BreadCrumb from "../components/BreadCrumb"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../app/slice/userSlice"


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
            email: event.target.email.value,
            password: event.target.password.value,
        })
            .then(res => {
                //when status code in 2
                toast("Login successful", {position: "top-right", theme: "light"})
                navigate("/")
                dispatch(setUser(res.data.user))
                localStorage.setItem("access_token", res.data.access_token)

            })
            .catch(err => {
                // whwen status code 3,4,5
                if (err.response?.status === 401) {
                    console.log(err);
                    return toast.error("Invalid credentials", {position: "top-right", theme: "colored"})

                }
                toast.error("Something went Wrong. Please try again later", {position: "top-right", theme: "colored"})
                // toast.error("Inavld creadentails")
                console.log(err);
            })
    }
    return (
        <>
            <BreadCrumb title="Login" links={[
                { title: "Home", url: "/" },
                { title: "Login", url: "#" }
            ]} />
            <div className="container flex-center my-28">
                <div className="w-[544px] h-[474px] bg-white shadow-md flex-center flex-col gap-2">
                    <p className="title">Login</p>
                    <p className="text-gray">Please Login using account detail below.</p>
                    <form action="" onSubmit={handleSubmit} className="flex-center flex-col gap-2 items-start">
                        <input type="text" placeholder="Email Address" className="border w-96 p-2" name="email"/>
                        <input type="password" placeholder="Password" className="border w-96 p-2" name="password" value={"password"} />
                        <p className="text-gray">Forgot your password?</p>
                        <button className="bg-secondary p-2 text-white w-full">Sign In</button>
                        <p className="text-gray">
                            {"Don't have an Account?"}
                            <Link to={'/signup'} className="text-primary underline">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login