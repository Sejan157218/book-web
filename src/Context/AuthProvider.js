import React, { createContext } from 'react';
import useForData from '../hook/useForData';
import useForUserCart from '../hook/useForUserCart';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useForData();
    const userContext=useForUserCart();
    const data={...allContext,...userContext}

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;