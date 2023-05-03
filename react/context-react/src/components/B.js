import React from "react";
import { Language } from "..";

const B = () => {
  return (
    <>
    <Language.Consumer>{(languageNm)=>{
        return(
            <>
            <h1>This is component B in {languageNm}</h1>
            </>
        )
    }}</Language.Consumer>
    
    
    </>
  );
};

export default B;
