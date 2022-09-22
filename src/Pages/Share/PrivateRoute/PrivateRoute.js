import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth";


const PrivateRoute = ({ children }) => {
const {user,isLoading}=useAuth();
  let location = useLocation();
  
  if(isLoading){
    console.log("first")
    return <Spinner animation="border" variant="success" />
  }

 else if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;