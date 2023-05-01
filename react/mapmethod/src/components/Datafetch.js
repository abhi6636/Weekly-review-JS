import React from "react";
import Card from "./Card";
import data from "./Data";

const Datafetch = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <>
                <Card
                  img={value.img}
                  title={value.title}
                  text={value.text}
                  btn={value.btn}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Datafetch;
