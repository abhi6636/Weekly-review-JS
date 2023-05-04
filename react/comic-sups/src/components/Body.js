import React, { useState } from "react";
import Sups from "./Sups";

const Body = () => {
    const data = [
        {
        id: 1,
        name :"Clark Kent",
    },
    {
        id: 2,
        name :"Bruce Wayne",
    },
    {
        id: 3,
        name :"Hal Jordan",
    },
    {
        id: 4,
        name:"Barry Allen",
    },
    {
        id: 5,
        name:"Arthur"
    }
]

const [sup,setSup] = useState(data);
  return (
    <>
    <div className="text-center">
        <h1> <h1-6>Comic<span class="badge bg-dark">con</span></h1-6> </h1>
        <p>Number of sups:<span class="badge rounded-pill text-bg-dark">{sup.length}</span></p>
        <Sups super={sup}/>
        <button type="button" class="btn btn-outline-success m-3">Get List</button>
        <button type="button" class="btn btn-outline-danger m-3">Clear List</button>
        
        
        </div>
    </>
  );
};

export default Body;
