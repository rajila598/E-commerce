/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { BUYER } from "../constants/role";

const BuyerComponent = ({ role, children }) => {
    let user = useSelector((store) => store.user.value);
    if (user?.role == BUYER) {
        return <>{children}</>;
    }
    // return <Navigate to="/" />;
};

export default BuyerComponent;
