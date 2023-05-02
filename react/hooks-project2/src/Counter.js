import React, { useState } from "react";

const Counter =()=>{

    const [number,setNumber]  = useState(0)



    return(

        <>
        <div className="container my-5">
            <div className="text-center">
                <h1 className="text-dark">{number}</h1>
                <button className="btn btn-warning" onClick={()=>{
                    setNumber(number+1)
                }}>Increase</button>
                <button className="btn btn-danger" onClick={()=>{
                    if(number>1){
                    setNumber(number-1)
                    }
                    else{
                        setNumber(0)
                        alert("You have reached the limit")
                    }
                }}>Decrease</button>
            </div>
        </div>
        </>
    )
}

export default Counter;