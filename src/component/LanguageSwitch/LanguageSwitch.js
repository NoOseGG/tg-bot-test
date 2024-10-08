import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./LanguageSwitch.module.css";
import styles from "./LanguageSwitch.module.css";

import Switch from "react-switch";
import { useTelegram } from "../../hooks/useTelegram";

export const LanguageSwitch = () => {
  const { user } = useTelegram();
  const { i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState(
    user.language_code === "ru" ? true : false
  );

  const handleChange = () => {
    setIsChecked(!isChecked);

    if (isChecked) {
      i18n.changeLanguage("ru");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className={styles.container}>
      <Switch
        onChange={handleChange}
        checked={isChecked}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <span className={styles.text}>{isChecked ? "Русский" : "English"}</span>
    </div>
  );
};
