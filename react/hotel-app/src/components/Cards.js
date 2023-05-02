import React from "react";

const Cards =(props)=>{
    return(
        <>
        <div class="card text-center">
  <img class="card-img-top" src={props.img} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" class="btn btn-dark">{props.btn}</a>
  </div>
</div>
        </>
    )
}

export default Cards;