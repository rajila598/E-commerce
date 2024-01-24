/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedComponent = ({ role, children }) => {
    let user = useSelector((store) => store.user.value);
    if (user?.role == role) {
        return <>{children}</>;
    }
    return <Navigate to="/" />;
};

export default ProtectedComponent;
