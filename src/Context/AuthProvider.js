import React, { createContext } from 'react';
import useForData from '../hook/useForData';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useForData();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;