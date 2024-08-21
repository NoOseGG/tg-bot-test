import React from "react";
import { useTranslation } from "react-i18next";

import "./LanguageSwitch.module.css";
import styles from "./LanguageSwitch.module.css";

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    switch (event.target.value) {
      case "en": {
        i18n.changeLanguage("en");
        break;
      }
      case "ru": {
        i18n.changeLanguage("ru");
        break;
      }
      default: {
        i18n.changeLanguage("en");
        break;
      }
    }
  };

  return (
    <div className={styles.container}>
      <select
        className={styles.select__language}
        onChange={handleChange}
        defaultValue={i18n.language}
      >
        <option className={styles.select__option} value="en">
          {t("english")}
        </option>
        <option className={styles.select__option} value="ru">
          {t("russian")}
        </option>
      </select>
    </div>
  );
};
