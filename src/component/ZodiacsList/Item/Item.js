import React from "react";

import "./Item.css";
import { useTranslation } from "react-i18next";

const Item = ({ zodiac }) => {
  const { t } = useTranslation();

  return (
    <div className="zodiac-item">
      <div className="title">{t(zodiac.name)}</div>
      <img className="img" src={zodiac.img} alt="zodiac" />
    </div>
  );
};

export default Item;
