import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import BreadCrumb from "../components/BreadCrumb"

export default function SignUp() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
            name: e.target.uname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value
        })
            .then(res => {
                //when status code in 2
                toast("Sign in successful")
                navigate("/login")
            })
            .catch(err => {
                //whwen status code 3,4,5
                let errorMsg = ""
                err.response.data.errors.forEach(el => {
                    errorMsg += `${el.param}: ${el.msg} , `
                })
                toast.error(errorMsg)
            })
    }
    return (
        <>

            <BreadCrumb title="Sign Up" links={[
                { title: "Home", url: "/" },
                { title: "Sign Up", url: "#" }
            ]} />
            <div className="container flex-center my-28">
                <div className="w-[544px] h-[474px] bg-white shadow-md flex-center flex-col gap-2">
                    <p className="title">Sign Up</p>
                    <p className="text-gray">Please fill in the detail below to sign in.</p>
                    <form action="" onSubmit={handleSubmit} className="flex-center flex-col gap-2 items-start">
                        <input type="text" placeholder="Username" className="border w-96 p-2" name="uname" />
                        <input type="text" placeholder="Email Address" className="border w-96 p-2" name="email" />
                        <input type="password" placeholder="Password" className="border w-96 p-2" name="password" />
                        <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">
                            Role
                        </label>
                        <select name="role" id="">
                            <option value="">Select</option>
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                        <button className="bg-secondary p-2 text-white w-full">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}
