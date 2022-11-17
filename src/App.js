import React from "react";
import Course from "./Prop"
const App=()=>{
  return(
    <>
      <Course lname="java" duration="1 year" details="java is a best language" fees="240000" cls="programmers point"/>
      <Course lname="Python" duration="1 year" details="pyhton is a best language" fees="240000" cls="programmers point"/>
      <Course lname="C" duration="3 month" details="c is a basic language" fees="14000" cls="programmers point"/>
      <Course lname="javascript" duration="6 month" details="javascript is a frontend language" fees="140000" cls="programmers point"/>
    </>
  )
}
export default App;
