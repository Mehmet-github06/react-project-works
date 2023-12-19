import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} alt="" />
        <div className="about">
          <h2 className="cardTitle">{props.title}</h2>
          <p className="carddescription">{props.description}</p>
        </div>
        <button>See The Details </button>
      </div>
    </div>
  );
};

export default Cards;
