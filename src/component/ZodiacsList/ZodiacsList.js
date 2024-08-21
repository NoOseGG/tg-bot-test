import React from "react";

import { zodiacs } from "../../constants/constants.js";

import "./ZodiacsList.css";
import Item from "./Item/Item";

const ZodiacsList = () => {
  return (
    <div className="zodiacs">
      {zodiacs.map((item, index) => (
        <Item zodiac={item} />
      ))}
    </div>
  );
};

export default ZodiacsList;
