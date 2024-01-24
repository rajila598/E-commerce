/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const BuyerComponent = ({ role, children }) => {
    let user = useSelector((store) => store.user.value);
    if (user?.role == "buyer") {
        return <>{children}</>;
    }
    return <Navigate to="/" />;
};

export default BuyerComponent;
