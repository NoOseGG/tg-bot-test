import React from "react";
import { Route, Routes } from "react-router";
import Header from "../component/Header/Header";
import ZodiacsList from "../component/ZodiacsList/ZodiacsList";
import ZodiacInfo from "../component/ZodiacInfo/ZodiacInfo";

const AppRouter = () => {
  const protectedLayout = (children) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        {children}
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/">
        <Route index element={protectedLayout(<ZodiacsList />)}></Route>
        <Route
          path="/zodiac/:zodiac"
          element={protectedLayout(<ZodiacInfo />)}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
