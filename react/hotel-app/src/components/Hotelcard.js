import React from "react";
import Cards from "./Cards";
import data from "./Data";



const Hotelcard =()=>{
    return(
        <>
        <h1 className = "text-center">Find a Hotel Near You</h1>

        {data.map((values)=>{
            return(
                <>
                 <div class="container my-5">
        <Cards
        key={values.id}
        img={values.img}
        title={values.title}
        text={values.text}
        btn = {values.btn}
        />
        </div>
                </>
            )
        })}
        </>
    )
}

export default Hotelcard;