import React, { Children } from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button {...props} className={"button " + props.className}>
      Закрыть
    </button>
  );
};

export default Button;
