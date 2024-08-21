import React from "react";

import "./Item.css";

const Item = ({ zodiac }) => {
  return (
    <div className="zodiac-item">
      <div className="title">{zodiac.name}</div>
      <img className="img" src={zodiac.img} alt="zodiac" />
    </div>
  );
};

export default Item;
