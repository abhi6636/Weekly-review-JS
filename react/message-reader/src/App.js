import React, { useEffect, useState } from "react";

const App =()=>{

  const [count,setCount] = useState(0)
  useEffect(()=>{
    document.title=`You have ${count} Messages`
  })
  return(
    <>
    <div className="text-center m-5">
      <h1 class="display-2 m-2">Message Counter</h1>
      <h1-4>Number of Messages:<span class="badge bg-dark">{count}</span></h1-4> 
     <br />
      
     <button type="button" class="btn btn-outline-dark m-4" onClick={()=>{
      setCount(count+1)
     }}>Notification</button>
     
   
      
   </div>
    </>
  )
}

export default App;