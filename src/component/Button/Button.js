import React, { Children } from "react";

const Button = (props) => {
 

  return (
    <button
      {...props}
      className={"button " + props.className}
    >
      Закрыть
    </button>
  );
};

export default Button;
