import React, {useState} from "react";
import "./Practice.css"
// import { useState } from "react";




const Practice=()=>{

    //   starter();
    var [vall,setVal]=useState(0);
    var [vall2,setVal2]=useState(0);
    var [vall3,setVal3]=useState(0);

        //   function Second(i){
        //     const place= document.getElementById("main12");
        //         const secondsDegrees=i*6;
        //      place.style.transform=  `rotate(${secondsDegrees}deg)`;
        //     //  "rotate(78deg)";
        //     //  `rotate(${secondsDegrees}deg)`;
    
        // }
        
    
    
    function Starter(val){
    
        // for(let i=0;i<60;i++){
            Waiter(val);
        // }
    
    }
    
      function Waiter(val){
         setTimeout(()=>{
            const seconds = new Date().getSeconds()
            //   vall=vall+6;
    
              const reall=(60/seconds);
              vall=360/reall+180+90;
    
    
    
                   
         
        const place= document.getElementById("main10");
                 place.style.transform=  `rotate(${vall}deg)`;
                 console.log(seconds);
                 setVal(vall);

            //   Starter2(1);
    
    
         }, 1000);
    }
    
    
    function Starter2(val){
    
        // for(let i=0;i<60;i++){
            Waiter2(val);
        // }
    
    }
    
      function Waiter2(val){
         setTimeout(()=>{
            const seconds2 = new Date().getMinutes();
            //   vall=vall+6;
    
              const reall2=(60/seconds2);
              vall2=360/reall2+180+90;
    
    
    
                   
         
        const place= document.getElementById("main11");
                 place.style.transform=  `rotate(${vall2}deg)`;
                 console.log(seconds2);
                 setVal2(vall2);

              
    
    
         }, 1000);
    }
    
    
    function Starter3(val){
    
        // for(let i=0;i<60;i++){
            Waiter3(val);
        // }
    
    }
    
      function Waiter3(val){
         setTimeout(()=>{
            const seconds3 = new Date().getHours();
            //   vall=vall+6;
    
              const reall3=(seconds3/12)*360;
              const temp4=reall3+90+180;
              const hourminute = new Date().getMinutes();
              
      
                const temp=(hourminute/60)*30;
                const temp2=temp+180+90;
                const temp3=temp+reall3+180+90;
       vall3=temp3;
    
                   
         
        const place= document.getElementById("main12");
                 place.style.transform=  `rotate(${vall3}deg)`;
                 console.log(seconds3);
                 setVal(vall3);

              
    
    
         }, 1000);
    }
    
    
        
    
    
    return<>
    <div id="main" className="main">
    
    <div className="main2" id="main2"><div className="main3" id="main2"><div className="main4" id="main2"><div className="main5" id="main2"><div className="main6" id="main2"><div className="main7" id="main2"><div className="main8" id="main2"><div className="main9" id="main2"><div className="needles">
    <div className="main10" id="main10"></div>
    <div className="main11" id="main11"></div>
    <div className="main12" id="main12"></div>
    </div>
    {/* <div className="main92" id="main2"></div> */}
    </div></div></div></div></div></div></div></div>
     
    
    </div>
    <button onClick={Starter(9)}>bj</button>
    <button onClick={Starter2(9)}>bj</button>
    <button onClick={Starter3(9)}>bj</button>
    
    </>
    
    }
    export default Practice;