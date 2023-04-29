import React, { useState } from "react";

const Enterdata = () => {
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [newEntry,setNewEntry] = useState("")

    
  return <div className="container">
    <form action="">
        <label htmlFor="Name">Name</label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Name" /> <br />
        <label htmlFor="">Phone Number</label>
        <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter Your Phone Number" />
        <button onClick={()=>{
            
        }}>Submit</button>
    </form>
  </div>;
};

export default Enterdata;
