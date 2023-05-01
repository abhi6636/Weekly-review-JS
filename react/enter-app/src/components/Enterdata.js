import React, { useState } from "react";

function Enterdata() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [newEntry, setNewEntry] = useState([])
  

  const submitData=(e)=>{
    e.preventDefault()
    const newData = {newName:name,newPhone:phone,newEmail: email,newPassword: password}
    setNewEntry([...newEntry,newData])
    setName("")
    setPhone("")
    setEmail("")
    setPassword("")
  }
  return (
    <>
<form onSubmit={submitData}>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your phoneNumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your phoneNumber"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Save Data</button>
      </form>
      <div>
        {newEntry.map((value)=>{
          return(
            <>
          <p>Hi there my name is {value.newName} My Phone Number is {value.newPhone} mail id is {value.newEmail} </p>
            </>
          )
        })}
      </div>
    </>
  );
}

export default Enterdata;
