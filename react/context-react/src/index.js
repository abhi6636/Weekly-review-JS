import React from "react";
import ReactDOM from "react-dom/client";
import { createContext } from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Language = createContext()
const Name = createContext()

root.render(
  <>
  <Language.Provider value={"React JS"}>
    <Name.Provider value={"Javascript"}>
  <App/>  
  </Name.Provider>
  </Language.Provider>
  </>
)
export {Language,Name};