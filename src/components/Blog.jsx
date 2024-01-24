import pen from "../assets/images/pen.svg"
import calender from "../assets/images/calender.svg"
import { Link } from "react-router-dom"

const Blog = (blog) => {
    return (
        <>
            <div className="h-auto drop-shadow-xl bg-white w-80 rounded-lg group">
                <div className="">
                    <img src={blog.image} alt="" className="rounded-t-lg"/>
                </div>
                <div className="flex flex-col gap-3 p-4">
                    <div className="flex gap-3">
                        <div className="flex gap-2">
                            <img src={pen} alt="" />
                            <p className="text-[#151875] group-hover:text-[#FB2E86] text-sm">SaberAli</p>
                        </div>
                        <div className="flex gap-2 grow">
                            <img src={calender} alt="" />
                            <p className="text-[#151875] group-hover:text-[#FB2E86] text-sm grow">21 August,2020</p>
                        </div>
                    </div>
                    <p className="text-lg text-[#151875] font-bold group-hover:text-[#FB2E86]">Top esssential Trends in 2021</p>
                    <p className="text-[#72718F] ">More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                    <Link to={"/"}>
                        <p className="underline text-[#151875] group-hover:text-[#FB2E86]">Read More</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Blog