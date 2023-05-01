import React from "react";

const Props = (props) => {
  return (
    <>
      <div className="col-lg-3 my-3">
        <div className="card">
          <img
            className="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.text}
            </p>
            <a href="#" className="btn btn-primary">
            {props.btn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Props;
