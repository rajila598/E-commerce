// importing components
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import TrendingCard from "../components/TrendingCard";
import TopCategory from "../components/TopCategory";
import Blog from "../components/Blog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


//importing images
import lamp from "../assets/images/lamp.png";
import sofa from "../assets/images/banner-sofa.png";
import sofa1 from "../assets/images/sofa1.png";
import sofa2 from "../assets/images/sofa2.png";
import sofa3 from "../assets/images/sofa3.png";
import sofa4 from "../assets/images/sofa4.png";
import pagination2 from "../assets/images/pagination2.png";
import pagi from "../assets/images/promotional page nav.png";

import freedelivery from "../assets/images/free-delivery1.png";
import cashback from "../assets/images/cashback1.png";
import hourssupport from "../assets/images/24-hours-support1.png";
import premiumquality from "../assets/images/premium-quality1.png";
import uniquesofa from "../assets/images/Unique Sofa.png";
import TrendingClock from "../assets/images/TrendingClock.png";
import TrendingTable from "../assets/images/TrendingTable.png";
import chair1 from "../assets/images/Executive Seat Chair1.png";
import chair2 from "../assets/images/ExecutiveSeatChair2.png";
import chair3 from "../assets/images/ExecutiveSeatChair3.png";
import discountSofa from "../assets/images/disSofa.png";
import tag from "../assets/images/tags.png";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import pagen from "../assets/images/pagen.svg";
import { useEffect, useState } from "react";
// import pagenactive from "../assets/images/pagenactive.svg"
// import { useState } from "react";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [latestProducts, setLatestProducts] = useState([])
    const [trendingProducts, setTrendingProducts] = useState([])
    useEffect(() => {
        setIsLoading(true)
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
            .then((res) => {
                setTrendingProducts(res.data.data)
                setIsLoading(false)
            })
            .catch(err => {

                console.log(err);
            })
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products?per_page=6")
            .then((res) => {
                setLatestProducts(res.data.products)
            })
            .catch(err => {

                console.log(err);
            })

    }, [])

    const settings = {
        customPaging: function () {
            return (
                <a>
                    <img src={pagen} />
                </a>
            );
        },
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    };

    return (
        <>
            {

                <>
                    {/* banner */}
                    <div className="h-[650px] w-full bg-background">

                        <Slider {...settings}>
                            <div>
                                <div className="flex">
                                    <img src={lamp} alt="" className="xl:h-92 hidden h-72 lg:block" />
                                    <div className="flex flex-col items-center justify-center gap-4 p-10 md:items-start">
                                        <p className="text-secondary font-bold capitalize font-josefin">
                                            best furniture for your castle...
                                        </p>
                                        <p className="text-5xl capitalize text-black font-josefin font-bold">
                                            new furniture collection trends in 2020
                                        </p>
                                        <p className="text-gray font-bold">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                                            quaerat hic reprehenderit laudantium quis quo laboriosam.
                                        </p>
                                        <button className="btn-pink">Shop Now</button>
                                    </div>
                                    <img
                                        src={sofa}
                                        alt=""
                                        className="hidden w-[350px] pt-20 lg:block xl:w-[500px]"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <img src={lamp} alt="" className="xl:h-92 hidden h-72 lg:block" />
                                    <div className="flex flex-col items-center justify-center gap-4 p-10 md:items-start">
                                        <p className="text-secondary font-bold capitalize font-josefin">
                                            best furniture for your castle...
                                        </p>
                                        <p className="text-5xl capitalize text-black font-josefin font-bold">
                                            new furniture collection trends in 2020
                                        </p>
                                        <p className="text-gray font-bold">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                                            quaerat hic reprehenderit laudantium quis quo laboriosam.
                                        </p>
                                        <button className="btn-pink">Shop Now</button>
                                    </div>
                                    <img
                                        src={sofa}
                                        alt=""
                                        className="hidden w-[350px] pt-20 lg:block xl:w-[500px]"
                                    />
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* product display */}
                    <div className="container-padding grid grid-cols-1 place-content-center gap-7 md:grid-cols-2 lg:grid-cols-4">
                        {isLoading && [1, 2, 3, 4].map((el) => {
                            return (
                                <div className="" key={el._id}>
                                    <Skeleton height={200} />
                                    <Skeleton count={3} />
                                </div>
                            )
                        })}
                        {
                            trendingProducts.map((el) => {
                                return (

                                    <Card key={el._id} product={el} />
                                )
                            })
                        }

                    </div>

                    {/*  */}
                    <div className="flex justify-center">
                        <img src={pagination2} alt="" />
                    </div>

                    {/* latest products */}
                    <div className="container-padding flex flex-col items-center gap-4 relative">

                        <p className="title">Latest Products</p>
                        <ul className="flex gap-2 sm:gap-3 md:gap-10 lg:gap-20">
                            <li className="latest-li">New Arrival</li>
                            <li className="latest-li">Best Seller</li>
                            <li className="latest-li">Featured</li>
                            <li className="latest-li">Special Offer</li>
                        </ul>
                        <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
                            {isLoading && [1, 2, 3, 4].map((el) => {
                                return (
                                    <div className="" key={el._id}>
                                        <Skeleton height={200} />
                                        <Skeleton count={3} />
                                    </div>
                                )
                            })
                            }
                            {
                                latestProducts.map((product) => {
                                    return (

                                        <Card2 key={product._id} product={product} />
                                    )
                                })
                            }

                        </div>
                    </div>

                    {/* What shopex offer */}
                    <div className="container-padding flex flex-col items-center gap-5 xl:px-40">
                        <p className="title">What Shopex Offer!</p>
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="flex flex-col items-center gap-4 bg-white p-8 drop-shadow-lg">
                                <img src={freedelivery} alt="" className="h-16 w-16" />
                                <p className="text-primary text-xl font-bold">24/7 Support</p>
                                <p className="text-center font-bold text-[#1A0B5B4D]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Similique beatae possimus quod dicta nesciunt pariatur.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-4 bg-white p-8 drop-shadow-lg">
                                <img src={cashback} alt="" className="h-16 w-16" />
                                <p className="text-primary text-xl font-bold">24/7 Support</p>
                                <p className="text-center font-bold text-[#1A0B5B4D]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Similique beatae possimus quod dicta nesciunt pariatur.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-4 bg-white p-8 drop-shadow-lg">
                                <img src={premiumquality} alt="" className="h-16 w-16" />
                                <p className="text-primary text-xl font-bold">24/7 Support</p>
                                <p className="text-center font-bold text-[#1A0B5B4D]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Similique beatae possimus quod dicta nesciunt pariatur.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-4 bg-white p-8 drop-shadow-lg">
                                <img src={hourssupport} alt="" className="h-16 w-16" />
                                <p className="text-primary text-xl font-bold">24/7 Support</p>
                                <p className="text-center font-bold text-[#1A0B5B4D]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Similique beatae possimus quod dicta nesciunt pariatur.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Unique Featues */}
                    <div className="container-padding w-full bg-[#F1F0FF]">
                        <div className="justify-center gap-10 p-10 lg:flex lg:p-0">
                            <div className="">
                                <img src={uniquesofa} alt="" className="w-[500px]" />
                            </div>
                            <div className="flex flex-col justify-center gap-4 md:gap-8">
                                <p className="text-primary text-2xl font-bold md:text-4xl">
                                    Unique Features Of latest & Trending Poducts
                                </p>
                                <ul className="list-disc">
                                    <li>
                                        <p className="unique-li">
                                            All frames constructed with hardwood solids and laminates
                                        </p>
                                    </li>
                                    <li>
                                        <p className="unique-li">
                                            Reinforced with double wood dowels, glue, screw - nails corner
                                            blocks and machine nails
                                        </p>
                                    </li>
                                    <li>
                                        <p className="unique-li">
                                            Arms, backs and seats are structurally reinforced
                                        </p>
                                    </li>
                                </ul>
                                <div className="flex gap-3">
                                    <button className="btn-pink">Add To Cart</button>
                                    <ul>
                                        <li>
                                            <p className="text-primary text-sm font-bold">
                                                B&B Italian Sofa
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-primary text-sm">$32.00</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trending Products */}
                    <div className="container-padding flex flex-col items-center gap-10">
                        <p className="title">Trending Products</p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {
                                trendingProducts.map((el) => {
                                    return (
                                        <>
                                            <TrendingCard key={el._id} product={el} />

                                        </>
                                    )
                                })
                            }

                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            <div className="bg-[#FFF6FB] p-5">
                                <p className="text-primary text-2xl font-bold">
                                    {" "}
                                    23% off in all products
                                </p>
                                <Link to={"/"} className="font-semibold text-[#FB2E86] underline">
                                    Shop Now
                                </Link>
                                <div className="flex justify-end">
                                    <img src={TrendingClock} alt="" className="w-40" />
                                </div>
                            </div>
                            <div className="bg-[#EEEFFB] p-5">
                                <p className="text-primary text-2xl font-bold">
                                    {" "}
                                    23% off in all products
                                </p>
                                <Link to={"/"} className="font-semibold text-[#FB2E86] underline">
                                    View Collection
                                </Link>
                                <div className="flex justify-end">
                                    <img src={TrendingTable} alt="" className="w-40" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex justify-center bg-[#F5F6F8]">
                                        <img src={chair1} alt="" className="w-20" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-primary font-medium">Executive Seat Chair</p>
                                        <p className="text-primary text-xs line-through">$32.00</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex justify-center bg-[#F5F6F8]">
                                        <img src={chair2} alt="" className="w-20" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-primary  font-medium">Executive Seat Chair</p>
                                        <p className="text-primary text-xs line-through">$32.00</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex justify-center bg-[#F5F6F8]">
                                        <img src={chair3} alt="" className="w-20" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-primary  font-medium">Executive Seat Chair</p>
                                        <p className="text-primary text-xs line-through">$32.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Discount Item */}
                    <div className="container-padding flex flex-col items-center gap-5">
                        <p className="title">Discount Item</p>
                        <ul className="flex gap-2 sm:gap-4">
                            <li className="latest-li">Wood Chair</li>
                            <li className="latest-li">Plastic Chair</li>
                            <li className="latest-li">Sofa Collection</li>
                        </ul>
                        <div className="grid  grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col justify-center gap-5 pl-11 md:pl-0">
                                <p className="title">20% Discount of All Products</p>
                                <p className="text-xl text-[#FB2E86]">Eams Sofa Compact</p>
                                <p className="text-[#B7BACB]">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Recusandae nostrum ullam consequatur molliti
                                </p>
                                <ul className="grid list-image-[url(./assets/images/checkmark.png)] grid-cols-2 gap-3">
                                    <li className="text-[#B8B8DC]">Material expose like metals</li>
                                    <li className="text-[#B8B8DC]">Simple neutral colours.</li>
                                    <li className="text-[#B8B8DC]">
                                        Clear lines and geomatric figures
                                    </li>
                                    <li className="text-[#B8B8DC]">Material expose like metals</li>
                                </ul>
                                <button className="btn-pink">Shop Now</button>
                            </div>
                            <div className="">
                                <img src={discountSofa} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Top Categories */}
                    <div className="container-padding">
                        <p className="title mb-3 text-center">Top Categories</p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <TopCategory image={sofa1} />
                            <TopCategory image={sofa2} />
                            <TopCategory image={sofa3} />
                            <TopCategory image={sofa4} />
                        </div>
                        <div className="flex justify-center">
                            <img src={pagi} alt="" />
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="container-padding flex h-[462px] w-full flex-col items-center justify-center gap-5 bg-[url(./assets/images/banner-2.png)] bg-cover">
                        <p className="title">Get Latest Update By Subscribe 0ur Newslater</p>
                        <button className="btn-pink">Shop Now</button>
                    </div>

                    {/*  */}
                    <div className="container-padding flex justify-center">
                        <img src={tag} alt="" />
                    </div>

                    {/* Latest Blog */}
                    <div className="container-padding flex flex-col items-center gap-10">
                        <p className="title">Latest Products</p>
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                            <Blog image={blog1} />
                            <Blog image={blog2} />
                            <Blog image={blog3} />
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Home;
