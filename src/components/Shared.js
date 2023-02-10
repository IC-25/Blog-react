import React from  "react";
import Home from "../pages/home/Home";
import {Outlet }  from  "react-router-dom"

const  Shared  = ()=>{

    return (
        <div>
        <Home/>
        <Outlet /> 
        </div>
    )
}

export default Shared;
