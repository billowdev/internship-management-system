import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";

const Teacher = () => {
    const [name, setName] = useState("Akkarapon Phikulsri");
    const [studentId, setStudentId] = useState("63102105112");
    const [program, setProgram] = useState("วิทยาการคอมพิวเตอร์");
    const [phone, setPhone] = useState("0983213212");

    useEffect(()=>{
        
    }, [])
    return (
       <>
           <div>Hello student list</div>
           <Outlet />
       </>
    );
};
export default Teacher;
