import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetchdata() {
const [data,setData] = useState([])

useEffect(()=>{
    axios
    .get('https://randomuser.me/api/?results=50')
    .then(res=>{
        setData(res.data.results);
    })
    .catch(err=>{
        console.log(err);
    })
},[])

if(!data) return <div>Loading...</div>

  return <div>
    <h1>Data from Api</h1>
    {data.map((datas)=>{
        const {id,name,gender,phone,location,picture} = datas
        return (
            <div key={id.value} >
                
                <img src={picture.medium} alt="photo" />
                <h1>{name.first}</h1>
                <h2>{gender}</h2>
                <h4>{phone}</h4>
                <p>{location.street.name}</p>
             
            </div>
        )
    })}

  </div>;
}

export default Fetchdata;
