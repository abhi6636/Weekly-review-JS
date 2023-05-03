import React, { useState } from "react";  

const Form =()=>{

    const [name,setName] = useState("")
    const [mobile,setMobile] = useState("")
    const [newentry,setNewentry] = useState([])

const submitData=(e)=>{
    e.preventDefault()
    const newData = { name:name, mobile:mobile}
    setNewentry([...newentry,newData])
    setName("")
    setMobile("")


}


    return(
        <>
        <div className="container text-center my-3">
            <form onSubmit={submitData}>
                <div className="my-2">
                    <input type="text" className="w-50 p-1" placeholder="Enter your name" value={name} onChange={(e)=>{
                        setName(e.target.value);
                    }} />
                </div>
                <div>
                    <input type="text" className="w-50 p-1" placeholder="Enter your Mobile Number" value={mobile} onChange={(e)=>{
                        setMobile(e.target.value);
                    }} />
                </div>
                <button className="btn btn-success my-3"> Save Data</button>
            </form>

            
                {newentry.map((value)=>{
                    return(
                        <>
                        <div>
                            <h3 className="text-success">{value.name}</h3>
                            <h3 className="text-success">{value.mobile}</h3>
                            <hr />
                        </div>
                        </>
                    )
                })}
            
        </div>
        </>
    )
}

export default Form;