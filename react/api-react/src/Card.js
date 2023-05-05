import React, { useEffect, useState } from "react";

const Card = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));

  }, []);

  return (
    <>
      {items.map((value) => {
        return (
          <>
            <div className="row m-5" key={value.id}>
              <div className="col-lg-4">
                <div className="card flex border-dark">
                  <div className="card text-bg-dark">
                    <img
                      src={value.image}
                      className="card-img"
                      alt="product"
                    />
                    <div className="card-img-overlay bg-dark p-2 text-dark bg-opacity-25">
                      <h4 className="card-title text-light">{value.title}</h4>
                      <p className="card-text text-light lead">{value.category}</p>
                      <p className="card-text text-light">
                        <small>
                          
                           {value.description}
                        
                        </small>
                      </p>
                      <p className="card-text text-light">
                        <b>
                          <b>
                            <b>Price:${value.price}</b>
                          </b>
                        </b>
                      </p>
                      <a href="#" className="card-link text-light">
                        Rating : ⭐ 
                      </a>
                      <div className="w-100 my-3">
                        <p>
                          <button type="button" className="btn btn-outline-light">
                            Buy Now
                          </button>{" "}
                          <span>
                            <button type="button" className="btn btn-outline-light">
                              Add to Cart
                            </button>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
