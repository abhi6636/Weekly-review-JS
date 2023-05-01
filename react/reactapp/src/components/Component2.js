import React from 'react';
import Component1, { altername } from './Component1';

const Component2 =()=>{
    return(
        <>
        <Component1/>
       <h1> <h1>{`I AM ${altername}`}</h1> </h1>
        </>
    )

}

const name = "Bruce Wayne"
const city = "Gotham"

export default Component2;
export {name,city}