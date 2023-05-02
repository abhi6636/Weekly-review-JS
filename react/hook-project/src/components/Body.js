import React, { useState } from "react";

const Body =()=>{

    const [textData,setTextData] = useState("")
    const [preview,setPreview] = useState("")

    return(
       
        <>
        <div className="container my-5 text-center">

            <textarea cols="70" rows="10" className="w-100" placeholder="Enter Data" value={textData} onChange={(e)=>{
                setTextData(e.target.value)
            }}></textarea>

            <button className="btn btn-success m-5" onClick={()=>{
                setPreview(textData);
            }}>Preview</button>
            <button className="btn btn-danger m-2" onClick={()=>{
                setTextData("")
                setPreview("")
            }}>Clear Data</button>

            <h4 className="text-success">{preview}</h4>
            <p className="text-danger">{textData.length} charecters are present in this text area</p>
            <p className="text-primary">{textData.split(" ").length} words are present in text area</p>

        </div>
        </>
    )
}

export default Body;