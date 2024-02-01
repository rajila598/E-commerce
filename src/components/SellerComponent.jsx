/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { SELLER } from "../constants/role";


const SellerComponent = ({ role, children }) => {
    let user = useSelector((store) => store.user.value);
    if (user?.role == SELLER) {

        return (
            <>
                {children}
            </>
        )
    }
    // return <Navigate to="/" />
}

export default SellerComponent