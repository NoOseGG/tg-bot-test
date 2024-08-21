import { useTranslation } from "react-i18next";
import "./App.css";
import Header from "./component/Header/Header";
import ZodiacsList from "./component/ZodiacsList/ZodiacsList";

function App() {
  const { t } = useTranslation();
  console.log(JSON.stringify(t));
  console.log(t.name);

  return (
    <div className="App">
      <Header />
      <ZodiacsList />
    </div>
  );
}

export default App;
