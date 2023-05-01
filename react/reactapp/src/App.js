import "./App.css";
import Component2 from "./components/Component2";
import Component1 from "./components/Component1";
import { name,city } from "./components/Component2";

function App() {
  return (
    <>
      <h1>{Component1}</h1>
      <Component2/>

      <h6>{` real name is ${name} from ${city} city`}</h6>
    </>
  );
}

export default App;
