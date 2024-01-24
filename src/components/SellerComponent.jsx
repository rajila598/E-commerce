import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const SellerComponent = ({ role, children }) => {
    let user = useSelector((store) => store.user.value);
    if (user?.role == "seller") {

        return (
            <>
                {children}
            </>
        )
    }
    return <Navigate to="/" />
}

export default SellerComponent