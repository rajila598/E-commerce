import axios from "axios";
import { useEffect, useState } from "react";
import Card2 from "../../components/Card2";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchError, setSearchError] = useState(false);
    useEffect(() => {
        let searchTerm = searchParams.get("searchTerm") || "";
        axios
            .get(
                `https://ecommerce-sagartmg2.vercel.app/api/products?search_term=${searchTerm}`,
            )
            .then((res) => {
                if(res.data == {}){
                    setSearchError(res)
                }
                setProducts(res.data.products);
                
            })
            .catch((err) => {
                // setSearchError(false)
                console.log("-------------", err);
            });
    }, [searchParams]);
    return (
        <>
            <div className="flex-center container">
                <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
                    {
                        searchError? <span>No Products Found</span> :
                        products.map((el) => {
                            return <Card2 key={el._id} product={el} />;
                            
                        })
                    }
                </div>
            </div>
        </>
    );
}
