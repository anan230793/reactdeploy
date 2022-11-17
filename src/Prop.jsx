import React from "react";
const Course=({lname,duration,details,fees,cls})=>{
    return(
        <>
            <h1>Language Name : {lname}</h1>
            <h2>Duration : {duration}</h2>
            <h4 >Details : {details}</h4> 
            <h3 >Fees : {fees}</h3>
            <h3>Class : {cls}</h3>
            <hr/>
        </>
    )
}
export default Course;
