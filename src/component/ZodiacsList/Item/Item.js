import React from "react";

import "./Item.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const Item = ({ zodiac }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log(path);
    navigate(`zodiac/${path}`);
  };

  return (
    <div onClick={() => handleClick(zodiac.name)} className="zodiac-item">
      <div className="title">{t(zodiac.name)}</div>
      <img className="img" src={zodiac.img} alt="zodiac" />
    </div>
  );
};

export default Item;
