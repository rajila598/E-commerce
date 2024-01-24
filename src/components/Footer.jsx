import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className="bg-[#EEEFFB] container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                    <div className="flex flex-col gap-3 justify-center lg:col-span-2 pr-3">
                        <p className="text-4xl font-bold">Hekto</p>
                        <div className="flex">
                            <input type="text" className="bg-white p-2 w-72" placeholder="Enter Email Address" />
                            <button className="btn-pink rounded-sm">Sign Up</button>
                        </div>
                        <p className="text-[#8A8FB9]">Contact Info</p>
                        <p className="text-[#8A8FB9]">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div className="">
                        <p className="text-xl font-semibold mb-6">Categories</p>
                        <ul className="unique-li font-normal flex flex-col gap-2">
                            <li>Laptops & Computers</li>
                            <li>Cameras & Photography</li>
                            <li>Smart Phones & Tablets</li>
                            <li>Video Games & Consoles</li>
                            <li>Waterproof Headphones</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="text-xl font-semibold mb-6">Customer Care</p>
                        <ul className="unique-li font-normal flex flex-col gap-2">
                            <li>My Account</li>
                            <li>Discount</li>
                            <li>Returns</li>
                            <li>Orders History</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="text-xl font-semibold mb-6">Pages</p>
                        <ul className="unique-li font-normal flex flex-col gap-2">
                            <li>Blog</li>
                            <li>Browse the Shop</li>
                            <li>Category</li>
                            <li>Pre-Built Pages</li>
                            <li>Visual Composer Elements</li>
                            <li>WooCommerce Pages</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="bg-[#E7E4F8] py-2 flex flex-col sm:flex-row justify-around items-center">
                    <p className="text-[#9DA0AE]">©Webecy - All Rights Reserved</p>
                <div className="flex gap-3">
                    <FaFacebookSquare className="text-[#151875]"/>
                    <FaInstagramSquare className="text-[#151875]"/>
                    <FaTwitterSquare  className="text-[#151875]"/>
                </div>
            </div>
        </>
    )
}

export default Footer