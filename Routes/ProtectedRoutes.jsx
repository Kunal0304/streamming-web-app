import React from 'react'
// import {useSelector} from "react-redux"
import {Navigate, useLocation, Outlet} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    console.log(children, "aaaaaaaaaaaaaaaaa")
    // const user = useSelector((state) => state.user);
    // let location = useLocation();
       const loginData = localStorage.getItem('login')
    if(!loginData) {
        return <Navigate to="/" />
    }
    // else{
    //     return <Outlet/>
    // }
 return children

};

export default ProtectedRoute;