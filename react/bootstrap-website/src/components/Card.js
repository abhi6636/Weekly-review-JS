import React from "react";

const Card = () => {
  return (
    <>
      <div class="card">
        <img
          class="card-img-top"
          src="https://placeimg.com/400/300/any"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">This is a card with random pic</h5>
          <p class="card-text">
            This is a sample Bootstrap App
          </p>
          <a href="#" class="btn btn-primary">
            dummy button
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
