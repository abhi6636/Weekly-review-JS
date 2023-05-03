import React from "react";
import { Language,Name } from "../index";

const A = () => {
  return (
    <>

    <Name.Consumer>{(name)=>{
        return(
            <>
            <h1>This is {name}</h1>
            </>
        )
    }}</Name.Consumer>
        <Language.Consumer>{(languageName)=>{
        return(
            <>
            <h1>Hi this is {languageName}</h1>
            </>
        )
    }}</Language.Consumer>
    </>
  );
};

export default A;
