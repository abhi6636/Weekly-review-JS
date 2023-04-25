import React, { useEffect, useState } from "react";

function Fetchdata() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data))
    },[])

  return <div>
    <h1>Api Data</h1>
    {data.map((data)=>
    <div key={data.id}>
        <h3>{data.name}</h3>
        <h4>{data.email}</h4>
    </div>
    )}

  </div>;
}

export default Fetchdata;
