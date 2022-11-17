import React from "react";
const Lang=()=>{
    var data={
        lname:"java script",
        duration:"6 months",
        details:"We are learning java script",
        fee:"40000",
        cls:"Programmers point"
    };
    return(
        <>
        <h1 id="lr">Language Name :{data.lname}</h1>
        <h2>Duration :{data.duration}</h2>
        <h4>Details :{data.details}</h4>
        <h3>Fees :{data.fee}</h3>
        <h3>Class :{data.cls}</h3>
        <hr/>
        </>
    )
}
export default Lang;
