import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-lg-3 my-5">
        <div class="card">
          <img class="card-img-top" src={props.img} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.text}</p>
            <a href="#" class="btn btn-primary">
              {props.btn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
