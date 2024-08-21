import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { i18next } from "./utils/i18n";
import { useEffect, useState } from "react";

import "./App.css";

import { useTelegram } from "./hooks/useTelegram";
import AppRouter from "./router/AppRouter";

function App() {
  const { user } = useTelegram();
  const { i18n } = useTranslation();
  const [lan, setLan] = useState("");

  useEffect(() => {
    setLan(user?.language_code);
  }, [user]);

  console.log("user", user);

  useEffect(() => {
    if (user?.language_code === "ru") {
      i18n.changeLanguage("ru");
    } else {
      i18n.changeLanguage("en");
    }
  }, [user, i18n, onMainButton]);

  return (
    <BrowserRouter>
      <div>{lan}</div>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
