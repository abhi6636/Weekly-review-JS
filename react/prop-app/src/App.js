import React from "react";
import Props from "./Props";

const App = () => {
  return (
    <>
      <h1 className="text-center text-success">
        This is a Sample cards app using Props
      </h1>

      <div className="container">
        <div className="row">
          <Props
            imgsrc="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Card 1"
            text="This is card one"
            btn="Read More"
          />
          <Props
          imgsrc = "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Card 2"
          text = "this is the card two"
          btn = "Read Less"
          />
          <Props
             imgsrc = "https://plus.unsplash.com/premium_photo-1661713438592-42a763d67cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
             title="Card 2"
             text = "this is the card three"
             btn = "Read Nothing"
          />
          <Props
             imgsrc = "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
             title="Card 2"
             text = "this is the card four"
             btn = "Because its Dummy"
          />
       
        </div>
      </div>
    </>
  );
};

export default App;
