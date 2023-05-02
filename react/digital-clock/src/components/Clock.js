import React, { useState } from "react";


const Clock = ()=>{

    let currentTime = new Date().toLocaleDateString
    console.log(currentTime);
    const [time,setTime] = useState(currentTime)
    return(

        <>
        <div className="container my-5 text-center">
        <h1 className="text-dark">{time}</h1>
        </div>
        </>
    )
}

export default Clock;