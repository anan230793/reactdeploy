import React from "react";
const Child=()=>{
    return (
        <>
        <h1>Child component is running</h1>
        <Indore/>
        <Bhopal/>
        </>
    )
    
}
const Indore=()=>{
    return <h1>Indore component is running</h1>
}
const Bhopal=()=>{
    return <h1>Bhopal component is running</h1>
}
export default Child;
export {Indore,Bhopal};