

const TopCategory = (topi) => {
    return (
        <>
            <div className="flex flex-col gap-3 items-center relative group">
                <div className="absolute bottom-[5.7rem] left-[6.2rem] scale-0 group-hover:scale-100">
                    <button className="bg-[#08D15F] px-2 py-1 rounded text-josefin text-white">View Shop</button>
                </div>
                <div className="rounded-full rotate-45 bg-[#31208A0D] w-[200px] h-[200px] flex items-center justify-center group-hover:border-b-8  border-primary-second shadow-xl">
                    <img src={topi.image} alt="" className="w-[100px] h-[100px] -rotate-45" />
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-xl text-primary">Mini LCW Chair</p>
                    <p className="text-primary">$56.00</p>
                </div>
            </div>
        </>
    )
}

export default TopCategory