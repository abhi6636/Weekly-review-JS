import React, { useState } from "react";

const App=()=>{

  const [darkmode,setDarkmode] = useState(
    {
      color:"#000",
      backgroundColor:"#fff"
    }
  )

  const dark=()=>{
    if(darkmode.color==="#000"){
      setDarkmode({
        color:"#fff",
        backgroundColor:"#000"
     
    })
} else{
  setDarkmode({
    color:"#000",
    backgroundColor:"#fff"
 
})
}
 
  }
  return(
    <>
    <div className="fluid-container text-center">
      <button className="btn btn-outline-dark my-5" onClick={dark}>Dark Mode</button>
      <div className="text-center"style={darkmode} >

      <div class="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Dark Mode</h1>
    <p className="lead">This is a simple darkmode app.</p>
  </div>
</div>

<div class="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Dark Mode</h1>
    <p className="lead">This is a simple darkmode app.</p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Dark Mode</h1>
    <p className="lead">This is a simple darkmode app.</p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Dark Mode</h1>
    <p className="lead">This is a simple darkmode app.</p>
  </div>
</div>
      </div>
    </div>
    </>
  )
}

export default App