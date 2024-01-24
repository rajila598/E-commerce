
const TrendingCard = ({product}) => {
    return (
        <>
            <div className="h-auto drop-shadow-xl bg-white p-2">
                <div className="bg-[#F6F7FB] h-60 flex items-center justify-center">
                    <img src={product.image} alt="" className="h-60"/>
                </div>
                <div className="flex flex-col items-center gap-2 md:my-4">
                    <p className="text-secondary font-bold">{product.name}</p>
                    <div className="flex gap-2 items-end">
                        <p className="text-primary text-sm">${product.price}</p>
                        <p className="line-through text-xs text-[#ACABC3]">$42.00</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TrendingCard