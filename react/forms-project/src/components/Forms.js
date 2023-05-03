import React, { useState } from "react"; 


const Forms=()=>{

    const [name,setName] = useState("")
    const [mobile,setMobile] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [newEntry,setNewEntry] = useState([])

    const submitData =(e)=>{
        e.preventDefault()
        const newData = {name:name,mobile:mobile,email:email,password:password}
        setNewEntry([...newEntry,newData])
        setName("")
        setMobile("")
        setEmail("")
        setPassword("")
    }


    return (
       
        <>
        <div className="container text-center my-3">
        <form onSubmit={submitData}>
                <input type="text" value={name} placeholder="Enter Your Name" className="w-50  p-1 mx-3 my-1"onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                <input type="text" value={mobile} placeholder="Enter Your Mobile Number" className="w-50 p-1 mx-3 my-1"onChange={(e)=>{
                    setMobile(e.target.value);
                }}/>
                <input type="text" value={email} placeholder="Enter Your Email" className="w-50 p-1 mx-3 my-1"onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                <input type="password" value={password} placeholder="Enter Your Password" className="w-50 p-1 mx-3 my-1"onChange={(e)=>{
                    setPassword(e.target.value);
                }}/> <br />
                <button className="btn btn-outline-dark"type="submit">Save Data</button>
            </form>
            <div>
                {newEntry.map((value)=>{
                    return(
                        <>
                        <h1 className="text-success">welcome {value.name}</h1>
                        <h3>{`Your mobile is ${value.mobile} and your email is ${value.email}`}</h3>

                        </>
                    )
                    
                })}
            </div>
        </div>
        </>
    )
}

export default Forms;