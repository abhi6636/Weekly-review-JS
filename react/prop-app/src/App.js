import React from "react";
import Props from "./Props";
import { data } from "./Data";

const App = () => {
  return (
    <>
      <h1 className="text-center text-success">
        This is a Sample cards app using Props
      </h1>

      <div className="container">
        <div className="row">
          <Props
            imgsrc={data[0].imgsrc}
            title={data[0].title}
            text={data[0].text}
            btn={data[0].btn}
          />
          <Props
            imgsrc={data[1].imgsrc}
            title={data[1].title}
            text={data[1].text}
            btn={data[1].btn}
          />
          <Props
            imgsrc={data[2].imgsrc}
            title={data[2].title}
            text={data[2].text}
            btn={data[2].btn}
          />
          <Props
            imgsrc={data[3].imgsrc}
            title={data[3].title}
            text={data[3].text}
            btn={data[3].btn}
          />
        </div>
      </div>
    </>
  );
};

export default App;
