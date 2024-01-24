import { TfiLayoutGrid2Alt, TfiMenuAlt, TfiSearch } from "react-icons/tfi";
import ReactStars from "react-rating-stars-component";
import ShopCard from "../components/ShopCard";
import { useEffect, useState } from "react";
import axios from "axios";
import BreadCrumb from "../components/BreadCrumb";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

const ShopLeftSidebar = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products")
        .then((res) => {
            setProduct(res.data.products);
        })
    })
    let brand = ["Coaster Furniture", "Fusion Dot High Fashion", "Unique Furniture Restor", "Dream Furniture Flipping", "Young Repurposed", "Green DIY furniture"]
    let offer = [
        {
            percent: 20,
            off: "Cashback"
        },
        {
            percent: 5,
            off: "Cashback Offer"
        },
        {
            percent: 25,
            off: "Discount Offer"
        }
    ]
    let rating = [2341, 1726, 258, 25]
    let categories = ["Prestashop", "Magento", "Bigcommerce", "osCommerce", "3dcart", "Bags", "Accessories", "Jewellery", "Watches"]
    let filter = [
        {
            start: 0.00,
            end: 150.00
        },
        {
            start: 150.00,
            end: 350.00
        },
        {
            start: 150.00,
            end: 504.00
        },
        {
            start: 450.00,
            end: "+"
        }
    ]

    return (
        <>
            {/* <div className="w-full bg-background h-72 flex-center">
                <div className="container flex-center flex-col gap-2 items-start">
                    <h1 className="title text-black">Shop Left Sidebar</h1>
                    <p>Home.Pages.<span className="text-secondary">ShopLeftSidebar</span></p>
                </div>
            </div> */}
            <BreadCrumb title="Shop Left Sidebar" links={[
                {title: "Home", url:"/"},
                {title: "Products", url: "/products"},
                {title: "ShopLeftSidebar", url: "#"}
            ]}/>
            <div className="container">
                <div className="flex justify-between mt-28">
                    <div className="">
                        <p className="title-secondary">Ecommerce Accesories and Fashion Item</p>
                        <p>About 9,620 results (0.62seconds)</p>
                    </div>
                    <div className="flex gap-2 text-primary items-center">
                        <p>Per page:</p>
                        <input type="text" className="w-20 border h-8" />
                        <p>Sort by:</p>
                        <select className="h-8 px-1 bg-transparent border text-gray">
                            <option value="">Best Match</option>
                        </select>
                        <p>View:</p>
                        <TfiLayoutGrid2Alt />
                        <TfiMenuAlt />
                        <input type="text" className="border h-8 w-20" />
                    </div>
                </div>
                <div className="flex gap-2 mt-20">
                    <div className="sidebar">
                        <div className="my-8">
                            <p className="text-primary underline font-bold">Product Brand</p>
                            {
                                brand.map((el) => {
                                    return <div className="flex gap-2" key={"id"}>
                                        <input type="checkbox" />
                                        <p className="text-gray">{el}</p>
                                    </div>
                                })
                            }

                        </div>
                        <div className="my-8">
                            <p className="text-primary underline font-bold">Discount Offer</p>
                            {
                                offer.map((el) => {
                                    return <div className="flex gap-2" key={"id"}>
                                        <input type="checkbox" />
                                        <p className="text-gray">{el.percent}% {el.off}</p>
                                    </div>
                                })
                            }
                        </div>
                        <div className="my-8">
                            <p className="text-primary underline font-bold">Rating Item</p>
                            {
                                rating.map((el) => {
                                    return <div className="flex gap-2 items-center" key={"id"}>
                                        <input type="checkbox" />
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />({el})
                                    </div>
                                })
                            }

                        </div>
                        <div className="my-8">
                            <p className="text-primary underline font-bold">Categories</p>
                            {
                                categories.map((el) => {
                                    return <div className="flex gap-2" key={"id"}>
                                        <input type="checkbox" />
                                        <p className="text-gray">{el}</p>
                                    </div>
                                })
                            }
                        </div>
                        <div className="my-8">
                            <p className="text-primary underline font-bold">Price Filter</p>
                            {
                                filter.map((el) => {
                                    return <div className="flex gap-2" key={"id"}>
                                        <input type="checkbox" />
                                        <p className="text-gray">${el.start} - ${el.end}</p>
                                    </div>
                                })
                            }
                            <div className="flex items-center border w-max p-2 rounded-md">
                                <input type="text" placeholder="$10.00 - 20000$" className="focus:outline-none" />
                                <TfiSearch />
                            </div>

                        </div>
                        <div className="my-8">
                            <p className="text-primary underline font-bold">Filter By Color</p>
                        </div>
                    </div>
                    <div className="ml-8 my-8">
                        {
                            product.map((el) => {
                                return (
                                    <ShopCard product={el} key={el._id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopLeftSidebar