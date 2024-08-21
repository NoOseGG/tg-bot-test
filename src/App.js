import { useTranslation } from "react-i18next";
import "./App.css";
import Header from "./component/Header/Header";
import ZodiacsList from "./component/ZodiacsList/ZodiacsList";
// eslint-disable-next-line no-unused-vars
import { i18next } from "./utils/i18n";
import { useTelegram } from "./hooks/useTelegram";
import { useEffect } from "react";

function App() {
  const { user } = useTelegram();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (user?.language_code === "ru") {
      i18n.changeLanguage("ru");
    } else {
      i18n.changeLanguage("en");
    }
  }, [user, i18n]);

  return (
    <div className="App">
      <Header />
      <ZodiacsList />
    </div>
  );
}

export default App;
