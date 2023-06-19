import React from "react";
import { useState } from "react";
import "./index.css";

let date= new Date().toLocaleDateString();
let startTime= 0;
let endtime = 0;
let id =1;
let clickbutton1;
function Panel(){

 let[count , setCount] = useState(0);   

 function onclickreset(){
  clickbutton1 = document.getElementById('clickbutton').disabled= true;
   const num =Math.floor(Math.random() * (120 - 30 + 1)) + 30;
    startTime= new Date().toLocaleTimeString();
   setCount(num);
   startTimer(num);
 }

 const startTimer = (num) => {
    const Interval = setInterval(() => {
        setCount(count => count - 1)
        num=num-1
        if(num===0){
            clearInterval(Interval);
             endtime = new Date().toLocaleTimeString();
             form();
             id=id+1;
             clickbutton1 = document.getElementById('clickbutton').disabled= false;
         }
    }, 1000)
 }

 const form=()=>{
      const tbodyEL = document.querySelector("tbody");
      tbodyEL.innerHTML +=`
      <tr>
      <th> ${id}</th>
      <th>${date} ${ startTime}</th>
      <th>${endtime}</th>
    </tr>
      `;
 }


  return (
    <>
       <div className="counter">
        <div className="count">
        <h1>{count}</h1>
        </div> 
        <div className="btn">   
        <button id="clickbutton" onClick={()=>{onclickreset();}} >Start Session </button>
        </div>
        </div>
        <form >
            <table>
              <thead>
                <tr>
                  <th>Session Id</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
        </form>
    </>
  )

}

export default Panel;
