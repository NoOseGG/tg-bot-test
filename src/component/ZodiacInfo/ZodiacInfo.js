import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import styles from "./ZodiacInfo.module.css";
import axios from "axios";
import { URLS } from "../../constants/constants";
import { useTranslation } from "react-i18next";
import { useTelegram } from "../../hooks/useTelegram";

const ZodiacInfo = () => {
  const { onToggleBackButton } = useTelegram();
  const { t } = useTranslation();
  const { zodiac } = useParams();
  const [info, setInfo] = useState("");

  useEffect(() => {
    onBackButton(true);
    if (zodiac) {
      const data = {
        sign: zodiac,
        language: "original",
        period: "today",
      };

      axios
        .post(URLS.api, data)
        .then((res) => {
          console.log("data", res);
          console.log(res?.data?.horoscope);

          setInfo(res?.data?.horoscope);
        })
        .catch((err) => {
          console.log("error");
          setInfo("");
        });
    }

    return () => {
      onBackButton(true);
    };
  }, [zodiac]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{t(zodiac)}</div>
      <div className={styles.content}>{info}</div>
    </div>
  );
};

export default ZodiacInfo;
