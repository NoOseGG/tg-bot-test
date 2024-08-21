import React from "react";

import "./Button.css";
import { useTranslation } from "react-i18next";

const Button = (props) => {
  const { t } = useTranslation();

  return (
    <button {...props} className={"button " + props.className}>
      {t("close")}
    </button>
  );
};

export default Button;
