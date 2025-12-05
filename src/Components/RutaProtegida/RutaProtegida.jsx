import { useAuthContext } from "../context/useAuthContext"
import { Children } from "react";

export const RutaProtegida = ({children}) => {
    const {user} = useAuthContext();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return children;
};