import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";

const Director = () => {
    useEffect(()=>{
    }, [])
    return (
       <>
           <Outlet />
       </>
    );
};
export default Director;
